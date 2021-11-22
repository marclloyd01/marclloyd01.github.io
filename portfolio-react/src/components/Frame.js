
const Frame = ({title,src}) => {
    return (
        <div className = 'col-xl-4 col-md-6 text-center'>
                    <a href = {src} className = 'link-secondary h4'>{title}</a>
                    <iframe src = {src} width = '100%' height = '500' className = 'border'/>
                </div>
    )
}

export default Frame
