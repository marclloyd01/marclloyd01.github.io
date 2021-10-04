import { useState } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header'
import Items from './components/Items';
import ItemHeader from './components/ItemHeader';

const App = () =>{
  const [items, setItems] = useState(
    [
        {
            id:1,
            text: 'Apple',
            count: 0,
            price: 20,
            inCart: true,
          },
          {
            id:2,
            text: 'Banana',
            count: 0,
            price: 30,
            inCart: true,
    
          },
          {
            id:3,
            text: 'Orange',
            count: 0,
            price: 40,
            inCart: true,
          }
    ]
)
  const [showAddItem,setShowAddItem] = useState(false)
  
// const result = words.filter(word => word.length > 6);
  const deleteItem = (id) =>{
    setItems(items.filter((item) => item.id !== id)) //actually deletes it
    //setItems(items.map((item) => item.id === id ? {...item,inCart: false}:item))
  }

  const incrementValue = (id) => {

    setItems(items.map((item) => item.id === id ? {...item,count: item.count+1}:item))
    
  }

  const decrementValue = (id) => {

    setItems(items.map((item) => item.id === id &&item.count>0 ? {...item,count: item.count-1}:item))
    
  }

  //Add Item
  const addItem = (item)=> {
    const id = Math.floor(Math.random() * 1000)+1
    const newItem = {id, ...item}
    setItems([...items,newItem])
  }
  
  //functions before return()
  return (
    <div className="container">
      <Header 
      title='Shopping List'
      onToggle = {() => setShowAddItem(!showAddItem)} showAdd= {showAddItem}
      />
      
      {showAddItem &&
      <AddItem
      onAdd={addItem}
      
      />}
      <ItemHeader/>
      {items.length > 0 ? (
      <Items 
      items={items} 
      onDelete={deleteItem}
      onIncrement={incrementValue}
      onDecrement={decrementValue}
      />
      )
      :(<h2>No Items Bought</h2>)
      }

    </div>
  );
}

export default App;
