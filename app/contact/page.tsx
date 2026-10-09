import Header from "@/components/Header";
import { ArrowUpRight } from "lucide-react";

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
              href="mailto:cr.prahadeeshwar@proton.me"
              className="contact-page__link"
            >
              Get in touch
              <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                  />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}