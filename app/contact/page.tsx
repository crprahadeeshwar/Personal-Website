import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <main>
        <section className="contact-page page">
          <p className="label">Contact</p>

          <div className="contact-page__content">
            <h1 className="contact-page__title">
              Have something
              <br />
              worth discussing?
            </h1>

            <p className="contact-page__description">
              I’m always interested in interesting problems, thoughtful
              conversations, and things worth building.
            </p>

            <a
              href="mailto:"
              className="contact-page__link"
            >
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}