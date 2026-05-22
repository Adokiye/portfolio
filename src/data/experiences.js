export const experiences = [
  {
    id: 1,
    title: "Co-Founder & CTO, Principal Engineer",
    company: "FoodCourt (Y Combinator S22)",
    role: "Early-stage product engineering",
    year: "Aug 2021 - Present",
    description:
      "Build and operate a multi-tenant marketplace and payments platform end to end, from the NestJS checkout service and PostgreSQL ledger to React Native and Flutter mobile apps, AWS infrastructure, and the RAG support assistant.",
    tags: ["NestJS", "PostgreSQL", "Redis", "AWS EKS", "React Native", "Flutter", "RAG"],
  },
  {
    id: 2,
    title: "Staff DevOps and Platform Engineer",
    company: "Comptware Inc",
    role: "Multi-cloud platform with internal product tooling",
    year: "Jan 2017 - Present",
    description:
      "Own the Kubernetes platform across AWS EKS, GCP GKE, and Azure AKS for ~50 production services with Helm and ArgoCD GitOps, and built the internal platform admin tool in TypeScript and React used daily by SRE and product engineers.",
    tags: ["Kubernetes", "EKS", "GKE", "AKS", "ArgoCD", "TypeScript", "React"],
  },
  {
    id: 3,
    title: "Senior Full Stack and DevOps Engineer",
    company: "Mkobo Bank",
    role: "Digital banking and payments product",
    year: "Sep 2018 - Jul 2021",
    description:
      "Built the core banking transaction service in Node.js with a PostgreSQL double-entry ledger, shipped the Flutter customer banking app, and built the React payments-ops dashboard. Owned containerization, Kubernetes deploys, Prometheus and Grafana observability, Sentry crash reporting, and on-call playbooks for the ledger and reconciliation jobs.",
    tags: ["Node.js", "PostgreSQL", "Flutter", "React", "Docker", "Kubernetes"],
  },
  {
    id: 4,
    title: "Staff DevOps Engineer",
    company: "Vyudu Inc",
    role: "SaaS analytics product",
    year: "Sep 2016 - Aug 2018",
    description:
      "Built a multi-tenant analytics dashboard in React and Node.js with custom report builders, scheduled S3 exports, and SAML SSO. Designed the AWS production layout with Terraform across EKS, RDS, S3, CloudFront, and Route53, plus Prometheus + Grafana observability and on-call playbooks.",
    tags: ["React", "Node.js", "AWS", "Terraform", "EKS", "Prometheus", "Grafana"],
  },
  {
    id: 5,
    title: "Full Stack and Platform Engineer",
    company: "SocketWorks Limited",
    role: "Marketplace product and platform",
    year: "Jul 2014 - Aug 2016",
    description:
      "Built Node.js and Express APIs with PostgreSQL behind a React frontend for the company's flagship marketplace, owning the order, search, and notification modules. Replaced a slow LIKE-based search with a Redis-backed inverted index, dropping search P95 from ~3s to ~250ms. Stood up the first observability stack with Prometheus, Grafana, and Loki, with PromQL alerts paging the on-call engineer via Opsgenie.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "Redis", "Docker"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Multi-Vendor Checkout and Payments Service",
    description:
      "NestJS checkout service with idempotent order placement, split-payment routing to vendor wallets, and webhook reconciliation against a PostgreSQL ledger. Processes tens of thousands of monthly transactions.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Payments", "Idempotency"],
    year: "2021-Present",
    company: "FoodCourt",
  },
  {
    id: 2,
    title: "RAG Support Assistant",
    description:
      "FastAPI service with pgvector embeddings of ~12k support docs and historical order records, integrated into the support inbox to surface top-3 likely resolutions. Cut tier-1 first-response time by ~60%.",
    tags: ["FastAPI", "OpenAI", "pgvector", "RAG", "Embeddings"],
    year: "2024-Present",
    company: "FoodCourt",
  },
  {
    id: 3,
    title: "Customer and Vendor Mobile Apps",
    description:
      "Shipped the FoodCourt customer app in React Native and vendor app in Flutter to App Store and Play Store with Fastlane CI, FCM and APNs push notifications, deep linking for order tracking, and Crashlytics plus Sentry crash analytics.",
    tags: ["React Native", "Flutter", "Fastlane", "FCM", "APNs", "Crashlytics"],
    year: "2022-Present",
    company: "FoodCourt",
  },
  {
    id: 4,
    title: "Multi-Cloud Kubernetes Platform",
    description:
      "Operate Kubernetes across AWS EKS, GCP GKE, and Azure AKS for ~50 production services with Helm, ArgoCD GitOps, Karpenter, and CastAI bin-packing that cut monthly compute spend by ~28%.",
    tags: ["Kubernetes", "EKS", "GKE", "AKS", "ArgoCD", "Karpenter", "CastAI"],
    year: "2017-Present",
    company: "Comptware",
  },
  {
    id: 5,
    title: "Internal Platform Admin Tool",
    description:
      "TypeScript and React app on top of the platform APIs for service catalog browsing, deploy rollback flows, and incident triage workflows used daily by SRE and product engineers.",
    tags: ["TypeScript", "React", "Internal Tools", "Platform"],
    year: "2019-Present",
    company: "Comptware",
  },
  {
    id: 6,
    title: "Core Banking Transaction Service",
    description:
      "Node.js banking core with a PostgreSQL double-entry ledger, idempotency keys for safe retries, and an outbox pattern fanning out to payment and notification consumers.",
    tags: ["Node.js", "PostgreSQL", "Ledger", "Idempotency", "Outbox"],
    year: "2018-2021",
    company: "Mkobo Bank",
  },
  {
    id: 7,
    title: "Flutter Customer Banking App",
    description:
      "Customer mobile banking app in Flutter and Dart covering biometric login, OTP-protected transfers, offline-first transaction history with SQLite caching, and FCM plus APNs push notifications.",
    tags: ["Flutter", "Dart", "SQLite", "Biometric Auth", "FCM"],
    year: "2019-2021",
    company: "Mkobo Bank",
  },
  {
    id: 8,
    title: "Payments Operations Dashboard",
    description:
      "Internal React and Node.js dashboard for transaction visibility, reconciliation against PSP statements, fraud signal triage, and operator audit logs. Shortened reconciliation cycles from days to hours.",
    tags: ["React", "Node.js", "Reconciliation", "Fraud Signals", "Audit"],
    year: "2019-2021",
    company: "Mkobo Bank",
  },
  {
    id: 9,
    title: "Multi-Tenant Analytics Dashboard",
    description:
      "React and Node.js dashboard for client product teams with custom report builders, scheduled S3 exports, SAML-based SSO, and a Terraform-managed AWS production layout (EKS, RDS, S3, CloudFront, Route53).",
    tags: ["React", "Node.js", "AWS", "Terraform", "SAML SSO"],
    year: "2016-2018",
    company: "Vyudu",
  },
  {
    id: 10,
    title: "Marketplace Search and Order Modules",
    description:
      "Node.js and Express APIs with PostgreSQL behind a React frontend, owning the order, search, and notification modules. Replaced a slow LIKE-based search with a Redis-backed inverted index, dropping search P95 from ~3s to ~250ms.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "Redis"],
    year: "2014-2016",
    company: "SocketWorks",
  },
];

export const allExperiences = [
  {
    id: 1,
    title: "FoodCourt (Y Combinator S22) - Co-Founder & CTO, Principal Engineer",
    description:
      "Build and operate a multi-tenant marketplace and payments platform end to end across application code, mobile, DevOps, and SRE. Designed the NestJS multi-vendor checkout with idempotent order placement and split-payment routing, dropped P95 order-create latency ~40% by denormalizing the vendor catalog into Redis with TTL invalidation, migrated deploys to GitHub Actions plus ArgoCD GitOps with PromQL-gated canary rollouts at 99.9%+ uptime, and wrote the Terraform set covering EKS, RDS PostgreSQL, S3, SQS, Lambda, ECR, and Secrets Manager. Run the SRE practice end to end: SLOs on order-success-rate and payment-callback latency with PromQL alerting to PagerDuty, error-budget burn rules, weekly blameless postmortems, and Grafana, Loki, and OpenTelemetry dashboards; brought repeat-incident rate from ~30% to ~8%. Built the RAG support assistant in FastAPI with pgvector that cut tier-1 first-response time ~60%, and shipped the customer and vendor mobile apps in React Native and Flutter to App Store and Play Store via Fastlane CI.",
    tags: ["NestJS", "PostgreSQL", "Redis", "AWS EKS", "React Native", "Flutter", "RAG", "OpenAI", "pgvector"],
    year: "August 2021 - Present",
    link: "https://www.getfoodcourt.com/",
  },
  {
    id: 2,
    title: "Comptware Inc - Staff Engineer, Platform and Product",
    description:
      "Own the multi-cloud Kubernetes platform across AWS EKS, GCP GKE, and Azure AKS for ~50 production services with Helm, ArgoCD GitOps, namespace tenancy, and cluster upgrade rollouts. Cut monthly compute spend ~28% with Karpenter spot-priority provisioning and CastAI bin-packing. Wrote the Oracle Database backup and restore runbook combining RMAN, GoldenGate CDC, and S3 cross-region streaming for DR with quarterly restore drills. Built an internal platform admin tool in TypeScript and React for service catalog browsing, deploy rollback, and incident triage used daily by SRE and product engineers. Operate Temporal clusters end to end and built the Prometheus, Grafana, Loki, and OpenTelemetry observability template that every new service inherits.",
    tags: ["Kubernetes", "AWS EKS", "GCP GKE", "Azure AKS", "ArgoCD", "Karpenter", "CastAI", "Oracle", "GoldenGate", "Temporal", "TypeScript", "React"],
    year: "January 2017 - Present",
    link: "https://comptware.com",
  },
  {
    id: 3,
    title: "Mkobo Bank - Senior Full Stack and DevOps Engineer",
    description:
      "Built the core banking transaction service in Node.js with a PostgreSQL double-entry ledger, idempotency keys, and an outbox pattern fanning out to payment and notification consumers. Shipped the customer mobile banking app in Flutter and Dart covering biometric login, OTP-protected transfers, offline-first transaction history with SQLite caching, and FCM plus APNs push. Built the internal payments-ops dashboard in React and Node.js for transaction visibility, reconciliation, and fraud signal triage. Owned the DevOps side too: containerized services in Docker, migrated CI from Jenkins to GitHub Actions, deployed onto Kubernetes with HPA tuned against transaction throughput, and stood up the SRE stack with Prometheus, Grafana, PromQL alerting to PagerDuty, Elasticsearch logs, Sentry crash reports, and on-call runbooks for the ledger and reconciliation jobs.",
    tags: ["Node.js", "PostgreSQL", "Flutter", "Dart", "React", "Docker", "Kubernetes"],
    year: "September 2018 - July 2021",
    link: "https://mkobobank.com/",
  },
  {
    id: 4,
    title: "Vyudu Inc - Staff DevOps Engineer",
    description:
      "Owned both sides of the stack. Built and shipped a multi-tenant analytics dashboard in React and Node.js with custom report builders, scheduled S3 exports, and SAML-based SSO. Designed the AWS production layout with Terraform covering EKS, RDS PostgreSQL, S3, CloudFront, and Route53 across staging and production. Set up the SRE practice: Prometheus and Grafana observability with PromQL alerting to Slack and PagerDuty, on-call playbooks for the React app, Node.js API, and PostgreSQL tier, and incident response rituals that improved uptime and reduced MTTR.",
    tags: ["React", "Node.js", "AWS", "Terraform", "EKS", "Prometheus", "Grafana", "PagerDuty"],
    year: "September 2016 - August 2018",
  },
  {
    id: 5,
    title: "SocketWorks Limited - Full Stack and Platform Engineer",
    description:
      "Built Node.js and Express APIs with PostgreSQL behind a React frontend for the company's flagship marketplace, owning the order, search, and notification modules end to end. Replaced a slow PostgreSQL LIKE-based search with a Redis-backed inverted index and pagination cursor logic, dropping search P95 from ~3s to ~250ms. Containerized the services in Docker, set up CI on Jenkins with linting, tests, and image builds gating deploys, and deployed onto an early Kubernetes setup with rolling updates. Stood up the team's first observability stack with Prometheus, Grafana, and Loki, including PromQL alerts on order failure rate and API latency paging the on-call engineer via Opsgenie, and introduced weekly incident reviews.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    year: "July 2014 - August 2016",
  },
  {
    id: 6,
    title: "Earlier Engineering Experience - Prospa, Tokenizer, Sprinble, Hotels.ng",
    description:
      "Shipped mobile apps to App Store and Play Store using Flutter, React Native, Kotlin, and Swift for early-stage fintech and SME banking products at Prospa, Tokenizer, and Sprinble, owning secure auth, transactions, and push notifications. Built backend REST API integrations and travel workflow services at Hotels.ng in Node.js and Ruby on Rails, improving API consistency and delivery speed.",
    tags: ["Flutter", "React Native", "Kotlin", "Swift", "Node.js", "Ruby on Rails"],
    year: "2012 - 2014",
  },
];
