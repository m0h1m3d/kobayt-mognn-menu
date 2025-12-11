import { useEffect } from "react";
import Item from "./Item";
import "./menuitem.scss";

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

      {items.map((item) => (
        <Item key={item.name} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default MenuItems;
