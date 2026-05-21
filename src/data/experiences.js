export const experiences = [
  {
    id: 1,
    title: "Co-Founder & CTO",
    company: "FoodCourt (YC S22)",
    role: "Executive Leadership",
    year: "Aug 2021 - Present",
    description:
      "Own engineering strategy, platform architecture, and delivery systems for a multi-tenant marketplace and payments platform across US and African markets.",
    tags: ["NestJS", "Rails", "PostgreSQL", "Redis", "AWS"],
  },
  {
    id: 2,
    title: "Staff DevOps Engineer",
    company: "Comptware Inc",
    role: "Platform Engineering",
    year: "Jan 2017 - Present",
    description:
      "Led platform reliability and cloud operations across multi-environment Kubernetes estates, defined SLO driven operations, and standardized GitOps delivery patterns for critical production services.",
    tags: ["Kubernetes", "AWS EKS", "GitOps", "Helm", "ArgoCD"],
  },
  {
    id: 3,
    title: "Senior Full Stack Engineer & DevOps Engineer",
    company: "Mkobo Bank",
    role: "Fintech Platform",
    year: "Nov 2020 - Dec 2021",
    description:
      "Owned secure fintech service delivery from application to runtime, hardened CI/CD and observability, and improved release confidence for customer facing banking workflows.",
    tags: ["Postgres", "Docker", "Kubernetes", "Monitoring", "Flutter"],
  },
  {
    id: 4,
    title: "Senior DevOps Engineer",
    company: "Vyudu Inc",
    role: "Cloud Infrastructure",
    year: "Jan 2020 - Jan 2021",
    description:
      "Architected resilient cloud infrastructure, automated deployments and rollback paths, and established incident response playbooks that reduced operational risk during rapid product delivery.",
    tags: ["AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
  },
  {
    id: 5,
    title: "Senior Full Stack Engineer",
    company: "SocketWorks Limited",
    role: "Product Engineering",
    year: "Jan 2020 - Nov 2020",
    description:
      "Delivered high impact product features and API integrations while partnering with infrastructure teams to improve service performance, deployment reliability, and production readiness.",
    tags: ["Node.js", "React", "PostgreSQL", "CI/CD", "AWS"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Marketplace and Payments Core Platform",
    description:
      "Designed and launched the core marketplace + payment infrastructure for multi-vendor transactions with improved throughput and reliability.",
    tags: ["Marketplaces", "Payments", "Architecture", "AWS"],
    year: "2021-Present",
    company: "FoodCourt",
  },
  {
    id: 2,
    title: "AI Reporting and Support Automation",
    description:
      "Introduced RAG-powered workflows and internal AI reporting tools to reduce manual operations and increase support efficiency.",
    tags: ["OpenAI", "RAG", "Automation", "Internal Tools"],
    year: "2024-Present",
    company: "FoodCourt",
  },
  {
    id: 3,
    title: "Payments Ops Dashboard",
    description:
      "Built internal dashboards for transaction visibility, fraud signals, and operational monitoring to improve decision speed.",
    tags: ["Dashboards", "Reconciliation", "Fraud Monitoring", "Data"],
    year: "2020-2021",
    company: "Mkobo Bank",
  },
  {
    id: 4,
    title: "Cloud Platform Reliability Program",
    description:
      "Scaled Kubernetes operations and observability standards with GitOps governance, improving deployment safety and runtime reliability across teams.",
    tags: ["Kubernetes", "DevOps", "GitOps", "Observability"],
    year: "2017-Present",
    company: "Comptware",
  },
];

export const allExperiences = [
  {
    id: 1,
    title: "FoodCourt (YC S22) - Co-Founder & CTO",
    description:
      "Led engineering strategy and execution for a multi-tenant food marketplace and payments platform. Scaled architecture and delivery systems to support sustained growth, high availability, and faster product iteration.",
    tags: ["NestJS", "Ruby on Rails", "PostgreSQL", "Redis", "AWS", "RAG"],
    year: "August 2021 - Present",
    link: "https://www.getfoodcourt.com/",
  },
  {
    id: 2,
    title: "Comptware Inc - Staff DevOps Engineer",
    description:
      "Led Kubernetes platform operations on AWS EKS with Helm and ArgoCD GitOps workflows, owning production reliability across stateless and stateful services. Managed RDS, S3, and ECR backed delivery pipelines, implemented repeatable backup and restore patterns with pg_dump, pg_restore, and S3 streaming, and guided incident response for pod failures, autoscaling drift, and release regressions. Operated Temporal clusters end to end including namespaces, schema jobs, frontend and history pods, and workflow queue health, while establishing observability with Prometheus, Grafana, Loki, and Elasticsearch dashboards using actionable PromQL signals.",
    tags: ["Kubernetes", "AWS EKS", "GitOps", "Helm", "ArgoCD", "Temporal", "Prometheus", "Grafana"],
    year: "January 2017 - Present",
    link: "https://comptware.com",
  },
  {
    id: 3,
    title: "Mkobo Bank - Senior Full Stack Engineer & DevOps Engineer",
    description:
      "Owned secure fintech service delivery across application and infrastructure layers, strengthening release governance, workload resiliency, and runtime visibility for critical transaction paths. Built and supported containerized services with robust deployment controls, improved database operational confidence, and tightened monitoring coverage for faster diagnosis and recovery.",
    tags: ["Postgres", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
    year: "November 2020 - December 2021",
    link: "https://mkobobank.com/",
  },
  {
    id: 4,
    title: "Vyudu Inc - Senior DevOps Engineer",
    description:
      "Architected and operated cloud native infrastructure with a strong focus on reliability engineering, automation, and production hardening. Drove deployment standardization, proactive observability, and on-call readiness to improve uptime and reduce mean time to restore during incidents.",
    tags: ["AWS", "Kubernetes", "Prometheus", "Grafana", "CI/CD"],
    year: "January 2020 - January 2021",
  },
  {
    id: 5,
    title: "SocketWorks Limited - Senior Full Stack Engineer",
    description:
      "Delivered business critical product capabilities and backend integrations while improving engineering quality through better service instrumentation, release discipline, and cross-functional delivery leadership.",
    tags: ["Node.js", "React", "PostgreSQL", "APIs", "CI/CD"],
    year: "January 2020 - November 2020",
  },
];
