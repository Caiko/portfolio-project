export default function TextArea({ title, description }) {
  return (
    <section aria-labelledby="intro-heading">
      <header>
        <h1 id="intro-heading">{title}</h1>
        <p>{description}</p>
      </header>
    </section>
  );
}
