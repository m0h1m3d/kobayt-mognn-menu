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
            const {name, price, img} = item;
            return <Item key={name} name={name} price={price} img={img} />
        })};
        </>
    )
}

export default SubItem
