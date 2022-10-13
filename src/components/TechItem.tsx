import "../styles/index.scss";

const TechItem = (props: {
  name: string;
  image: string;
  opacity: number;
  hover: Function;
  click: Function;
  style: string;
}) => {
  // const [onHover, setOnHover] = useState(false);
  const mouseEnter = () => {
    props.hover(props.name);
    // setOnHover(true);
  };

  const mouseLeave = () => {
    props.hover("");
    // setOnHover(false);
  };

  const mouseClick = () => {
    props.click(props.name);
  };
  return (
    <a
      className={`${props.style}`}
      style={{boxShadow: `0 0 .5rem hsl(95 94% 48% / ${props.opacity})`}}
      href="#"
      aria-label={props.name}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseClick}
    >
      <img src={"images/" + props.image} alt="" />
    </a>
  );
};

export default TechItem;
