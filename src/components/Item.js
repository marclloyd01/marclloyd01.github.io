import Counter from "./Counter"
import {FaTimes} from 'react-icons/fa'

const Item = ({item,onDelete,onIncrement,onDecrement}) => {
    return (
        <>
        {item.inCart === true ? <div className='item'>
        <FaTimes 
             className = 'align-right'
            onClick={()=>onDelete(item.id)}
            />
            
        <div className = 'd-flex'>
            <div className = 'w-33 text-align-left'>
                <h3>{item.text}</h3> </div>
            <Counter
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            />
            <div className = 'w-33 text-align-right'>
                <h3>₱ {item.price * item.count}</h3>
            </div>
            </div>
                Price: ₱{item.price}
        </div>: ''}
        </>
    )
}

export default Item
