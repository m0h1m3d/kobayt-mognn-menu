import "./item.scss";

function Item({ price, name, nameEng, img }) {
  console.log(nameEng)
  return (
      <>
    <div className="item">
      <div className="pic">
        <img src={`${img}`} alt="menu-img" />
      </div>
      <div className="details">
        <h2 className={name.includes('بسكويت') ? 'bis-padd' :''} >
          {name}
          <span>{nameEng}</span>
        </h2>
        <h2 className="price">{price}</h2>
      </div>
    </div>
    </>
  );
}

export default Item;
