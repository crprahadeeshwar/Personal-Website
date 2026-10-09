import Link from "next/link";
import { projects } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="project-row"
        >
          <span className="project-row__number">{project.number}</span>

          <div className="project-row__main">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <span className="project-row__year">{project.year}</span>

          <ArrowUpRight
            className="project-row__arrow"
            size={18}
            strokeWidth={1.5}
            aria-hidden="true"
            />
        </Link>
      ))}
    </div>
  );
}