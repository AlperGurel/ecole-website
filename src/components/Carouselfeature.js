import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    const koleksiyon = [
      {
        title: "Piramit Yatak Odası",
        caption: "Ahşapın göz alıcı formu",
        src: "./img/koleksiyon/piramit-yatak.jpg",
      },
      {
        title: "Piramit Yemek Odası",
        caption: "Özgün parçalarıyla evinizin atmosferini değiştirecek",
        src: "./img/koleksiyon/piramit-yemek.jpg",
      },
      {
        title: "Alya Yatak Odası",
        caption: "Rahatlığı ve şıklığı bir araya getiriyor",
        src: "./img/koleksiyon/alya-yatak.jpg",
      },
      {
        title: "Alya Yemek Odası",
        caption: "Göz alıcı detaylarıyla evinizin havasını değiştirecek",
        src: "./img/koleksiyon/alya-yemek.jpg",
      },
      {
        title: "Ardıç Yatak Odası",
        caption: "Özgün detaylarıyla konfordan ödün vermeyenler için",
        src: "./img/koleksiyon/ardic-yatak.jpg",
      },
      {
        title: "Ardıç Yemek Odası",
        caption: "Her bir detayı özenle tasarlandı",
        src: "./img/koleksiyon/ardic-yemek.jpg",
      },
      {
        title: "Country Yatak Odası",
        caption: "Klasik mobilyalarla modern evler için",
        src: "./img/koleksiyon/country-yatak.jpg",
      },
      {
        title: "Petek Yatak Odası",
        caption: "Zerafet ve şıklığın buluştuğu",
        src: "./img/koleksiyon/petek-yatak.jpg",
      },
      {
        title: "Petek Yemek Odası",
        caption: "Modern dokunuşlarla evinizi bambaşka bir yere götürecek",
        src: "./img/koleksiyon/petek-yemek.jpg",
      },
      {
        title: "Pirinç Yatak Odası",
        caption: "Eşsiz tasarımıyla evinize eşlik edecek",
        src: "./img/koleksiyon/pirinc-yatak.jpg",
      },
      {
        title: "Pirinç Yemek Odası",
        caption: "Gösterişli tasarımıyla salonunuza yeni bir soluk getirecek",
        src: "./img/koleksiyon/pirinc-yemek.jpg",
      },
      {
        title: "Wood Yatak Odası",
        caption: "Zarif dizaynıyla sadelik arayanlar için",
        src: "./img/koleksiyon/wood-yatak.jpg",
      },
      {
        title: "Wood Yemek Odası",
        caption: "Modern planıyla rahatlık sunan",
        src: "./img/koleksiyon/wood-yemek.jpg",
      },
    ];
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
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
      <div className="slick">
        <Slider {...settings}>
          {koleksiyon.map((el, index) => (
            <CustomSlide className="itm" index={index}>
              <div className="bg">
                <img src={el.src} className="img-fluid" alt="Imageteam" />
              </div>
              <div className="desc">
                <div className="name">{el.title}</div>
                <div className="content">{el.caption}</div>
              </div>
            </CustomSlide>
          ))}
        </Slider>
      </div>
    );
  }
}
