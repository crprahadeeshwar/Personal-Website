import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero page">
          <p className="label">Software Engineering · Aviation</p>

          <h1 className="hero__title">
            Software engineering student exploring{" "}
            <em>systems, infrastructure, and aviation.</em>
          </h1>
        </section>
        <section className="work page">
          <div className="section-heading">
            <p className="label">Selected Work</p>
          </div>

          <div className="rule" />
        </section>
      </main>
    </>
  );
}