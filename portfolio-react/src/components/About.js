
const About = ({infos}) => {
    return (
        <div className = 'container' style={{marginTop:'60px',marginBottom:'120px'}}>
            <h3>About Page</h3>
            <label>First Name</label>
            <p>{infos.firstName}</p>
            <label>Last Name</label>
            <p>{infos.lastName}</p>
            <label>Email</label>
            <p>{infos.email}</p>
            <label>Hobby</label>
            <p>{infos.hobby}</p>
            <label>Age</label>
            <p>{infos.age}</p>
            <label>Games</label>
            <p>{infos.games}</p>
            <label>Listens to Game OSTs</label>
            <p>{infos.listenGames}</p>
            <label>Comment</label>
            <p>{infos.comment}</p>
        </div>
    )
}

export default About
