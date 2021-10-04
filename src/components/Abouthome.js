import React from "react";

export default () => (
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
            <div className="heading">Hakkımızda</div>
            <div className="content">
              Bir mobilya değil yaşam markası olma felsefesi ile yola çıkan
              Ecole living; hayatınıza değer katmak için yanınızda. İçmimar Esat
              Fişek tarafından tasarlanan Ecole living mobilyaları, şıklığı ve
              rahatlığı yeniden tanımlayarak hayatınızı şekillendiriyor.
              Zamansız çizgisini samimi detaylar ve kaliteli malzemeler ile
              birleştiren Ecole living, uzun yıllar yaşam alanlarınızda olmaya
              aday.
            </div>
            <ul className="list-home">
              <li>Özgün Tasarımlar</li>
              <li>Temiz İşçilik</li>
              <li>Yılların Verdiği Ustalık Tecrübesi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
