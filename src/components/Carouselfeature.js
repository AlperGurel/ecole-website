import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { koleksiyon } from "../data";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default function Responsive() {
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

  const [photoIndex, setPhotoIndex] = useState(0);
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="slick">
      {isOpen && (
        <Lightbox
          mainSrc={`${koleksiyon[collectionIndex].galleryPath}${
            photoIndex + 1
          }.jpg`}
          nextSrc={`${koleksiyon[collectionIndex].galleryPath}${
            (photoIndex + 1) % koleksiyon[collectionIndex].galleryImageCount
          }.jpg`}
          prevSrc={`${koleksiyon[collectionIndex].galleryPath}${
            (photoIndex + koleksiyon[collectionIndex].galleryImageCount - 1) %
            koleksiyon[collectionIndex].galleryImageCount
          }.jpg`}
          onCloseRequest={() => {
            setOpen(false);
            setPhotoIndex(0);
          }}
          onMovePrevRequest={() => {
            console.log(
              (photoIndex + koleksiyon[collectionIndex].galleryImageCount - 1) %
                koleksiyon[collectionIndex].galleryImageCount
            );
            setPhotoIndex(
              (photoIndex + koleksiyon[collectionIndex].galleryImageCount - 1) %
                koleksiyon[collectionIndex].galleryImageCount
            );
          }}
          onMoveNextRequest={() => {
            console.log(
              (photoIndex + 1) % koleksiyon[collectionIndex].galleryImageCount
            );
            setPhotoIndex(
              (photoIndex + 1) % koleksiyon[collectionIndex].galleryImageCount
            );
          }}
          imageTitle={koleksiyon[collectionIndex].title}
          imageLoadErrorMessage="Yukleniyor..."
        />
      )}
      <Slider {...settings}>
        {koleksiyon.map((el, index) => (
          <CustomSlide
            className="itm"
            index={index}
            onClick={() => {
              setOpen(true);
              setCollectionIndex(index);
            }}
          >
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
