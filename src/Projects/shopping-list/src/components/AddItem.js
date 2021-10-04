import { useState } from "react"

const AddItem = ({onAdd}) => {

    const [text,setText] = useState('') //name
    const [count,setCount] = useState(0) //quantity
    const [price,setPrice] = useState(0) //price
    const [inCart,setInCart] = useState(true) //incart

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please Add Item')

            return
        }

        setText('')
        setCount(0)
        setPrice(0)
        setInCart(false)
        onAdd({text,count,price,inCart})
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            
            <div className = 'form-control'>
                <label>Item </label>
                <input
                type = 'text'
                placeholder = 'Add Item'
                value = {text}
                onChange={(e) => (setText(e.target.value))}
                />
            </div>
            <div className = 'form-control'>
                <label>Quantity</label>
                <input
                type = 'number'
                placeholder = 'Quantity'
                min = '0'
                value = {count}
                onChange={(e) => (setCount(parseInt(e.target.value)))}
                />
            </div>
            <div className = 'form-control'>
                <label>Price</label>
                <input
                type = 'number'
                placeholder = 'Quantity'
                min = '0'
                value = {price}
                onChange={(e) => (setPrice(e.target.value))}
                />
            </div>
            <div className = 'form-control text-align-center'>
            <input type = 'submit' className = 'btn center'
            />
            </div>

        </form>
    )
}

export default AddItem
