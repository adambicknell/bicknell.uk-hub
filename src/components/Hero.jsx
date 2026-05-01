export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img
          className="profile-image"
          src="/adam.jpg"
          alt="Adam Bicknell"
          width="150"
          height="150"
        />

        <div className="hero-copy">
          <h1>Adam Bicknell</h1>
          <p className="subtitle">
            Software engineer, entrepreneur, writer, creator and founder.
          </p>
          <span className="divider" aria-hidden="true" />
          <p className="intro">
            My work, ideas and projects across technology, business, books,
            videos, personal development, motivation, spirituality,
            psychology, philosophy and deeper esoteric thought.
          </p>
        </div>
      </div>
    </section>
  );
}
