const TechItem = (props) => {
    console.log(props.name, props.image);
    return (
        <a href="#" aria-label={props.name}>
            <img src={"images/" + props.image} alt="" />
        </a>
    )
}

export default TechItem;