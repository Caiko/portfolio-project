export default function TextArea({ title }) {
  return (
    <>
      <section aria-labelledby="intro-heading" className="introduction">
        <h1 id="h1">{title}</h1>
        <p>
          Briefly introduce yourself—your name, your role (Developer, Designer,
          etc.), and a sentence or two about your passion or specialties.
        </p>

        <article>
          <h2>About This Website</h2>
          <p>
            Explain the purpose of the site. Is it to showcase your projects,
            document your learning, serve as a resume, or all of the above? Keep
            it concise but inviting.
          </p>
        </article>
      </section>
    </>
  );
}
