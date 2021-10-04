
const Counter = ({item,onIncrement,onDecrement}) => {
    return (
        <div className = 'w-33'>
        <button
        className = 'btn'
        onClick={()=>onDecrement(item.id)}>-</button>
        <span>{item.count}</span>
        
        <button 
        className = 'btn'
        onClick={()=>onIncrement(item.id)}>+</button>
        {/* <button onClick={()=>console.log(typeof(item.count))}>count</button> */}
        </div>
    )
}

export default Counter
