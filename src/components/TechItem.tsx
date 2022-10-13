import "../styles/index.scss";

const TechItem = (props: {
  name: string;
  image: string;
  // hover: Function;
  // click: Function;
  style: string;
}) => {
  // const [onHover, setOnHover] = useState(false);
  // const mouseEnter = () => {
  //   props.hover(props.name);
  //   // setOnHover(true);
  // };

  // const mouseLeave = () => {
  //   props.hover("");
  //   // setOnHover(false);
  // };

  // const mouseClick = () => {
  //   props.click(props.name);
  // };
  return (
    <div
      id={props.name}
      className={`${props.style}`}
      aria-label={props.name}
      // onMouseEnter={mouseEnter}
      // onMouseLeave={mouseLeave}
      // onMouseDown={mouseClick}
    >
      <img src={"images/" + props.image} alt="" />
    </div>
  );
};

export default TechItem;
