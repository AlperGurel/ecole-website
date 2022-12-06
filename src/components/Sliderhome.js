import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import useTranslation from "../useTranslation";

const content = [
  {
    title: "Özenle tasarlanıp ustalıkla üretilen mobilyalar",
    description: "tasarım",
    button: "Koleksiyon",
    link: "/koleksiyon",
    image: "./img/anasayfa-1.png",
  },
  {
    title: "Modern dokunuşlarla tarz sahibi evler",
    description: "modern",
    button: "Koleksiyon",
    link: "/koleksiyon",
    image: "./img/anasayfa-3.jpg",
  },
  {
    title: "Ahenkli ve canlı detaylarla göz alıcı odalar",
    description: "ahenk",
    button: "Koleksiyon",
    link: "/koleksiyon",
    image: "./img/anasayfa-2.jpg",
  },
];

export default () => {
  const t = useTranslation();
  return (
    <Slider className="slider-wrapper" autoplay={6000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div
            className="inner"
            style={{
              position: "relative",
            }}
          >
            <h1
              style={{
                fontSize: "23px",
              }}
            >
              {t.sliderHome[index].title}
            </h1>
            <p
              style={{
                fontSize: "110px",
                color: "rgba(255, 255, 255, 0.253)",
                position: "absolute",
                top: "-100px",
                left: "100px",
              }}
            >
              {t.sliderHome[index].description}
            </p>
            <button onClick={() => window.open(item.link, "_self")}>
              <span className="shine"></span>
              <span>{t.sliderButton}</span>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};
