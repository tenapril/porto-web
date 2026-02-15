export interface Experience {
  company: string;
  url: string;
  roles: {
    title: string;
    startDate: string;
    endDate: string;
  }[];
  tools: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Funding Societies",
    url: "https://fundingsocieties.com",
    roles: [
      {
        title: "Senior Data Engineer",
        startDate: "Nov 2024",
        endDate: "Present",
      },
    ],
    tools: ["Airflow", "AWS", "Snowflake", "QLIK", "Python", "Docker"],
    highlights: [
      "Led the Finance & Risk DE Team to generate multiple reports for Finance Closing, FP&A Reports, ECL, and Regulatory Reports",
      "Migrating legacy pipelines to a more sustainable approach using ECS",
      "Handling several high priority projects with external partners",
    ],
  },
  {
    company: "Paper.id",
    url: "https://paper.id",
    roles: [
      {
        title: "Senior Data Engineer",
        startDate: "May 2024",
        endDate: "Oct 2024",
      },
    ],
    tools: [
      "Airflow",
      "dbt",
      "BigQuery",
      "ArangoDB",
      "Datastream",
      "Pub/Sub",
      "Python",
      "Docker",
    ],
    highlights: [
      "Built a streaming pipeline from scratch using Google Datastream, Pub/Sub, and Dataflow to ingest data from App DB to BigQuery",
      "Fixed existing dbt ELT inefficiencies, improving development time by ~100%",
      "Reduced BigQuery costs by ~20% per month through targeted optimization",
      "Created a cost management dashboard tracking project-level spend daily",
    ],
  },
  {
    company: "Flip.id",
    url: "https://flip.id",
    roles: [
      {
        title: "Data Engineer Manager",
        startDate: "Dec 2022",
        endDate: "May 2024",
      },
      {
        title: "Senior Data Engineer",
        startDate: "Sep 2021",
        endDate: "Dec 2022",
      },
    ],
    tools: [
      "dbt",
      "BigQuery",
      "Dataflow",
      "Datastream",
      "Pub/Sub",
      "Python",
      "Docker",
      "GitLab CI",
    ],
    highlights: [
      "Built a streaming pipeline from scratch using Google Datastream, Pub/Sub, and Dataflow",
      "Created end-to-end ELT pipelines with dbt, implementing tests and query dependencies",
      "Reduced BigQuery costs ~20% per month through strict partitioning and clustering",
      "Built and managed the Data Engineer team from zero — hiring, career framework, and processes",
      "Developed a credit scoring POC for a new lending product with Docker and FastAPI",
      "Provisioned Redash and Looker Studio dashboards for analysts and end users",
    ],
  },
  {
    company: "JULO",
    url: "https://julo.co.id",
    roles: [
      {
        title: "Senior Data Engineer",
        startDate: "Jan 2021",
        endDate: "Sep 2021",
      },
      {
        title: "Data Engineer",
        startDate: "Aug 2018",
        endDate: "Jan 2021",
      },
    ],
    tools: [
      "Airflow",
      "AWS",
      "GCP",
      "Spark",
      "PostgreSQL",
      "Docker",
      "CircleCI",
      "Ansible",
    ],
    highlights: [
      "Managed and maintained Airflow data pipelines running 24/7",
      "Created database replicas for streaming to master DB for analytics",
      "Deployed ML models using Docker and H2O with feature implementation in Django",
      "Designed and implemented PostgreSQL 10 range partitioning for large tables",
      "Built an action log data archiver for a DB with nearly a billion rows",
      "Integrated CircleCI for automated testing and deployment",
    ],
  },
];
