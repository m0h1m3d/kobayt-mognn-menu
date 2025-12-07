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
          value={"Hot Drinks"}
          title={"Hot Drinks"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          value={"Iced Drinks"}
          title={"Iced Drinks"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          value={"Zalabia & Pastries"}
          title={"Zalabia & Pastries"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          value={"Slush"}
          title={"Slush"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          value={"Milkshake"}
          title={"Milkshake"}
          setFiltered={setFiltered}
        />
        <Button
          active={active}
          setActive={setActive}
          value={"Mojito"}
          title={"Mojito"}
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
