import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Link
          key={project.number}
          href={project.href}
          className="project-row"
        >
          <span className="project-row__number">{project.number}</span>

          <div className="project-row__main">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <span className="project-row__year">{project.year}</span>

          <span className="project-row__arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}