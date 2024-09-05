
import "./style.css"
function HeroSection() {
  return (
    <section className="container-card">
      <div className="container-text">
        <h1>Soundarya SV</h1>
        <p>Front-End Developer</p>
        <p>Turning Ideas Into Interactive Reality</p>
        <div className="social-icons">
          <button className="btn"><a href="#"><i className="bi bi-github"></i></a></button>
          <button className="btn"><a href="#"><i className="bi bi-linkedin"></i></a></button>
          <button className="btn"><a href="#"><i className="bi bi-twitter"></i></a></button>
        </div>
      </div>
      <div className="intro-image">
        <img src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg" alt="Mobile illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
