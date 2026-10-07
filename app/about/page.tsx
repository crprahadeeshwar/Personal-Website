import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="about-hero page">
          <p className="label">About</p>

          <h1 className="about-hero__title">
            I’m interested in understanding how things work —
            <em> and finding out what I can build with them.</em>
          </h1>
        </section>

        <section className="about-detail page">
          <div className="about-detail__grid">
            <div className="about-detail__label">
              <p className="label">01 / Current</p>
            </div>

            <div className="about-detail__content">
              <p className="about-detail__lead">
                I’m a computer science student exploring the wider
                landscape of software engineering.
              </p>

              <p>
                Right now, that means following curiosity rather than a
                predefined specialization — systems, infrastructure, AI,
                robotics, fintech, and whatever else proves interesting
                enough to build.
              </p>

              <p>
                I learn mostly by making things. Some projects are
                deliberately small experiments; others become deeper
                exercises in understanding how software behaves beyond
                the interface.
              </p>
            </div>
          </div>
        </section>

        <section className="about-detail about-detail--border page">
          <div className="about-detail__grid">
            <div className="about-detail__label">
              <p className="label">02 / Approach</p>
            </div>

            <div className="about-detail__content">
              <p className="about-detail__lead">
                I’m more interested in questions than checklists.
              </p>

              <p>
                What happens when the system gets bigger? Where should
                the boundary live? What breaks when assumptions change?
                What makes something reliable rather than merely
                functional?
              </p>

              <p>
                I’m still early enough that I don’t know which of those
                questions will matter most to me. That’s part of the
                point.
              </p>
            </div>
          </div>
        </section>

        <section className="about-detail about-detail--border page">
          <div className="about-detail__grid">
            <div className="about-detail__label">
              <p className="label">03 / Outside Software</p>
            </div>

            <div className="about-detail__content">
              <p className="about-detail__lead">
                Some interests don't need to become projects.
              </p>

              <p>
                Aviation has been a constant interest of mine for a long
                time. I’m fascinated by the machines, the operations, and
                the world around them.
              </p>

              <p>
                It’s something I’m happy to keep as an interest in its own
                right while I explore where software takes me.
              </p>
            </div>
          </div>
        </section>

        <section className="about-closing page">
          <p className="about-closing__text">
            Still exploring.
            <br />
            Still building.
          </p>
        </section>
      </main>
    </>
  );
}