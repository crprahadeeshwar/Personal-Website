import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero page">
          <p className="label">Computer Science & Engineering</p>

          <h1 className="hero__title">
            I build things to understand{" "}
            <em>how they work.</em>
          </h1>
          <p className="hero__description">
            Software, systems, infrastructure — and whatever proves interesting
            enough to build.
          </p>
        </section>
                <section className="hero-links page">
          <a
            href="https://github.com/crprahadeeshwar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/prahadeeshwar-c-r-24676934a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a
            href="/resume.pdf" 
            download="resume.pdf"
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="work page">
          <div className="section-heading">
            <p className="label">Selected Work</p>
          </div>

          <ProjectList />
        </section>
        <section className="about page">
          <div className="about__grid">
            <div className="about__label">
              <p className="label">About</p>
              <span className="about__number">01</span>
            </div>

            <div className="about__content">
              <p className="about__lead">
                I’m a computer science student interested in understanding how things
                work and figuring out what I can build with them.
              </p>

              <p>
                I’m currently exploring the wider landscape of software engineering —
                from systems and infrastructure to AI, robotics, and fintech. I’m less
                interested in following a predefined path than in finding the problems
                and disciplines that keep me curious.
              </p>

              <p>
                Aviation is still a big part of what interests me outside software.
                For now, though, I’m deliberately exploring beyond it.
              </p>
            </div>
          </div>
        </section>
        <section className="contact page">
          <div className="contact__grid">
            <p className="label">Contact</p>

            <div className="contact__content">
              <h2 className="contact__title">
                Have something worth discussing?
              </h2>

             <a href="/contact" className="contact__link">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            </div>
          </div>
        </section>
        <footer className="footer page">
        <div className="footer__inner">
          <span>CRP</span>

          <div className="footer__links">
            <a href="https://github.com/crprahadeeshwar" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/prahadeeshwar-c-r-24676934a/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:cr.prahadeeshwar@proton.me">Email</a>
          </div>

          <span>© 2026</span>
        </div>
      </footer>
      </main>
    </>
  );
}