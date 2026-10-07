export type Project = {
  number: string;
  title: string;
  description: string;
  year: string;
  href: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Airframe",
    description: "Flight logging & analysis",
    year: "2026",
    href: "/work/airframe",
  },
  {
    number: "02",
    title: "METAR Parser",
    description: "Aviation weather parsing",
    year: "2026",
    href: "/work/metar-parser",
  },
  /*{
    number: "03",
    title: "Load Balancer",
    description: "Systems experiment in Rust",
    year: "2026",
    href: "/work/load-balancer",
  },*/
];