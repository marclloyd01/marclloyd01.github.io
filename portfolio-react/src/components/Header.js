import picture from './image.png'

const Header = () => {
    return (
        <div className = 'text-white align-items-center bg-dark py-2 mt-5'>
            <div className = 'row container-fluid align-items-center'>
                <div className = 'col-md-auto col-xs-12 text-center'>
                    <img src = {picture} className = 'rounded-circle'/>
                </div>
                <div className = 'col-md-auto col-xs-12 text-center text-sm-start'>
                    <h1 className = 'display-5'>Marc Lloyd Menguito</h1>
                    <h2 className = 'display-6'>Junior Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
