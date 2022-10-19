import "../styles/main.scss";
const TechItem = (props: {
  name: string;
  image: string;
  style: string;
}) => {

  return (
    <div
      id={props.name}
      className={`${props.style}`}
      aria-label={props.name}
    >
      <img src={"images/" + props.image} alt="" />
    </div>
  );
};

export default TechItem;
