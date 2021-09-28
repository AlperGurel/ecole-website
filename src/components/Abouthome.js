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
            <div className="heading">We Are Interior Design</div>
            <div className="content">
              2005 yılında İnegöl'de kurulan Ecole Living mobilya firmamız
              kurulduğu günden bugüne siz değerli müşterilerimiz için kalite ve
              konfor güvencesiyle durmadan üretmeye devam ediyor. Her zevke
              uygun farklı konseptler için titizlikle tasarlanan
              mobilyalarımızla kaliteden ve müşteri memnuniyetinden ödün
              vermeden yaşam alanlarınıza dokunmayı başarıyoruz. Alanında uzman,
              güçlü ve dinamik ekibimizle mobilya alanında yükselmeye devam
              ediyor ve trendleri takip ederek müşteri memnuniyetini en üste
              çıkarmayı hedefliyoruz.
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
