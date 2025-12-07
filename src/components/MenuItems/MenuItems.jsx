import Item from './Item';
import './menuitem.scss';

function MenuItems({item}) {
    const {category, items} = item;


    return (
        <div className='card'>
            <h1>
                
                <img src={`/${
                    category.includes('Hot') ? 'hot'
                    :
                    category.includes('Iced')?
                    'iced'
                    :
                    category.includes('Zalabia & Pastries') ?
                    'zalabia'
                    :
                    category.includes('Slush') ?
                    'slush'
                    :
                    category.includes('Milkshake') ?
                    'shake'
                    :
                    category.includes('Mojito') ?
                    'mojito'
                    :''
                    
                    
                }.jpg`} alt=""/>


            {category}</h1>

            {items.map(item => <Item key={item.name} name={item.name} price={item.price} />)}
        </div>
    )
}

export default MenuItems
