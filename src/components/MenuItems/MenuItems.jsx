import { useEffect } from "react";
import Item from "./Item";
import "./menuitem.scss";
import SubItem from "./SubItem";

function MenuItems({ item }) {
  const { category, items } = item;

  useEffect(() => {
    const cards = document.querySelectorAll(".item");
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="card">
      <div className="bg"></div>
      <h1>
        <img
          src={`/${
            // category.includes("Hot")
            //   ? "hot"
            //   : category.includes("Iced")
            //   ? "iced"
            //   : category.includes("Zalabia & Pastries")
            //   ? "zalabia"
            //   : category.includes("Slush")
            //   ? "slush"
            //   : category.includes("Milkshake")
            //   ? "shake"
            //   : category.includes("Mojito")
            //   ? "mojito"
            //   : category.includes("Bosh Point Grills")
            //   ? 'grill'
            //   :''
            category.includes("الساخنة")
              ? "hot"
              : category.includes("المثلجة")
              ? "iced"
              : category.includes("الزلابية")
              ? "zalabia"
              : category.includes("سلاش")
              ? "slush"
              : category.includes("الشتاء")
              ? "winter"
              : category.includes("موهيتو")
              ? "mojito"
              : category.includes("مشاوي")
              ? 'grill'
              :''
          }.jpg`}
          alt={`${
            category.includes("Hot")
              ? "hot"
              : category.includes("Iced")
              ? "iced"
              : category.includes("Zalabia & Pastries")
              ? "zalabia"
              : category.includes("Slush")
              ? "slush"
              : category.includes("Milkshake")
              ? "shake"
              : category.includes("Mojito")
              ? "mojito"
              : category.includes("Bosh Point Grills")
              ? 'grill'
              :''
          }`}
        />

        {category}
      </h1>

      {item.items && items.map((item) => (
        <Item key={item.name} name={item.name} price={item.price} nameEng={item.nameEng} img={item.img} />
      ))}

      {item.subsections && item.subsections.map(sub => <SubItem key={sub.title} title={sub.title} data={sub.items} />)}
    </div>
  );
}

export default MenuItems;
