import "./item.scss";

function Item({ price, name, img }) {
  return (
    <div className="item">
      <div className="pic">
        <img src={`${img}`} alt="menu-img" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default Item;
