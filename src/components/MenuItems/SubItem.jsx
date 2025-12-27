import Item from './Item';
import "./subitem.scss";
function SubItem({title, data}) {
    return (
        <>
        <h1 className='sub-title'><span>
            {title}
            </span>
            </h1>
        {data.map(item => {
            const {name, nameEng, price, img} = item;
            return <Item key={name} name={name} nameEng={nameEng} price={price} img={img} />
        })};
        </>
    )
}

export default SubItem
