import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

import Abouthome from "../components/Abouthome";
import Carouselfeature from "../components/Carouselfeature";
import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const About = ({ history }) => {
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
              <h1>Tarihçe</h1>
            </div>
            <div className="col-md-8">
              <div className="content">
                Ecole Living, yıllarını mobilya sektöründe geçirmiş olan bir
                ustanın 1994 yılında Ankara'da kurduğu bir imalathanede hayat
                bulmuştur. Ecole living'in ilk başarısızlık öyküsü ise, bu
                imalathanenin kapanmasıyla yazılmıştır. Usta, 1999 yılında yeni
                bir yolculuğa başlamak üzere İnegöl'e göç etmiştir. <br />
                2001 yılında iki kişinin ortaklığı ile İnegöl'de yeniden
                başlayan serüven, 2004 yılından beri ortak olmaksızın devam
                etmektedir. Uzun ömürlü ahşap mobilya üretimiyle evinize doğalın
                kapısını aralayan Ecole living, Nisan 2021 tarihinde açılan
                Mobilimo AVM'deki mağazasında sizlere hizmetini sürdürmektedir.
              </div>
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
              <div className="heading">Koleksiyon</div>
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
