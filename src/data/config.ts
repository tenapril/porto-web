export const siteConfig = {
  name: "Andrew Tirto Kusumo",
  title: "Senior Data Engineer",
  bio: "Data Engineer with 7+ years of experience building scalable data pipelines, streaming architectures, and analytics platforms across fintech companies. Passionate about making teams work faster and better through reliable data infrastructure.",
  tagline: "Building data infrastructure that scales.",
  url: "https://andrewtk.dev",
  email: "andrewtirtokusumo@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/andrew-tirto-kusumo/",
    github: "https://github.com/tenapril",
  },
} as const;

export type SiteConfig = typeof siteConfig;
