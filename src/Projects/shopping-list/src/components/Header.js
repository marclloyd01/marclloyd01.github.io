import PropTypes from 'prop-types'


// c component-name = (props or var to accept)
const Header = ({title,onToggle,showAdd}) => {
    return (
        <header className = ''>
            <h1>{title}</h1>
            <p>by Marc Menguito</p>
            <button className = 'btn'
            onClick = {onToggle}
            >{showAdd ? 'Close' :'Show Add Items'}</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Shopping List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
