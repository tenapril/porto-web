export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links?: {
    github?: string;
    live?: string;
    article?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Streaming Pipeline",
    description:
      "Built a real-time streaming pipeline from scratch to ingest data from application databases to Google BigQuery using Google Datastream, Pub/Sub, and Dataflow.",
    techStack: ["Datastream", "Pub/Sub", "Dataflow", "BigQuery", "Python"],
  },
  {
    title: "KUACI — Open Source KYC",
    description:
      "Created an open-source KYC tool for Indonesian KTP that translates ID numbers into location, gender, and date of birth. Contributed to the GitHub Arctic Code Vault.",
    techStack: ["Python", "Open Source", "GitHub"],
    links: {
      github: "https://github.com/tenapril/kuaci",
    },
  },
  {
    title: "BigQuery Cost Optimization",
    description:
      "Identified and resolved BigQuery cost inefficiencies through strict partitioning, clustering, and pipeline optimization — reducing monthly costs by ~20%.",
    techStack: ["BigQuery", "dbt", "SQL", "Cost Management"],
  },
  {
    title: "DE Team from Zero",
    description:
      "Built and managed the Data Engineer team at Flip.id from scratch — established hiring pipelines, defined career frameworks, and set up engineering processes to scale the team.",
    techStack: ["Leadership", "Hiring", "Process Design", "Mentoring"],
  },
];
