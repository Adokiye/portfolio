export const articles = [
  {
    id: 5,
    title: "Building a Game Engine, Not a Game: Designing for Reuse on Astral MUD Engine",
    slug: "building-game-engine-not-a-game",
    description:
      "Side-project engineering notes from Astral MUD Engine, a ruleset-agnostic game framework built on Evennia. Architecture decisions, the M3 entity model, and the server CPU and memory curve as game capabilities grow.",
    tags: ["Architecture", "Game Engine", "Python", "Evennia", "Side Project"],
    image: null,
    publishedDate: "2026-05-18",
    content: `
# Building a Game Engine, Not a Game: Designing for Reuse on Astral MUD Engine

I have spent the last few months working on a side project called Astral MUD Engine. It is built on top of Evennia, the Python framework for multi-user text games, and the brief I gave myself was deliberately uncomfortable.

I am not building a game. I am building a framework that other people can build games on.

That one sentence changed every architectural decision that followed.

## The temptation when you build a game

When most people start a MUD project, they pick a ruleset. D&D 3.5e. Pathfinder. Something homebrew. Then they wire that ruleset directly into every entity, every interaction, every persistence call. A Character has hit_points because D&D characters have hit points. A Weapon has a damage_dice field because a longsword rolls 1d8.

The system works. It also locks you into that one game forever. Want to swap to a different ruleset? You are rewriting the core.

## What I did instead

I pulled the ruleset out of the entity model entirely.

A Character in Astral MUD Engine does not know what game it is in. It knows it can hold things, be held in containers, take actions, and persist. That is the contract. Whether picking up a sword does 1d8 damage or triggers a Pathfinder maneuver is the responsibility of a RulesetMixin layered on top.

This is the M3 entity model: the entity contract, the lifecycle, the containment layer, and persistence are all ruleset-agnostic. D&D 3.5e is one mixin in a directory. You could write a Pathfinder mixin tomorrow. You could write a sci-fi system with no dice at all.

## The concrete example

Take "a player picks up a sword."

In a ruleset-coupled engine, that one line of code touches the dice roller, the inventory cap, the encumbrance system, and the magic-item rules. Change rulesets and you rewrite all of it.

In Astral MUD Engine, that line just moves an entity from one container to another. Whether the sword glows, weighs the character down, or counts toward a magic item attunement cap is a question the ruleset layer answers separately.

## Data over code

The other decision I made early was to push as much game content as possible into data, not code. Entity prototypes live in JSON. Body schemas are lists, not classes. Persistence policy is a configuration, not a hardcoded function. The runtime reads data and reacts.

This sounds obvious until you remember every framework that started "we'll just hardcode a few things" and is now drowning in cross-cutting concerns.

## The cost of capability: server CPU and memory keep climbing

The honest part of any game engine post nobody writes about: as capabilities grow, the server resource curve gets steeper.

When I had a small world with a handful of entities and one or two commands, idle CPU sat near zero and the resident memory of the Evennia process was small enough to ignore. That ended quickly.

Every new system adds a fixed cost and a per-entity cost. A few patterns I keep watching:

- **Entity count drives memory linearly.** Every persisted object holds attributes, tags, scripts, and a backref into the type system. Spin up a few thousand items in a world and the process memory steps up in chunks you can feel.
- **Ruleset mixins do per-tick work.** A combat system that ticks regen, a stamina system that decays, a perception system that scans nearby rooms — each one adds CPU even when the world looks quiet. The cost is "small per entity" multiplied by every active entity.
- **Containment trees are not free.** Looking up "what is in this room, transitively?" cheap when a room has a chair. Less cheap when a chair contains a chest that contains a pouch that contains coins.
- **Persistence chatter compounds.** Every attribute write is a database round trip if you do not batch. Add a system that touches many entities per tick and suddenly the DB is the hot path, not the game logic.
- **The web client and signal dispatch are real overhead.** Twisted's reactor handles a lot, but every active session, every message broadcast, every signal fired through the event hook system costs something. Multiply by concurrent players and it shows up in CPU.

The fix is not "make it faster" in the abstract. The fix is to measure, isolate, and decide which capability is worth the headroom it consumes. A combat tick that runs every second across every NPC in the world is a different bill than the same tick running only on engaged NPCs.

I am now baselining process CPU and resident memory after every significant feature merge. Three numbers I track:

1. Idle CPU with N entities loaded.
2. CPU under a scripted scenario (combat round, room transit, mass spawn).
3. Resident memory after a full world load and a full restart.

When a number moves the wrong way, the question is not "can we afford a bigger box?" The question is "did this capability justify the cost, and can we make it lazy, batched, or scoped to active entities only?"

## Where Astral MUD Engine is now

I demo every milestone in the Evennia web client (localhost:4001 in my case) with concrete in-game scenarios, not abstract test runs. "A player picks up a sword." "Two characters in different rooms trade an item." "A container is destroyed while items are inside it." If a feature cannot survive a real game scenario, it is not done.

The next chapter is the boring, important one: keeping the server resource curve gentle as the capability surface keeps growing.
    `.trim(),
  },
  {
    id: 1,
    title: "Building Revenue-Driven Engineering Operating Systems",
    slug: "revenue-driven-engineering-operating-systems",
    description:
      "How to run engineering as a measurable business driver by tying delivery cadence, reliability, and platform decisions directly to revenue outcomes.",
    tags: ["Engineering Leadership", "Revenue Strategy", "Execution"],
    image: null,
    publishedDate: "2025-10-04",
    content: `
# Building Revenue-Driven Engineering Operating Systems

Engineering should not be measured by output volume alone. It should be measured by measurable business movement.

## The model

At leadership level, I track three linked systems:

1. Feature-to-revenue cycle time.
2. Deployment quality and rollback rates.
3. Reliability impact on transaction success and retention.

## What changes when this is done right

- Product experimentation speeds up.
- Revenue experiments ship sooner.
- Teams prioritize durable architecture because it protects growth, not just code quality.

## Practical implementation

- Tie sprint planning to business outcomes, not generic backlog throughput.
- Run platform debt work in the same planning horizon as growth features.
- Report engineering KPIs in executive language: conversion impact, cost impact, and uptime impact.

A high-performing engineering organization is not just efficient. It is commercially aligned.
    `.trim(),
  },
  {
    id: 2,
    title: "Scaling Marketplace and Payments Platforms Without Losing Reliability",
    slug: "scaling-marketplace-payments-with-reliability",
    description:
      "A practical architecture playbook for multi-tenant transactions, async workflows, and uptime discipline across high-volume marketplaces.",
    tags: ["Marketplaces", "Payments", "Architecture", "Reliability"],
    image: null,
    publishedDate: "2025-08-12",
    content: `
# Scaling Marketplace and Payments Platforms Without Losing Reliability

Marketplace and payments systems fail when transactional complexity grows faster than platform discipline.

## Core architecture choices that matter

- Explicit tenant boundaries.
- Clear separation between synchronous transaction paths and async processing.
- Queue-backed retries with observability at every critical step.

## Performance and reliability levers

- Use caching and queue orchestration for peak traffic smoothing.
- Instrument payment and order lifecycles end-to-end.
- Make failure states visible to internal dashboards so operations can respond in real time.

## Why this works

Teams stop guessing where failures happen. They can isolate bottlenecks, protect successful transaction rates, and scale with confidence.
    `.trim(),
  },
  {
    id: 3,
    title: "Introducing AI Automation in Production Teams",
    slug: "introducing-ai-automation-production-teams",
    description:
      "How to deploy AI-powered internal tooling for reporting and support workflows without adding unnecessary platform complexity.",
    tags: ["AI", "RAG", "Automation", "Operations"],
    image: null,
    publishedDate: "2025-05-30",
    content: `
# Introducing AI Automation in Production Teams

Most organizations do not need broad AI transformation plans. They need focused automation where repetitive workflows are slowing operations.

## Where AI delivered the highest ROI

- Internal reporting synthesis.
- Support and operations workflow acceleration.
- Faster knowledge retrieval over trusted internal data.

## Deployment principles

1. Start narrow and measurable.
2. Keep retrieval tied to authoritative data sources.
3. Validate model output quality before scaling scope.
4. Track cost, latency, and workflow impact continuously.

AI systems create value when they reduce operational friction and improve decision speed at scale.
    `.trim(),
  },
  {
    id: 4,
    title: "From Startup Chaos to Structured Engineering Execution",
    slug: "startup-chaos-to-structured-engineering-execution",
    description:
      "A leadership framework for turning fragmented engineering teams into accountable, KPI-driven execution units.",
    tags: ["Org Design", "KPI", "Engineering Management", "Delivery"],
    image: null,
    publishedDate: "2025-01-21",
    content: `
# From Startup Chaos to Structured Engineering Execution

Early-stage teams often move quickly but inconsistently. Scaling requires structure without losing momentum.

## Transformation priorities

- Introduce sprint discipline tied to measurable outcomes.
- Define engineering KPIs that track velocity and quality together.
- Build clear ownership lines across platform, product, and operations.

## Leadership mechanics

- Weekly planning with explicit delivery commitments.
- Incident reviews tied to prevention actions.
- Hiring and mentorship around execution standards, not just technical depth.

The goal is not process for process sake. The goal is predictable, high-quality execution that supports growth.
    `.trim(),
  },
];
