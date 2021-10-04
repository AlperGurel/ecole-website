import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Overlaybg,
} from "../styles/Navigation.styles";
import { withRouter } from "react-router";
import NavButton from "./NavButton";
import { ReactComponent as Logo } from "../logo.svg";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "anasayfa":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "hakkimizda":
            history.push("/hakkimizda");
            setState(false);
            setLink("");
            break;
          case "koleksiyon":
            history.push("/koleksiyon");
            setState(false);
            setLink("");
            break;
          case "iletisim":
            history.push("/iletisim");
            setState(false);
            setLink("");
            break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 0);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 0);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = (text) => {
    setShouldAnimate(true);
    setLink(text);
  };

  useEffect(() => {
    console.log(window.location.pathname);
    const header = document.getElementById("header");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky + 300) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header>
      <div id="header">
        <div className="nav-large">
          <div
            onClick={() => setLinkHandler("anasayfa")}
            className={window.location.pathname == "/" ? "active" : ""}
          >
            Anasayfa
          </div>
          <div
            onClick={() => setLinkHandler("hakkimizda")}
            className={
              window.location.pathname == "/hakkimizda" ? "active" : ""
            }
          >
            Hakkımızda
          </div>
          <div
            onClick={() => setLinkHandler("koleksiyon")}
            className={
              window.location.pathname == "/koleksiyon" ? "active" : ""
            }
          >
            Koleksiyon
          </div>
          <div
            onClick={() => setLinkHandler("iletisim")}
            className={window.location.pathname == "/iletisim" ? "active" : ""}
          >
            İletişim
          </div>

          <span className="socicon">
            <a
              href="https://www.instagram.com/ecoleliving/"
              target="_blank"
              style={{
                color: "inherit",
              }}
            >
              <i className="fa  fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="logo">
        <Logo
          onClick={() => setLinkHandler("anasayfa")}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg
          open={isOn}
          shouldAnimate={shouldAnimate}
          onClick={closeHandler}
        />
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}
        >
          <NavButton open={isOn} />
        </Container>
        <Body className="midwrpr" open={isOn} shouldAnimate={shouldAnimate}>
          <div className="conPage">
            <Page
              className="mainBtn"
              variant="home"
              onClick={() => setLinkHandler("anasayfa")}
            >
              <LinkTag>Anasayfa</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("hakkimizda")}
            >
              <LinkTag>Hakkımızda</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="work"
              onClick={() => setLinkHandler("koleksiyon")}
            >
              <LinkTag>Koleksiyon</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("iletisim")}
            >
              <LinkTag>İletişim</LinkTag>
            </Page>
          </div>

          <div className="info">
            <span className="link">satis@ecoleliving.com</span>
            <span>
              <strong>Fabrika</strong>: Mahmudiye Mah. Hizmet Sk. No: 21
            </span>
            <span>
              <strong>Mağaza</strong>: Mobilimo AVM
            </span>
            <span>İnegöl/BURSA</span>
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
        </Body>
        <SocialContainer className="soc-icon" open={isOn}>
          <span>Takip edin:</span>
          <a href="https://www.instagram.com/ecoleliving/" target="_blank">
            <span className="socicon">
              <i className="fa  fa-instagram"></i>
            </span>
          </a>
        </SocialContainer>
      </Wrapper>
    </header>
  );
};

export default withRouter(NavigationMenu);
