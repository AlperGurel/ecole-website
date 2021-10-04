import React from "react";
import { withRouter } from "react-router-dom";
import emailjs from "emailjs-com";
import Reveal from "react-reveal/Reveal";

import SimpleMap from "../components/Map";
import Footer from "../components/Footer";

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const Contact = ({ history }) => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_csfdEZiA",
        e.target,
        "user_zu7p2b3lDibMCDutH5hif"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Bize <span className="color">ulaşın</span>.
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-12">
              <SimpleMap />
            </div>
            <div className="col-md-6">
              <div className="text-side">
                <h3 className="heading">İletişime geçin </h3>
                <p>
                  Yaptığımız işi severek yapıyor ve bu sevgiyi ürünlerimize
                  kalite ve el emeği olarak yansıtıyoruz. Bu süreçte
                  geribildirim almayı da ihmal etmiyoruz. Her türlü görüş ve
                  önerileriniz için bize yazabilirsiniz.
                </p>
                <div className="address">
                  <div className="heading">Fabrika</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    Mahmudiye Mah. Hizmet Sk. No: 21
                  </div>
                  <div className="heading">Mağaza</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    Yeniceköy, İnegöl Bursa Karayolu 6.km, 16400 İnegöl/Bursa
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:satis@ecoleliving.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      satis@ecoleliving.com
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    <a
                      href="https://wa.me/+905326597406"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0532 659 74 06
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={sendEmail}>
                  <label>İsim</label>
                  <input type="text" name="user_name" required />
                  <label>E-Posta</label>
                  <input type="email" name="user_email" required />
                  <label>Mesaj</label>
                  <textarea name="message" required />
                  <div id="success" className="hide">
                    Mesajınız bize ulaştı...
                  </div>
                  <div id="failed" className="hide">
                    Mesajınız şu anda gönderilemedi...
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Gönder</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Contact);
