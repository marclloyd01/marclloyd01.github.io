import PropTypes from 'prop-types'


const Button = ({color,item,onDelete}) => {
    return (
        <button 
        onClick={()=>onDelete(item.id)}
        style={{backgroundColor: color}}className = 'btn'
        >
        Remove
        </button>
    )
}

Button.defaultProps = {
    color:'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
    
}

export default Button
