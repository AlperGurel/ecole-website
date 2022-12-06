import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

import Abouthome from "../components/Abouthome";
import Carouselfeature from "../components/Carouselfeature";
import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import useTranslation from "../useTranslation";

const About = ({ history }) => {
  const t = useTranslation();
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeIn">
        <section className="jumbotron imgtop">
          <img src="./img/about.jpg" className="img-fluid" alt="#" />
        </section>
      </Reveal>

      <Reveal effect="fadeIn">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-4">
              <h1>{t.aboutPage.title}</h1>
            </div>
            <div className="col-md-8">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: t.aboutPage.content,
                }}
              ></div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">{t.collection}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselfeature />
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(About);
