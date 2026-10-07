import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <section className="project-hero page">
          <p className="label">
            Work / {project.number}
          </p>

          <h1 className="project-hero__title">
            {project.title}
          </h1>

          <p className="project-hero__description">
            {project.description}
          </p>

          <div className="project-hero__meta">
            <span>{project.year}</span>

            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        {project.slug === "airframe" && (
          <>
            <section className="project-section page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">The Idea</p>
                </div>

                <div className="project-section__content">
                  <p className="project-section__lead">
                    I wanted a simple way to keep track of the aircraft
                    I’d flown in.
                  </p>

                  <p>
                    Flight information had started as scattered notes,
                    which worked until it didn’t. Airframe became an
                    excuse to turn that idea into something more useful
                    while learning how a full-stack application actually
                    behaves beyond the interface.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">The Engineering</p>
                </div>

                <div className="project-section__content">
                  <p className="project-section__lead">
                    The goal wasn’t to build a large product. It was to
                    understand what happens when a small application has
                    to behave like a real one.
                  </p>

                  <p>
                    That meant treating authentication, data access,
                    validation, testing, deployment, observability, and
                    recovery as part of the application itself rather
                    than things to worry about later.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">01 / Architecture</p>
                </div>

                <div className="project-section__content">
                  <h2>Three layers, one application.</h2>

                  <p>
                    The browser handles the interface and user
                    interaction. Next.js handles server-side operations
                    and acts as the secure bridge between the application
                    and Supabase. Supabase provides authentication,
                    PostgreSQL, database functions, and user records.
                  </p>

                  <p>
                    Database access is protected again at the database
                    layer through Row Level Security, so authorization
                    does not depend solely on application code.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">02 / Security</p>
                </div>

                <div className="project-section__content">
                  <h2>Trust boundaries matter.</h2>

                  <p>
                    Authentication and authorization are deliberately
                    separated. User-scoped access is enforced through
                    Supabase Row Level Security, while privileged
                    operations remain server-side.
                  </p>

                  <p>
                    Input validation and cross-user authorization tests
                    were added to make those boundaries explicit and
                    verifiable rather than assumed.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">03 / Verification</p>
                </div>

                <div className="project-section__content">
                  <h2>Correctness needs more than a happy path.</h2>

                  <p>
                    Unit and integration tests cover application logic,
                    while Playwright tests exercise the application from
                    the browser.
                  </p>

                  <p>
                    Linting, type checking, testing, and production builds
                    are also run automatically in CI so a change has to
                    pass the same basic checks before reaching the main
                    branch.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">04 / Operations</p>
                </div>

                <div className="project-section__content">
                  <h2>Shipping is part of the system.</h2>

                  <p>
                    GitHub Actions verifies changes before merge, while
                    Vercel handles deployment after changes reach the main
                    branch.
                  </p>

                  <p>
                    Structured JSON logging records important application
                    events, and a health endpoint checks communication
                    with the database.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">05 / Recovery</p>
                </div>

                <div className="project-section__content">
                  <h2>A system should be reproducible.</h2>

                  <p>
                    Database schema changes are tracked through versioned
                    migrations, making the structure reproducible rather
                    than dependent on manual changes.
                  </p>

                  <p>
                    Backups are also pushed to private off-site storage.
                    The remaining work is to formalize and repeatedly
                    validate the full restore procedure.
                  </p>
                </div>
              </div>
            </section>

            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">Reflection</p>
                </div>

                <div className="project-section__content">
                  <p className="project-section__lead">
                    Airframe taught me that the interesting part of a
                    small application is often everything surrounding the
                    feature itself.
                  </p>

                  <p>
                    Authentication, data boundaries, tests, deployment,
                    logs, backups, and recovery all change how you think
                    about what “finished” actually means.
                  </p>

                  <p>
                    I’m leaving the project intentionally small. The point
                    was to understand the fundamentals, not to keep adding
                    features indefinitely.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {project.slug === "metar-parser" && (

          <>

            <section className="project-section page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">The Experiment</p>
                </div>

                <div className="project-section__content">
                  <p className="project-section__lead">
                    I wanted to see how far I could take a small parser
                    before the format stopped being simple.
                  </p>

                  <p>
                    METAR looked straightforward at first: a compact
                    string containing weather information in a defined
                    format. But the further I went, the more variations,
                    optional groups, unit systems, and edge cases appeared.
                  </p>

                  <p>
                    The project became an exercise in parsing, data
                    normalization, and making a strict format usable by
                    something outside the parser itself.
                  </p>

                </div>

              </div>

            </section>
            <section className="project-section project-section--border page">
              <div className="project-section__grid">
                <div className="project-section__label">
                  <p className="label">01 / Parsing</p>

                </div>
                <div className="project-section__content">
                  <h2>Recognize the language before displaying it.</h2>
                  <p>

                    The decoder tokenizes the report and walks through the
                    groups, delegating individual patterns to specialized
                    parsers.

                  </p>

                  <p>

                    Wind, visibility, RVR, weather, clouds, temperature,
                    pressure, windshear, supplementary information, and
                    other supported groups each have their own parsing
                    rules.

                  </p>

                  <p>

                    The parser also needs to understand where one part of
                    the report ends and another begins, including report
                    boundaries and the transition into supplementary
                    information.

                  </p>

                </div>

              </div>

            </section>

            <section className="project-section project-section--border page">

              <div className="project-section__grid">

                <div className="project-section__label">

                  <p className="label">02 / Normalization</p>

                </div>

                <div className="project-section__content">

                  <p className="project-section__lead">

                    Raw syntax shouldn't leak into the rest of the

                    application.

                  </p>

                  <p>

                    Once individual groups have been parsed, the

                    normalizer converts them into a consistent structure

                    that the frontend can work with.

                  </p>

                  <p>

                    That includes unit conversion, temperature and

                    pressure conversion, RVR normalization, weather and

                    cloud descriptions, and human-readable display values.

                  </p>

                  <p>

                    This also gives the application one place to deal with

                    differences between ICAO conventions and selected FAA

                    representations.

                  </p>

                </div>

              </div>

            </section>

            <section className="project-section project-section--border page">

              <div className="project-section__grid">

                <div className="project-section__label">

                  <p className="label">03 / Frontend</p>

                </div>

                <div className="project-section__content">

                  <h2>The UI stays deliberately simple.</h2>

                  <p>

                    React and TypeScript provide the interface around the

                    decoder: enter a METAR, decode it, and inspect the

                    resulting structured information.

                  </p>

                  <p>

                    Because parsing and normalization happen before the

                    data reaches the UI, the frontend does not need to

                    understand raw METAR syntax.

                  </p>

                </div>

              </div>

            </section>

            <section className="project-section project-section--border page">

              <div className="project-section__grid">

                <div className="project-section__label">

                  <p className="label">04 / Scope</p>

                </div>

                <div className="project-section__content">

                  <h2>Small by design.</h2>

                  <p>

                    METAR Decoder 1.0 focuses specifically on decoding

                    supported METAR reports.

                  </p>

                  <p>

                    It does not attempt to encode reports, decode TAFs or

                    NOTAMs, provide live weather feeds, or fully interpret

                    the entire RMK section.

                  </p>

                  <p>

                    Keeping the scope narrow made it possible to spend

                    more time on the correctness of the formats it did

                    support.

                  </p>

                </div>

              </div>

            </section>

            <section className="project-section project-section--border page">

              <div className="project-section__grid">

                <div className="project-section__label">

                  <p className="label">Reflection</p>

                </div>

                <div className="project-section__content">

                  <p className="project-section__lead">

                    A small parser is a surprisingly good lesson in

                    software boundaries.

                  </p>

                  <p>

                    The project started as an experiment rather than a

                    response to a particular problem. What made it

                    interesting was discovering how quickly a compact

                    specification turns into a collection of edge cases

                    once you try to handle it reliably.

                  </p>

                  <p>

                    Parsing, normalization, and presentation became

                    separate concerns almost naturally. That separation

                    made the application easier to reason about and gave

                    me a better appreciation for the value of structured

                    intermediate data.

                  </p>

                </div>

              </div>

            </section>

            <section className="project-easter-egg page">

              <div className="project-easter-egg__inner">

                <p className="label">One Last Thing</p>

                <p className="project-easter-egg__text">

                  Aviation software should probably contain at least one

                  stupid aviation meme.

                </p>

                <span

                  className="project-easter-egg__mark"

                  aria-hidden="true"

                >

                  ✦

                </span>

              </div>

            </section>

          </>

        )}

        <section className="project-next page">
          <div className="project-next__inner">
            <p className="label">More Work</p>

            <Link href="/work" className="project-next__link">
              View all projects
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}