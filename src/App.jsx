import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/works";
import worksYatak from "./pages/worksYatak";
import worksYemek from "./pages/worksYemek";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Case from "./pages/detailCase";
import Case1 from "./pages/detailCase1";
import Case2 from "./pages/detailCase2";
import Case3 from "./pages/detailCase3";
import Newsdetail from "./pages/detailNews";

function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    console.log("saved language", language);
    localStorage.setItem("language", language);
    window.dispatchEvent(new Event("storage"));
  }, [language]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
            language={language}
            setLanguage={(lang) => setLanguage(lang)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/hakkimizda" exact component={About} />
          <Route path="/koleksiyon" exact component={Work} />
          <Route path="/yatak" exact component={worksYatak} />
          <Route path="/yemek" exact component={worksYemek} />
          <Route path="/iletisim" exact component={Contact} />
          <Route
            path="/detailcase"
            component={() => (
              <Case setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase1"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase2"
            component={() => (
              <Case2 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase3"
            component={() => (
              <Case3 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailNews"
            component={() => (
              <Newsdetail setNavBackground={(state) => setNavBack(state)} />
            )}
          />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  );
}

export default App;
