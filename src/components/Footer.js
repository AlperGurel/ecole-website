import React from "react";

export default () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.png" alt="bg-footer" />
    </div>
    <div className="row m-2-hor">
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">
            <h2>Hayatı Şekillendir</h2>
          </div>
          <div className="content">
            <p>
              Yaptığımız işi severek yapıyor ve bu sevgiyi ürünlerimize kalite
              ve el emeği olarak yansıtıyoruz. Bu süreçte geribildirim almayı da
              ihmal etmiyoruz. Her türlü görüş ve önerileriniz için bize
              yazabilirsiniz.
            </p>
          </div>
          <div
            className="link-call"
            onClick={() => window.open("mailto:satis@ecoleliving.com", "_self")}
          >
            satis@ecoleliving.com
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          <div className="heading">Hızlı Linkler</div>
          <div className="content">
            <div className="link">Anasayfa</div>
            <div className="link">Hakkımızda</div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          <div className="heading">Hızlı Linkler</div>
          <div className="content">
            <div className="link">Koleksiyon</div>
            <div className="link">İletişim</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">Takipte Kalın</div>
          <div className="content">
            <p>Instagramdan güncel ürünlerimizi takip edebilirsiniz.</p>
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
