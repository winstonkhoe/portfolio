import { useState } from "react";
import "../styles/index.scss";

const TechItem = ({ name, image, hover, click, style }) => {
  // const [onHover, setOnHover] = useState(false);
  const mouseEnter = () => {
    hover(name);
    // setOnHover(true);
  };

  const mouseLeave = () => {
    hover("");
    // setOnHover(false);
  };

  const mouseClick = () => {
    click(name);
  }
  return (
    <a
      className={`${style}`}
      href="#"
      aria-label={name}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseClick}
    >
      <img src={"images/" + image} alt="" />
    </a>
  );
};

export default TechItem;
