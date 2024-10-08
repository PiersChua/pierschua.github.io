import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <p data-aos="fade-down" className="hero-greeting">
        Hey there! My name is
      </p>
      <h1 data-aos="fade-down" data-aos-delay="200" className="hero-title">
        Piers Chua.
      </h1>
      <p data-aos="fade-down" data-aos-delay="400" className="desc">
        I enjoy telling stories about technology
      </p>
    </header>
  );
};
export default Hero;
