import Item from "./Item"

const Items = ({items,onDelete, onIncrement, onDecrement}) => {   
   
    return (
        <>
        {/* item is a new variable */}
         {items.map((item) => (
          <Item 
          key={item.id} 
          item={item}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          />
          ))}
          
        </>
    )
}

export default Items
