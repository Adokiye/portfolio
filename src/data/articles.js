export const articles = [
  {
    id: 5,
    title: "Building a Game Engine, Not a Game: Designing for Reuse on Astral MUD Engine",
    slug: "building-game-engine-not-a-game",
    description:
      "Side-project engineering notes from Astral MUD Engine, a ruleset-agnostic game framework built on Evennia. Why the same architecture instincts that scale payments platforms also make a game engine reusable.",
    tags: ["Architecture", "Game Engine", "Python", "Evennia", "Side Project"],
    image: null,
    publishedDate: "2026-05-18",
    content: `
# Building a Game Engine, Not a Game: Designing for Reuse on Astral MUD Engine

I have spent the last few months working on a side project called Astral MUD Engine. It is built on top of Evennia, the Python framework for multi-user text games, and the brief I gave myself and the two engineers building it with me (Shola and Yusuf) was deliberately uncomfortable.

We are not building a game. We are building a framework that other people can build games on.

That one sentence changed every architectural decision that followed.

## The temptation when you build a game

When most people start a MUD project, they pick a ruleset. D&D 3.5e. Pathfinder. Something homebrew. Then they wire that ruleset directly into every entity, every interaction, every persistence call. A Character has hit_points because D&D characters have hit points. A Weapon has a damage_dice field because a longsword rolls 1d8.

The system works. It also locks you into that one game forever. Want to swap to a different ruleset? You are rewriting the core.

## What we did instead

We pulled the ruleset out of the entity model entirely.

A Character in Astral MUD Engine does not know what game it is in. It knows it can hold things, be held in containers, take actions, and persist. That is the contract. Whether picking up a sword does 1d8 damage or triggers a Pathfinder maneuver is the responsibility of a RulesetMixin layered on top.

This is the M3 entity model: the entity contract, the lifecycle, the containment layer, and persistence are all ruleset-agnostic. D&D 3.5e is one mixin in a directory. You could write a Pathfinder mixin tomorrow. You could write a sci-fi system with no dice at all.

## The concrete example

Take "a player picks up a sword."

In a ruleset-coupled engine, that one line of code touches the dice roller, the inventory cap, the encumbrance system, and the magic-item rules. Change rulesets and you rewrite all of it.

In Astral MUD Engine, that line just moves an entity from one container to another. Whether the sword glows, weighs the character down, or counts toward a magic item attunement cap is a question the ruleset layer answers separately.

## Data over code

The other decision we made early was to push as much game content as possible into data, not code. Entity prototypes live in JSON. Body schemas are lists, not classes. Persistence policy is a configuration, not a hardcoded function. The runtime reads data and reacts.

This sounds obvious until you remember every framework that started "we'll just hardcode a few things" and is now drowning in cross-cutting concerns.

## Why a payments engineer cares about a game engine

The architectural instincts that make a marketplace platform scale (FoodCourt) and a multi-bank wallet route correctly (Moneey App) turn out to be the same instincts that make a game engine reusable. Decouple the policy from the mechanism. Keep the core small. Push variability into swappable layers. Make data the source of truth.

I keep getting reminded that the discipline transfers. Whether it is partner-bank transfer routing or D&D dice rolls, the same answer keeps holding up: do not let the rules of today contaminate the structure of tomorrow.

## Where Astral MUD Engine is now

We demo every milestone in the Evennia web client (localhost:4001 in our case) with concrete in-game scenarios, not abstract test runs. "A player picks up a sword." "Two characters in different rooms trade an item." "A container is destroyed while items are inside it." If a feature cannot survive a real game scenario, it is not done.

It is a side project, but the engineering muscle it has built up is anything but. If you are a senior engineer looking for a side project that quietly makes you better at your day job, build something that forces you to design for reuse from day one.
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
