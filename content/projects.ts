export type Project = {
  number: string;
  slug: string;
  title: string;
  description: string;
  details: string;
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "airframe",
    title: "Airframe",
    description: "Flight logging & analysis",
    details:
      "A flight logging application built around structured flight data, analysis, and the practical constraints of using it over time.",
    stack: ["TypeScript", "React", "Supabase"],
    year: "2026",
  },
  {
    number: "02",
    slug: "metar-parser",
    title: "METAR Parser",
    description: "Aviation weather parsing",
    details:
      "A parser for decoding aviation weather reports into structured, usable data.",
    stack: ["TypeScript"],
    year: "2026",
  },
  /*{
    number: "03",
    slug: "load-balancer",
    title: "Load Balancer",
    description: "Systems experiment in Rust",
    details:
      "A small exploration into networking, concurrency, and distributing requests across servers.",
    stack: ["Rust", "TCP"],
    year: "2026",
  },*/
];