export interface Project {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links?: {
    github?: string;
    live?: string;
    article?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Real-Time Streaming Pipeline",
    description:
      "Designed and implemented a CDC-based streaming pipeline to migrate the data platform from batch-only ingestion to real-time, enabling near-instant data availability in BigQuery.",
    highlights: [
      "Enabled MySQL CDC via binlog replication in coordination with DevOps, feeding change events through Pub/Sub into Dataflow",
      "Architected a cost-efficient pipeline with separated staging and production layers for safe iteration and deployment",
      "Replaced batch-dependent workflows, unlocking real-time analytics and reporting for management",
    ],
    techStack: ["MySQL CDC", "Datastream", "Pub/Sub", "Dataflow", "BigQuery"],
  },
  {
    title: "KUACI — Open Source KYC",
    description:
      "Built an open-source data enrichment library for Indonesian KTP (national ID) that extracts gender, date of birth, district, and city from ID numbers — enabling automated validation against user-submitted data.",
    highlights: [
      "Originated from a hackathon project; designed to cross-validate KTP-derived fields against user input for fraud detection",
      "Improved credit scoring accuracy by enriching identity data without additional user friction",
      "Contributed to the GitHub Arctic Code Vault",
    ],
    techStack: ["Python", "Open Source", "Data Enrichment"],
    links: {
      github: "https://github.com/tenapril/kuaci",
    },
  },
  {
    title: "BigQuery Cost Optimization",
    description:
      "Spearheaded a company-wide initiative to reduce BigQuery costs by auditing unoptimized queries, enforcing partitioning and clustering standards, and building observability tooling.",
    highlights: [
      "Implemented table partitioning and clustering strategies across key datasets to minimize scan costs",
      "Built a cost monitoring dashboard and automated alerts for anomalous query spend",
      "Conducted knowledge-sharing sessions and ongoing QC reviews to embed cost-awareness into the team culture",
    ],
    techStack: ["BigQuery", "dbt", "SQL", "Monitoring", "Cost Management"],
  },
  {
    title: "DE Team from Zero",
    description:
      "Took on my first engineering leadership role at Flip.id, building the Data Engineering team from the ground up — from hiring and process design to establishing team and career frameworks.",
    highlights: [
      "Grew the team from 1 to 4 engineers over 1.5 years, owning the full hiring pipeline end-to-end",
      "Defined team frameworks covering GitHub workflows, PR review standards, and weekend on-call support rotations",
      "Established a career framework for growth paths; team was recognized multiple times for responsiveness and reliability",
    ],
    techStack: ["Leadership", "Hiring", "Process Design", "Mentoring"],
  },
];
