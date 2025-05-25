const Card = ({imgSource, title, description}) => {
    return (
        <div className="space-y-3">
            <div className="w-[500px] h-[300px] overflow-hidden">
                <img src={imgSource} alt={title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
            </div>
            <h2 className="uppercase font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default Card