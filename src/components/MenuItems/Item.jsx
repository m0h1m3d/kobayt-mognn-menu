import './item.scss';

function Item({price, name}) {
    return (
        <div className='item'>
            <h2>{price}</h2>
            <h2>{name}</h2>
        </div>
    )
}

export default Item
