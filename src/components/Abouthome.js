import React from "react";
import useTranslation from "../useTranslation";

export default () => {
  const t = useTranslation();
  return (
    <section className="container-fluid">
      <div className="row m-2-hor">
        <div className="col-md-6 pt-5">
          <div className="col-home">
            <div className="thumb">
              <img src="./img/about-us.jpg" className="img-fluid" alt="#" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dflex-center">
            <div className="col-home mt-md-0 mt-5">
              <div className="heading">{t.aboutHome.title}</div>
              <div className="content">{t.aboutHome.description}</div>
              <ul className="list-home">
                {t.aboutHome.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
