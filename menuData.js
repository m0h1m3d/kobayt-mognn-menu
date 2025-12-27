const menu = [
  {
    // category: "Hot Drinks",
    category: "المشروبات الساخنة",
    items: [
      { name: "شاي مقنن", nameEng:'Mognn Tea', price: 4500, img: "/items/mognn.jpg" },
      { name: "شاي بدره", nameEng:'Milk Tea', price: 4000, img: "/items/milktea.jpg" },
      { name: "قهوة", nameEng:'Coffee', price: 3000, img: "/items/coffee.jpg" },
      { name: "قهوة كبيرة", nameEng:'Large Coffee', price: 4000, img: "/items/largecoffee.jpg" },
      // { name: "هوت شوكليت", price: 7000, img: '/items/hotchoclate.jpg' },
      { name: "أوفلتين", nameEng:'Ovaltine', price: 7200, img: "/items/ofletin.jpg" },
      { name: "نسكافيه", nameEng:'Nescafe', price: 7700, img: "/items/nescafe.jpg" },
      { name: "نسكافيه زيرو سكر", nameEng:'Nescafe Zero Sugar', price: 8000 },
      { name: "شاي أحمر", nameEng:'Red Tea', price: 2500, img: "/items/redtea.jpg" },
      { name: "شاي أخضر", nameEng:'Green Tea', price: 2500, img: "/items/greentea.jpg" },
      { name: "نعناع", nameEng:'Mint', price: 2000, img: "/items/mint.jpg" },
      { name: "زنجبيل", nameEng:'Ginger', price: 2000, img: "/items/ginger.jpg" },
      { name: "بن الحموي صغير", nameEng:'Bon Alhamwi Small', price: 4500, img: "/items/coffee.jpg" },
      { name: "بن الحموي كبير", nameEng:'Bon Alhamwi Large', price: 5500, img: "/items/coffee.jpg" },
      { name: "قهوة بالبندق", nameEng:'Hazelnut Coffee', price: "Coming Soon..",img: "/items/soon.jpg"  },
    ],
  },
  {
    // category: "Iced Drinks",
    category: "المشروبات المثلجة",
    items: [
      {
        name: "سبانيش لاتيه (الأكثر مبيعاً)",
        nameEng:'Spanish Latte',
        price: 10500,
        img: "/items/spanishlate.jpg",
      },
      { name: "أيس كوفي ميكس",nameEng:'Ice Coffee Mix',  price: 9200, img: "/items/icecofmix.jpg" },
      { name: "أيس كوفي شوكلت",nameEng:'Ice Coffee Choclate', price: 8700, img: "/items/icechoclate.jpg" },
      { name: "أيس كوفي كراميل",nameEng:'Ice Coffee Caramel', price: 8700, img: "/items/icecaramel.jpg" },
      { name: "أيس كوفي أوريو",nameEng:'Ice Coffee Oreo', price: 8700, img: "/items/iceoreo.jpg" },
      // { name: "كيان مقنن",nameEng:'', price: 9000 },
      { name: "أيس أوفلتين",nameEng:'Ice Ovaltine', price: 8700, img: "/items/iceofletin.jpg" },
      { name: "أيس بيور",nameEng:'Ice Pure', price: 8700 },
      { name: "أيس تي",nameEng:'Ice Tea', price: 6000, img: "/items/icetea.jpg" },
    ],
  },
  {
    // category: "Zalabia & Pastries",
    category: "الزلابية والمعجنات",
    items: [
      { name: "صغيرة سادة",nameEng:'Small Regular', price: 4500, img: "/items/zalabia.jpg" },
      { name: "صغيرة صوصات",nameEng:'Small Sauces', price: 5700, img: "/items/zalabiasauce.jpg" },
      { name: "وسط سادة",nameEng:'Medium Regular', price: 6500, img: "/items/zalabia.jpg" },
      { name: "وسط صوصات",nameEng:'Medium Sauces', price: 7700, img: "/items/zalabiasauce.jpg" },
      { name: "كبيرة سادة",nameEng:'Large Regular', price: 9500, img: "/items/zalabia.jpg" },
      { name: "كبيرة صوصات",nameEng:'Large Sauces', price: 11000, img: "/items/zalabiasauce.jpg" },
      {
        name: "بسكويت يانسون (3 قطع)",nameEng:'Yanson Biscuit',
        price: 3000,
        img: "/items/yansonbiscuit.jpg",
      },
      { name: "بسكويت خبيز (4 قطع)",nameEng:'Baked Biscuit', price: 3000,
        img: "/items/yansonbiscuit.jpg" },
      { name: "كيك إنجليزي",nameEng:'English Cake', price: 4500 },
      // { name: "إضافة سكر",nameEng:'Add Sugar', price: 1500 },
      { name: "إضافة عسل",nameEng:'Add Honey', price: 1500, img: "/items/honey.jpg" },
    ],
  },
  {
    // category: "Slush",
    category: "سلاش",
    items: [
      // { name: "شغف مقنن (الأكثر مبيعاً)",nameEng:'Mognn Passion', price: 7500 },
      { name: "كيوي",nameEng:'Kiwi', price: 7500, img: "/items/slushkiwi.jpg" },
      { name: "أناناس",nameEng:'Pineapple', price: 7000, img: "/items/slushpin.jpg" },
      { name: "فراولة",nameEng:'Strawberry', price: 7000, img: "/items/slushstrawb.jpg" },
      { name: "بلوبيري",nameEng:'Blueberry', price: 7000, img: "/items/slushblue.jpg" },
      // { name: "كرز",nameEng:'Cherry', price: 7000 },
      { name: "ميكس",nameEng:'Mix', price: 7000, img: "/items/slushmix.jpg" },
      { name: "أيس تي",nameEng:'Ice Tea', price: 7000, img: "/items/icetea.jpg" },
      { name: "سلاش روز",nameEng:'Slush Rose', price: 7000, img: "/items/slushrose.jpg" },
      // { name: "سلاش مانجو",nameEng:'Slush Mango', price: 7000 },
    ],
  },
  // { category: "Milk Shake",
  //    category: "ميلك شيك",
  //    items: [{
  //     name: "ميلك شيك أوريو",nameEng:'MilkShake Oreo', price: 8500, img: "/items/milkshakeoreo.jpg"
  //   },
  //   { name: "ميلك شيك فانيليا",nameEng:'MilkShake Vanilla', price: 8500, img: "/items/milkshakevanil.jpg" },
  //   { name: "ميلك شيك كراميل",nameEng:'MilkShake Caramel', price: 8500, img: "/items/milkshakecaram.jpg"
  // }] },
  {
    // category: "Winter Drinks",
    category: "مشروبات الشتاء",
    subsections: [
      {
        title: "شوفان",
        items: [
      { name: "ماتشا",nameEng:'Matcha', price: 8700, img: "/items/oatsmatcha.jpg" },
      { name: "شوكلت",nameEng:'Choclate', price: 8500, img: "/items/oatschoclate.jpg" },
      { name: "بيري",nameEng:'Berry', price: 8500, img: "/items/oatsberry.jpg" },
      { name: "موكا",nameEng:'Mocha', price: 8500, img: "/items/oatsmocha.jpg" },
      { name: "فانيليا",nameEng:'Vanilla', price: 8500, img: "/items/oatsvanil.jpg" }
        ]
      },{
        title: "هوت شوكلت",
        items:[
      { name: "كادبوري",nameEng:'Cadbury', price: 8500 },
      { name: "كت كات",nameEng:'Kit Kat', price: 8500 },
        ]
      }
    ],
  },
  {
    // category: "Mojito",
    category: "موهيتو",
    items: [
      // {
      //   name: "شغف مقنن (الأكثر مبيعاً)",nameEng:'Mognn Passion',
      //   price: 6500,
      //   img: "/items/mojitopassion.jpg",
      // },
      { name: "كيوي",nameEng:'Kiwi', price: 6500, img: "/items/mojitokiwi.jpg" },
      { name: "أناناس",nameEng:'Pineapple', price: 6000, img: "/items/mojitopin.jpg" },
      { name: "فراولة",nameEng:'Strawberry', price: 6000, img: "/items/mojitostrawb.jpg" },
      { name: "بلوبيري",nameEng:'Blueberry', price: 6000, img: "/items/mojitoblue.jpg" },
      // { name: "كرز",nameEng:'Cherry', price: 6000 },
      { name: "ميكس",nameEng:'Mix', price: 6500, img: "/items/mojitomix.jpg" },
      { name: "موهيتو روز",nameEng:'Mojito Rose', price: 6000, img: "/items/mojitorose.jpg" },
      // { name: "موهيتو مانجو",nameEng:'Mojito Mango', price: 6000 },
    ],
  },
  {
    // category: "Bosh Point Grills",
    category: "مشاوي بوش بوينت",
    items: [
      { name: "شغف مقنن (الأكثر مبيعاً)",nameEng:'Mognn Passion',  price: 6500 },
      { name: "كيوي",nameEng:'Kiwi', price: 6000 },
      { name: "أناناس",nameEng:'Pineapple', price: 6000 },
      { name: "فراولة",nameEng:'Strawberry', price: 6000 },
      { name: "بلوبيري",nameEng:'Blueberry', price: 6000 },
      { name: "كرز",nameEng:'Cherry', price: 6000 },
      { name: "ميكس",nameEng:'Mix', price: 6500 },
      { name: "موهيتو روز",nameEng:'Mojito Rose', price: 6000 },
      { name: "موهيتو مانجو",nameEng:'Mojito Mango', price: 6000 },
    ],
  },
];

export default menu;
