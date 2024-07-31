import { useEffect, useState } from "react";
import "./Experience.css";
import AOS from "aos";

const Experience = () => {
  const [fadeRight, setFadeRight] = useState("");
  const [fadeLeft, setFadeLeft] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 800,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setFadeRight(""); // No animation for smaller screens
        setFadeLeft("");
      } else {
        setFadeRight("fade-right"); // Animation for larger screens
        setFadeLeft("fade-left");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="experience" id="experience">
        <h1 className="title">My experience</h1>
        <div className="experience-container py-5">
          <div className="main-timeline">
            <div className="timeline left">
              <img
                src="./ABOUT.jpeg"
                alt="Timeline circle"
                className="timeline-img"
              />
              <div data-aos={fadeRight} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2017</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <img
                src="./ABOUT.jpeg"
                alt="Timeline circle"
                className="timeline-img"
              />
              <div data-aos={fadeLeft} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2016</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div data-aos={fadeRight} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2015</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div data-aos={fadeLeft} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2012</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div data-aos={fadeRight} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2011</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div data-aos={fadeLeft} className="timeline-card card">
                <div className="card-body p-4">
                  <h3>2007</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
