import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from "../useTranslation";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default function () {
  const t = useTranslation();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick slickproject">
      <Slider {...settings}>
        <CustomSlide className="itm" index={1}>
          <div className="bg">
            <img src="./img/yemek.jpg" className="img-fluid" alt="Imageteam" />
          </div>
          <div className="desc">
            <div className="tag">Ecole</div>
            <div className="name">{t.categoryDining.title}</div>
          </div>
          <div className="icon">
            <span onClick={() => window.open("/yemek", "_self")}>
              {t.categoryDining.button}
            </span>
          </div>
        </CustomSlide>

        <CustomSlide className="itm" index={2}>
          <div className="bg">
            <img src="./img/yatak.jpg" className="img-fluid" alt="Imageteam" />
          </div>
          <div className="desc">
            <div className="tag">Ecole</div>
            <div className="name">{t.categoryBedroom.title}</div>
          </div>
          <div className="icon">
            <span onClick={() => window.open("/yatak", "_self")}>
              {t.categoryBedroom.button}
            </span>
          </div>
        </CustomSlide>
      </Slider>
    </div>
  );
}
