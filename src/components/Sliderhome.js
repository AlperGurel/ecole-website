import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";

const content = [
  {
    title: "Özenle tasarlanıp",
    description: "ustalıkla üretilen mobilyalar",
    button: "Koleksiyon",
    link: "/#",
    image: "./img/anasayfa-1.png",
  },
  {
    title: "Modern dokunuşlarla",
    description: "tarz sahibi evler",
    button: "Koleksiyon",
    link: "/#",
    image: "./img/anasayfa-3.jpg",
  },
  {
    title: "Ahenkli ve canlı detaylarla",
    description: "göz alıcı odalar",
    button: "Koleksiyon",
    link: "/#",
    image: "./img/anasayfa-2.jpg",
  },
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button onClick={() => window.open(item.link, "_self")}>
            <span className="shine"></span>
            <span>{item.button}</span>
          </button>
        </div>
      </div>
    ))}
  </Slider>
);
