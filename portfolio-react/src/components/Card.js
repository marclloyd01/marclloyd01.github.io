import placeholder from './placeholder.png'
const Card = ({title,text}) => {
    return (
        <div className = 'col-xs-12 col-sm-6 col-md-4 py-2'>
            <div className = 'card m-auto' style={{width:'85%'}}>
                <img src = {placeholder} className = 'card-img-top'/>
                <div className = 'card-body'>
                    <h5 className = 'card-title'>{title}</h5>
                    <p className = 'card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh ipsum, tristique et velit finibus, dapibus efficitur nulla. Proin auctor id justo ac rutrum. Fusce elementum euismod libero id eleifend. Phasellus at egestas enim. Ut a sodales libero, nec faucibus magna. Praesent mauris orci, fringilla eu suscipit at, tempus eu nunc. Nam id odio tincidunt, tincidunt ligula in, sodales lectus.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
