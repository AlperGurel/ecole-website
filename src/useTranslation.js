import React, { useState, useEffect } from "react";

const useTranslation = () => {
  const [lang, setLang] = useState("tr");

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("language");
      if (item) {
        setLang(item);
      } else {
        setLang("tr");
      }
    }

    checkUserData();

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  let turkish = {
    home: "Anasayfa",
    view: "İncele",
    about: "Hakkımızda",
    collection: "Koleksiyon",
    categories: "Kategoriler",
    contact: "İletişim",
    contactUs: ["Bize", "ulaşın"],
    "Yatak Odası": "Yatak Odası",
    "Yemek Odası": "Yemek Odası",
    sliderHome: [
      {
        title: "Özenle tasarlanıp ustalıkla üretilen mobilyalar",
        description: "tasarım",
      },
      {
        title: "Modern dokunuşlarla tarz sahibi evler",
        description: "modern",
      },
      {
        title: "Ahenkli ve canlı detaylarla göz alıcı odalar",
        description: "ahenk",
      },
    ],
    sliderButton: "Koleksiyon",
    aboutHome: {
      title: "Hakkımızda",
      description: `
      Bir mobilya değil yaşam markası olma felsefesi ile yola çıkan
      Ecole living; hayatınıza değer katmak için yanınızda.
      İçmimarlarımız tarafından tasarlanan Ecole living mobilyaları,
      şıklığı ve rahatlığı yeniden tanımlayarak hayatınızı
      şekillendiriyor. Zamansız çizgisini samimi detaylar ve kaliteli
      malzemeler ile birleştiren Ecole living, uzun yıllar yaşam
      alanlarınızda olmaya aday.
      `,
      list: [
        "Özgün Tasarımlar",
        "Temiz İşçilik",
        "Yılların Verdiği Ustalık Tecrübesi",
      ],
    },
    products: {
      "piramit-yatak": {
        title: "Piramit Yatak Odası",
        caption: "Ahşapın göz alıcı formu",
      },
      "piramit-yemek": {
        title: "Piramit Yemek Odası",
        caption: "Özgün parçalarıyla evinizin atmosferini değiştirecek",
      },
      "alya-yatak": {
        title: "Alya Yatak Odası",
        caption: "Rahatlığı ve şıklığı bir araya getiriyor",
      },
      "alya-yemek": {
        title: "Alya Yemek Odası",
        caption: "Göz alıcı detaylarıyla evinizin havasını değiştirecek",
      },
      "ardic-yatak": {
        title: "Ardıç Yatak Odası",
        caption: "Özgün detaylarıyla konfordan ödün vermeyenler için",
      },
      "ardic-yemek": {
        title: "Ardıç Yemek Odası",
        caption: "Her bir detayı özenle tasarlandı",
      },
      "country-yatak": {
        title: "Country Yatak Odası",
        caption: "Klasik mobilyalarla modern evler için",
      },
      "petek-yatak": {
        title: "Petek Yatak Odası",
        caption: "Zerafet ve şıklığın buluştuğu",
      },
      "petek-yemek": {
        title: "Petek Yemek Odası",
        caption: "Modern dokunuşlarla evinizi bambaşka bir yere götürecek",
      },
      "pirinc-yatak": {
        title: "Pirinç Yatak Odası",
        caption: "Eşsiz tasarımıyla evinize eşlik edecek",
      },
      "pirinc-yemek": {
        title: "Pirinç Yemek Odası",
        caption: "Gösterişli tasarımıyla salonunuza yeni bir soluk getirecek",
      },
      "wood-yatak": {
        title: "Wood Yatak Odası",
        caption: "Zarif dizaynıyla sadelik arayanlar için",
      },
      "wood-yemek": {
        title: "Wood Yemek Odası",
        caption: "Modern planıyla rahatlık sunan",
      },
    },
    categoryDining: {
      title: "Yemek Odaları",
      button: "Kategoriyi İncele",
    },
    categoryBedroom: {
      title: "Yatak Odaları",
      button: "Kategoriyi İncele",
    },
    footer: {
      title: "Hayatı Şekillendir",
      description: `
      Yaptığımız işi severek yapıyor ve bu sevgiyi ürünlerimize kalite
      ve el emeği olarak yansıtıyoruz. Bu süreçte geribildirim almayı
      da ihmal etmiyoruz. Her türlü görüş ve önerileriniz için bize
      yazabilirsiniz.
      `,
      quickLinkTitle: "Hızlı Linkler",
      follow: "Takipte Kalın",
      followCaption: "Instagramdan güncel ürünlerimizi takip edebilirsiniz.",
    },
    aboutPage: {
      title: "Tarihçe",
      content: `
      Ecole Living, yıllarını mobilya sektöründe geçirmiş olan bir
      ustanın 1994 yılında Ankara'da kurduğu bir imalathanede hayat
      bulmuştur. Ecole living'in ilk başarısızlık öyküsü ise, bu
      imalathanenin kapanmasıyla yazılmıştır. Usta, 1999 yılında yeni
      bir yolculuğa başlamak üzere İnegöl'e göç etmiştir. <br />
      2001 yılında iki kişinin ortaklığı ile İnegöl'de yeniden
      başlayan serüven, 2004 yılından beri ortak olmaksızın devam
      etmektedir. Uzun ömürlü ahşap mobilya üretimiyle evinize doğalın
      kapısını aralayan Ecole living, Nisan 2021 tarihinde açılan
      Mobilimo AVM'deki mağazasında sizlere hizmetini sürdürmektedir.

      `,
    },
    contactPage: {
      title: "İletişime geçin",
      description: `
      Yaptığımız işi severek yapıyor ve bu sevgiyi ürünlerimize
                  kalite ve el emeği olarak yansıtıyoruz. Bu süreçte
                  geribildirim almayı da ihmal etmiyoruz. Her türlü görüş ve
                  önerileriniz için bize yazabilirsiniz.`,
      factory: "Fabrika",
      form: {
        name: "İsim",
        email: "E-posta",
        mesaj: "Mesaj",
        button: "Gönder",
      },
    },
  };
  let english = {
    home: "Homepage",
    view: "View",
    about: "About Us",
    collection: "Our Collection",
    categories: "Categories",
    contact: "Contact Us",
    contactUs: ["Contact", "Us"],
    "Yatak Odası": "Bedroom",
    "Yemek Odası": "Dining Room",
    sliderHome: [
      {
        title: "Furniture designed with care and produced with skill",
        description: "design",
      },
      {
        title: "Stylish homes with modern touches",
        description: "modern",
      },
      {
        title: "Eye-catching rooms with harmonious and lively details",
        description: "harmony",
      },
    ],
    sliderButton: "Our Collection",
    aboutHome: {
      title: "About Us",
      description: `
      Ecole living, which sets out with the philosophy of being a life brand rather than a furniture brand, is by your side to add value to your life.
      Designed by our architects, Ecole living furniture redefines elegance and comfort and shapes your life.
      Ecole living, which combines timeless lines with intimate details and quality materials, is ready to be in your living spaces for years to come.
      `,
      list: ["Original Designs", "Clean Workmanship", "Years of Expertise"],
    },
    products: {
      "piramit-yatak": {
        title: "Piramit Bedroom",
        caption: "The eye-catching form of wood",
      },
      "piramit-yemek": {
        title: "Piramit Dining Room",
        caption:
          "Will change the atmosphere of your home with its original parts",
      },
      "alya-yatak": {
        title: "Alya Bedroom",
        caption: "Brings comfort and elegance together",
      },
      "alya-yemek": {
        title: "Alya Dining Room",

        caption:
          "Will change the atmosphere of your home with its eye-catching details",
      },
      "ardic-yatak": {
        title: "Ardic Bedroom",
        caption:
          "For those who do not give up comfort with its original details",
      },
      "ardic-yemek": {
        title: "Ardic Dining Room",
        caption: "Each detail was carefully designed",
      },
      "country-yatak": {
        title: "Country Bedroom",
        caption: "For modern homes with classic furniture",
      },
      "petek-yatak": {
        title: "Petek Bedroom",
        caption: "The meeting of elegance and elegance",
      },
      "petek-yemek": {
        title: "Petek Dining Room",

        caption:
          "Will bring a new breath to your living room with its modern touches",
      },
      "pirinc-yatak": {
        title: "Pirinç Bedroom",
        caption: "Will accompany you to your home with its unique design",
      },
      "pirinc-yemek": {
        title: "Pirinç Dining Room",
        caption:
          "Will bring a new breath to your living room with its modern touches",
      },
      "wood-yatak": {
        title: "Wood Bedroom",
        caption: "For those looking for simplicity with its elegant design",
      },
      "wood-yemek": {
        title: "Wood Dining Room",
        caption: "Comfortable with its modern plan",
      },
    },
    categoryDining: {
      title: "Dining Rooms",
      button: "View Category",
    },
    categoryBedroom: {
      title: "Bedrooms",
      button: "View Category",
    },
    footer: {
      title: "Shape Your Life",
      description: `
      We love what we do and reflect this love in our products as quality
      and handwork. We also do not neglect to receive feedback in this process.
      You can write to us for any comments and suggestions.
      `,
      quickLinkTitle: "Quick Links",
      follow: "Follow Us",
      followCaption: "You can follow our current products from Instagram.",
    },
    aboutPage: {
      title: "History",
      content: `
      Ecole Living, which has spent years in the furniture sector, was
      founded in 1994 in Ankara by a master craftsman. Ecole living's
      first unsuccessful story is written with the closure of this
      workshop. The master moved to Inegol in 1999 to start a new
      journey. <br />
      The story, which started again in Inegol with a partnership of
      two people in 2001, has continued without partners since 2004.
      Ecole living, which opens the door to nature in your home with
      long-lasting wooden furniture, continues to serve you in the
      store opened in April 2021 in Mobilimo AVM.
      `,
    },
    contactPage: {
      title: "Contact Us",
      description: `
      We love what we do and reflect this love in our products as quality
      and handwork. We also do not neglect to receive feedback in this process.
      You can write to us for any comments and suggestions.
      `,
      factory: "Factory",
      form: {
        name: "Name",
        email: "E-mail",
        mesaj: "Message",
        button: "Send",
      },
    },
  };
  return lang === "tr" ? turkish : english;
};

export default useTranslation;
