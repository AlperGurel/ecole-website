import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import Slider from "../components/Sliderhome";
import Featurehome from "../components/Featurehome";
import Abouthome from "../components/Abouthome";
import Carouselfeature from "../components/Carouselfeature";
import Carouselclient from "../components/Carouselclient";
import Carouselclientb from "../components/Carouselclientb";
import Carouselprojects from "../components/Carouselprojects";
import Carouselteam from "../components/Carouselteam";
import Accomplish from "../components/Accomplish";
import Carouselnews from "../components/Carouselnews";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import useTranslation from "../useTranslation";

const Home = ({ history }) => {
  const t = useTranslation();
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Reveal>

      {/* <Featurehome /> */}

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">{t.collection}</div>
            </div>
            <div className="col-12">
              <Carouselfeature />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">{t.categories}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Home);
