import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

import { LinkWrap, Overlay } from "../styles/Work.styles";

import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";
import { koleksiyon } from "../data";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const WorksYatak = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  let { cat } = useParams();

  useEffect(() => {
    console.log(cat);
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1>Yatak Odaları</h1>
            </div>
          </div>
        </section>
      </Reveal>

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

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            {koleksiyon
              .filter((el) => el.category == "Yatak Odası")
              .map((el, index) => {
                return (
                  <div className="col-md-4 slick slickproject p-3">
                    <div className="slick-slide d-block">
                      <div>
                        <div className="itm">
                          <LinkWrap active={toCase === "/detailcase"}>
                            <Overlay
                              active={!!toCase}
                              onClick={() => {
                                setOpen(true);
                                let rIndex = koleksiyon.filter(
                                  (ell) => ell.title == el.title
                                )[0].rIndex;
                                setCollectionIndex(rIndex);
                              }}
                            >
                              <div className="bg">
                                <img
                                  src={el.src}
                                  className="img-fluid"
                                  alt={el.title}
                                />
                              </div>
                              <div className="desc">
                                <div className="tag">{el.category}</div>
                                <div className="name">{el.name}</div>
                              </div>
                              <div className="icon">
                                <span>İncele</span>
                              </div>
                            </Overlay>
                          </LinkWrap>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(WorksYatak);
