import picture from './image.png'

const Header = () => {
    return (
        <div className = 'text-white align-items-center bg-dark '>
            <div className = 'row container-fluid align-items-center'>
                <div className = 'col-md-auto'>
                    <img src = {picture} className = 'rounded-circle'/>
                </div>
                <div className = 'col'>
                    <h1 className = 'display-2'>Marc Lloyd Menguito</h1>
                    <h2 className = 'display-6'>Junior Developer</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Header
