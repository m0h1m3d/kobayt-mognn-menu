import "./item.scss";

function Item({ price, name }) {
  return (
    <div className="item">
      <div className="pic"></div>
      <div className="details">
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default Item;
