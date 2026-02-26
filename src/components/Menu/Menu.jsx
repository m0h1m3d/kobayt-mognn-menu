import { useState } from "react";
import Button from "./Button";
import "./menu.scss";
import menuData from "../../../menuData";
import MenuItems from "../MenuItems/MenuItems";

function Menu() {
  const [active, setActive] = useState("All");
  const [filtered, setFiltered] = useState("All");
  const menu = menuData;
  const filteredMenu = menu.filter((item) => {
    if (filtered === "All") {
      return menu;
    } else if (filtered === item.category) {
      return item;
    }
  });

  return (
    <div className="menu-container">
      <nav className="links">
        <Button
          active={active}
          setActive={setActive}
          value={"All"}
          title={"All"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          // value={"Hot Drinks"}
          value={'المشروبات الساخنة'}
          title={"Hot Drinks"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          // value={"Iced Drinks"}
          value={"المشروبات المثلجة"}
          title={"Iced Drinks"}
          setFiltered={setFiltered}
        />
          <Button
            active={active}
            setActive={setActive}
            // value={"Mojito"}
            value={"موهيتو"}
            title={"Mojito"}
            setFiltered={setFiltered}
          />
        <Button
          active={active}
          setActive={setActive}
          // value={"Zalabia & Pastries"}
          value={"الزلابية والمعجنات"}
          title={"Zalabia & Pastries"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          // value={"Slush"}
          value={"سلاش"}
          title={"Slush"}
          setFiltered={setFiltered}
        />
        {/* <Button
          active={active}
          setActive={setActive}
          value={"Milk Shake"}
          value={"ميلك شيك"}
          title={"Milk Shake"}
          setFiltered={setFiltered}
        /> */}
        {/* <Button
          active={active}
          setActive={setActive}
          // value={"Winter Drinks"}
          value={"مشروبات الشتاء"}
          title={"Winter Drinks"}
          setFiltered={setFiltered}
        /> */}
        <Button
          active={active}
          setActive={setActive}
          // value={"Bosh Point Grills"}
          value={"مشاوي بوش بوينت"}
          title={"Bosh Point Grills"}
          setFiltered={setFiltered}
        />
      </nav>

      <div className="menu">
        {filteredMenu.map((menuItem) => (
          <MenuItems key={menuItem.category} item={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
