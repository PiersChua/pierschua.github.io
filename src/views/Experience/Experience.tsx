import { useEffect } from "react";
import "./Experience.css";
import AOS from "aos";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="experience" id="experience">
        <h1 className="title">My experience</h1>
        <div className="experience-container">
          <div className="py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <img
                  src="./ABOUT.jpeg"
                  alt="Timeline circle"
                  className="timeline-img"
                />
                <div data-aos="fade-right" className="timeline-card card">
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
                <div data-aos="fade-left" className="timeline-card card">
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
                <div data-aos="fade-right" className="timeline-card card">
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
                <div data-aos="fade-left" className="timeline-card card">
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
                <div data-aos="fade-right" className="timeline-card card">
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
                <div data-aos="fade-left" className="timeline-card card">
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
    </div>
  );
};

export default Experience;
