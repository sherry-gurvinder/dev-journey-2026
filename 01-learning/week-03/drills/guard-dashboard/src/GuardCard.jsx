// GuardCard.jsx

const GuardCard = (props) => {   // <-- BLANK 1: Catch the data!
    return (
        <div style={{ border: "1px solid white", padding: "10px", margin: "10px 0" }}>
            <h3>Guard Profile</h3>
            <p>Key:{props.key}</p>
            <p>Name: { props.name}</p>
            <p>Badge: {props.badge}</p>
        </div>
    )
}

export default GuardCard;