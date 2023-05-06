

const Food = ({items}) => {
    const {title, price, img, desc} = items
    return (
        <div>
            <img src={img} alt={title} />
            <div>
                <h3>{title} </h3>
                <span>{price}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}


export default Food