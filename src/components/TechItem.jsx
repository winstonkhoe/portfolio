const TechItem = ({name, image, func}) => {
    const mouseEnter = () => {
        func(name);
    }

    const mouseLeave = () => {
        func("");
    }
    return (
        <a href="#" aria-label={name} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src={"images/" + image} alt=""/>
        </a>
    )
}

export default TechItem;