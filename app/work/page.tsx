import Link from "next/link";
import Header from "@/components/Header";
import { projects } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <>
      <Header />

      <main>
        <section className="work-hero page">
          <p className="label">Work</p>

          <h1 className="work-hero__title">
            A selection of things I’ve built, explored, and learned from.
          </h1>
        </section>

        <section className="work-index page">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="work-project"
            >
              <div className="work-project__number">
                <span>{project.number}</span>
              </div>

              <div className="work-project__content">
                <div className="work-project__heading">
                  <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>

                  <span className="work-project__year">
                    {project.year}
                  </span>
                </div>

                <p className="work-project__details">
                  {project.details}
                </p>

                <div className="work-project__stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                className="work-project__arrow"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}