import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="page section">
          <p className="label">CRP — Personal Site</p>

          <h1
            className="display"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              margin: "2rem 0",
            }}
          >
            Engineering,
            <br />
            without the noise.
          </h1>

          <p
            className="body"
            style={{
              maxWidth: "36rem",
              color: "var(--color-muted)",
            }}
          >
            Software engineering student exploring systems,
            infrastructure, and aviation.
          </p>
        </section>
      </main>
    </>
  );
}