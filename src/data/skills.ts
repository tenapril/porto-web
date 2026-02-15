export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Scala", "Java"],
  },
  {
    category: "Big Data",
    items: ["Apache Spark", "Kafka", "Pub/Sub"],
  },
  {
    category: "Orchestration",
    items: ["Apache Airflow", "Dagster", "Prefect"],
  },
  {
    category: "Cloud",
    items: ["AWS (Glue, Redshift, S3, EMR)", "GCP (BigQuery, Dataflow)", "Azure"],
  },
  {
    category: "Data Modeling",
    items: ["dbt", "Data Vault", "Star Schema"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "DynamoDB"],
  },
  {
    category: "DevOps / Infra",
    items: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Other",
    items: ["Git", "Linux", "REST APIs"],
  },
];
