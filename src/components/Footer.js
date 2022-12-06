import React from "react";
import useTranslation from "../useTranslation";

export default () => {
  const t = useTranslation();
  return (
    <footer className="container-fluid black_more">
      <div className="bg-footer">
        <img src="./img/footer-img.png" alt="bg-footer" />
      </div>
      <div className="row m-2-hor">
        <div className="col-md-4">
          <div className="footer-col">
            <div className="heading">
              <h2>{t.footer.title}</h2>
            </div>
            <div className="content">
              <p>{t.footer.description}</p>
            </div>
            <div
              className="link-call"
              onClick={() =>
                window.open("mailto:satis@ecoleliving.com", "_self")
              }
            >
              satis@ecoleliving.com
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-col">
            <div className="heading">{t.footer.quickLinkTitle}</div>
            <div className="content">
              <div className="link">{t.home}</div>
              <div className="link">{t.about}</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-col">
            <div className="heading">{t.footer.quickLinkTitle}</div>
            <div className="content">
              <div className="link">{t.collection}</div>
              <div className="link">{t.contact}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-col">
            <div className="heading">{t.footer.follow}</div>
            <div className="content">
              <p>{t.footer.followCaption}</p>
              <a
                href="https://www.instagram.com/ecoleliving/"
                target="_blank"
                style={{
                  color: "inherit",
                }}
              >
                <div className="socialicon">
                  <span className="shine"></span>
                  <i className="fa  fa-instagram"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="row m-2-hor">
          <div className="col-md-6">
            <div className="content">
              © EcoleLiving 2022 -{" "}
              <a
                href="https://www.instagram.com/ecoleliving/"
                target="_blank"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Alper Gürel Dijital Reklam Ajansı
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
