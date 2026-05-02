export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="profile-image photo-cutout photo-cutout-tall">
          <div className="photo-frame photo-frame-tall photo-frame-curved">
            <img src="/adam.jpg" alt="Adam Bicknell" width="320" height="445" />
          </div>
        </div>

        <div className="hero-copy">
          <h1>Adam Bicknell</h1>
          <p className="subtitle">
            Software engineer, entrepreneur, writer, creator and founder.
          </p>
          <span className="divider" aria-hidden="true" />
          <p className="intro">
            My work, ideas and projects across technology, business, books,
            videos, personal development, motivation, spirituality, psychology,
            philosophy and deeper esoteric thought.
          </p>
        </div>
      </div>
    </section>
  );
}
