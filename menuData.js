const menu = [
  {
    // category: "Hot Drinks",
    category: "المشروبات الساخنة",
    items: [
      { name: "شاي مقنن", price: 4500, img: "/items/mognn.jpg" },
      { name: "شاي بدره", price: 4000, img: "/items/milktea.jpg" },
      { name: "قهوة", price: 3000, img: "/items/coffee.jpg" },
      { name: "قهوة كبيرة", price: 4000, img: "/items/largecoffee.jpg" },
      // { name: "هوت شوكليت", price: 7000, img: '/items/hotchoclate.jpg' },
      { name: "أوفلتين", price: 7200, img: "/items/ofletin.jpg" },
      { name: "نسكافيه", price: 7700, img: "/items/nescafe.jpg" },
      { name: "نسكافيه زيرو سكر", price: 8000 },
      { name: "شاي أحمر", price: 2500, img: "/items/redtea.jpg" },
      { name: "شاي أخضر", price: 2500, img: "/items/greentea.jpg" },
      { name: "نعناع", price: 2000, img: "/items/mint.jpg" },
      { name: "زنجبيل", price: 2000, img: "/items/ginger.jpg" },
      { name: "بن الحموي صغير", price: 4500, img: "/items/coffee.jpg" },
      { name: "بن الحموي كبير", price: 5500, img: "/items/coffee.jpg" },
      { name: "قهوة بالبندق", price: "Coming Soon..",img: "/items/soon.jpg"  },
    ],
  },
  {
    // category: "Iced Drinks",
    category: "المشروبات المثلجة",
    items: [
      {
        name: "سبانيش لاتيه (الأكثر مبيعاً)",
        price: 10500,
        img: "/items/spanishlate.jpg",
      },
      { name: "أيس كوفي ميكس", price: 9200, img: "/items/icecofmix.jpg" },
      { name: "أيس كوفي شوكلت", price: 8700, img: "/items/icechoclate.jpg" },
      { name: "أيس كوفي كراميل", price: 8700, img: "/items/icecaramel.jpg" },
      { name: "أيس كوفي أوريو", price: 8700, img: "/items/iceoreo.jpg" },
      // { name: "كيان مقنن", price: 9000 },
      { name: "أيس أوفلتين", price: 8700, img: "/items/iceofletin.jpg" },
      { name: "أيس بيور", price: 8700 },
      { name: "أيس تي", price: 6000, img: "/items/icetea.jpg" },
    ],
  },
  {
    // category: "Zalabia & Pastries",
    category: "الزلابية والمعجنات",
    items: [
      { name: "صغيرة سادة", price: 4500, img: "/items/zalabia.jpg" },
      { name: "صغيرة صوصات", price: 5700, img: "/items/zalabiasauce.jpg" },
      { name: "وسط سادة", price: 6500, img: "/items/zalabia.jpg" },
      { name: "وسط صوصات", price: 7700, img: "/items/zalabiasauce.jpg" },
      { name: "كبيرة سادة", price: 9500, img: "/items/zalabia.jpg" },
      { name: "كبيرة صوصات", price: 11000, img: "/items/zalabiasauce.jpg" },
      {
        name: "بسكويت يانسون (3 قطع)",
        price: 3000,
        img: "/items/yansonbiscuit.jpg",
      },
      { name: "بسكويت خبيز (4 قطع)", price: 3000,
        img: "/items/yansonbiscuit.jpg" },
      { name: "كيك إنجليزي", price: 4500 },
      // { name: "إضافة سكر", price: 1500 },
      { name: "إضافة عسل", price: 1500, img: "/items/honey.jpg" },
    ],
  },
  {
    // category: "Slush",
    category: "سلاش",
    items: [
      // { name: "شغف مقنن (الأكثر مبيعاً)", price: 7500 },
      { name: "كيوي", price: 7500, img: "/items/slushkiwi.jpg" },
      { name: "أناناس", price: 7000, img: "/items/slushpin.jpg" },
      { name: "فراولة", price: 7000, img: "/items/slushstrawb.jpg" },
      { name: "بلوبيري", price: 7000, img: "/items/slushblue.jpg" },
      // { name: "كرز", price: 7000 },
      { name: "ميكس", price: 7000, img: "/items/slushmix.jpg" },
      { name: "أيس تي", price: 7000, img: "/items/icetea.jpg" },
      { name: "سلاش روز", price: 7000, img: "/items/slushrose.jpg" },
      // { name: "سلاش مانجو", price: 7000 },
    ],
  },
  // { category: "Milk Shake",
  //    category: "ميلك شيك",
  //    items: [{
  //     name: "ميلك شيك أوريو", price: 8500, img: "/items/milkshakeoreo.jpg"
  //   },
  //   { name: "ميلك شيك فانيليا", price: 8500, img: "/items/milkshakevanil.jpg" },
  //   { name: "ميلك شيك كراميل", price: 8500, img: "/items/milkshakecaram.jpg"
  // }] },
  {
    // category: "Winter Drinks",
    category: "مشروبات الشتاء",
    subsections: [
      {
        title: "شوفان",
        items: [
      { name: "ماتشا", price: 8700, img: "/items/oatsmatcha.jpg" },
      { name: "شوكلت", price: 8500, img: "/items/oatschoclate.jpg" },
      { name: "بيري", price: 8500, img: "/items/oatsberry.jpg" },
      { name: "موكا", price: 8500, img: "/items/oatsmocha.jpg" },
      { name: "فانيليا", price: 8500, img: "/items/oatsvanil.jpg" }
        ]
      },{
        title: "هوت شوكلت",
        items:[
      { name: "كادبوري", price: 8500 },
      { name: "كت كات", price: 8500 },
        ]
      }
    ],
  },
  {
    // category: "Mojito",
    category: "موهيتو",
    items: [
      // {
      //   name: "شغف مقنن (الأكثر مبيعاً)",
      //   price: 6500,
      //   img: "/items/mojitopassion.jpg",
      // },
      { name: "كيوي", price: 6500, img: "/items/mojitokiwi.jpg" },
      { name: "أناناس", price: 6000, img: "/items/mojitopin.jpg" },
      { name: "فراولة", price: 6000, img: "/items/mojitostrawb.jpg" },
      { name: "بلوبيري", price: 6000, img: "/items/mojitoblue.jpg" },
      // { name: "كرز", price: 6000 },
      { name: "ميكس", price: 6500, img: "/items/mojitomix.jpg" },
      { name: "موهيتو روز", price: 6000, img: "/items/mojitorose.jpg" },
      // { name: "موهيتو مانجو", price: 6000 },
    ],
  },
  {
    // category: "Bosh Point Grills",
    category: "مشاوي بوش بوينت",
    items: [
      { name: "شغف مقنن (الأكثر مبيعاً)", price: 6500 },
      { name: "كيوي", price: 6000 },
      { name: "أناناس", price: 6000 },
      { name: "فراولة", price: 6000 },
      { name: "بلوبيري", price: 6000 },
      { name: "كرز", price: 6000 },
      { name: "ميكس", price: 6500 },
      { name: "موهيتو روز", price: 6000 },
      { name: "موهيتو مانجو", price: 6000 },
    ],
  },
];

export default menu;
