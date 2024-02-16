

export default function User({ image, name, email, website}) {
    return (
        <div className="user__div">
            <img src={image} alt={name} />
            <div className="inner__user__div">
                <h3>{name}</h3>
                <h5>{email}</h5>
                <h6>{website}</h6>
                <button>Contact</button>
            </div>
        </div>
    )
}