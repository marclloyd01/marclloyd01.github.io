
import { useState } from "react"
import { choices } from "./ChoicesGames"

const ContactForm = ({onAdd}) => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [hobby,setHobby] = useState('')
    const [age,setAge] = useState(0)
    const [games,setGames] = useState('')
    const [listenGames,setListenGames] = useState('')
    const [comment,setComment] = useState('')

    const [gameChoices,setGameChoices] = useState(choices)



    
    const handleOnChange = (position) =>{

        const updatedGameCheck = gameChoices.map((choice) => 
        choice.id === position ? {...choice, isPlayed: !choice.isPlayed} : choice
        )

        setGameChoices(updatedGameCheck)

        const filteredGameChoices = updatedGameCheck.filter(choice => choice.isPlayed===true)
        setGames(filteredGameChoices.map(e => e.type).join(', '))
    }


    
    const onSubmit = (e) => {
        e.preventDefault();
        setFirstName('')
        setLastName('')
        setEmail('')
        setHobby('')
        setAge(0)
        setGames('')
        setListenGames('')
        setComment('')


        onAdd({firstName,lastName,email,hobby,age,games,listenGames,comment})
        console.log(firstName,lastName,email,hobby,age,games,listenGames,comment)
    }
    

    return (
        <>
        <div className = 'container text-center' style={{marginTop:'60px'}}>
            <h3>Contact Form</h3>
        </div>
        <form className = 'container px-5 py-3 bg-dark text-white' onSubmit = {onSubmit}>
            <div className = 'py-2 d-flex row'>
                <div className = 'input-group col'>
                    <span className = 'input-group-text'>First Name</span>
                    <input type = 'text' placeholder = 'First Name' className = 'form-control' required
                    value = {firstName}
                    onChange = {(e)=>{setFirstName(e.target.value)}}
                    />
                </div>
                <div className = 'input-group col'>
                    <span className = 'input-group-text'>Last Name</span>
                    <input type = 'text' placeholder = 'Last Name' className = 'form-control' required
                    value = {lastName}
                    onChange = {(e)=>{setLastName(e.target.value)}}
                    />
                </div>
                <div className = 'input-group col'>
                    <span className = 'input-group-text'>Email</span>
                    <input type = 'text' placeholder = 'Email' className = 'form-control' required
                    onChange = {(e)=>{setEmail(e.target.value)}}
                    />
                </div>
            
            </div>
            
            <div className = 'py-3 d-flex row'>
                <div className = 'input-group col'>
                    <label className = 'input-group-text'>What best describes you?</label>
                    <select 
                    className = 'form-select' 
                    id = 'selectGroup1'
                    value = {hobby}
                    onChange ={(e)=>{setHobby(e.target.value)}}
                    
                    >
                    <option>Choose...</option>
                    <option value="Developer">Developer</option>
                    <option value="Music Lover">Music Lover</option>
                    <option value="Gamer">Gamer</option>
                    <option value="None of the Above">None of the Above</option>
                    </select>

                </div>
                <div className = 'input-group col'>
                    <span className = 'input-group-text'> Age </span>
                    <input type = 'number' placeholder = 'Age' className = 'form-control' min = '0' required
                    value = {age}
                    onChange = {(e)=>{setAge(parseInt(e.target.value))}}
                    />
                </div>
            </div>
            <div className = 'input-group col'>
                <span className = 'input-group-text'>What kind of games do you play? (You can choose none of them)</span>
                
                    {gameChoices.map((gameChoice, index) =>{
                        return (<label key = {index} className = 'form-check-label m-1'>
                            <input
                            type = 'checkbox'
                            name={gameChoice.type}
                            value = {gameChoice.type}
                            checked = {gameChoice.isPlayed}
                            onChange = {()=>{handleOnChange(index)}}
                            className = 'form-check-input mx-1'
                            />{gameChoice.type}
                        </label>)
                    })}
                
                
            </div>
            <div className = 'input-group col align-items-center'>
                <span className = 'input-group-text'>Do you listen to game OSTs?</span>
                <label className = 'form-check-label'>
                    <input
                    type = 'radio'
                    value = 'Yes'
                    className ='form-check-input mx-2'
                    checked = {listenGames === 'Yes'}
                    name = 'gameOST'
                    onChange = {(e) => {setListenGames(e.target.value)}}
                    />Yes
                </label>
                <label className = 'form-check-label'>
                    <input 
                    type = 'radio'
                    value = 'No'
                    className ='form-check-input mx-2'
                    checked = {listenGames === 'No'}
                    name = 'gameOST'
                    onChange = {(e) => {setListenGames(e.target.value)}}

                    />No
                </label>
                <label className = 'form-check-label'>
                    <input 
                    type = 'radio'
                    value = 'Just a little'
                    className ='form-check-input mx-2'
                    checked = {listenGames === 'Just a little'}
                    name = 'gameOST'
                    onChange = {(e) => {setListenGames(e.target.value)}}

                    />Just a little
                </label>
            </div>
            <div className = 'col'>
                (optional) comments or suggestions <br/>
                <textarea className = 'w-25'
                value = {comment}
                onChange = {(e)=>{setComment(e.target.value)}}
                />
            </div>
            <div className = 'text-center'>
                <input type ='submit' />
                
            </div>
        </form>
        
        </>
    )
}

export default ContactForm
