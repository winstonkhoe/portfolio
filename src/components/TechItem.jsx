import { useState } from "react";
import "../styles/index.scss";

const TechItem = ({ name, image, func }) => {
  const [onHover, setOnHover] = useState(false);
  const mouseEnter = () => {
    func(name);
    setOnHover(true);
  };

  const mouseLeave = () => {
    func("");
    setOnHover(false);
  };
  return (
    // <div style={{ position: "relative", transformStyle: "preserve-3d", perspective: "1000rem" }}>
    //   {onHover && (
    //     <div
    //       style={{
    //         width: "300px",
    //         height: "300px",
    //         position: "absolute",
    //         right: "100%",
    //         backgroundColor: "#FFF",
    //         transform: "rotateY(0deg)",
    //         transformOrigin: "left",
    //         zIndex: "999",
    //       }}
    //     ></div>
    //   )}
    <a
      href="#"
      aria-label={name}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      // style={{ position: "absolute", zIndex: "-1" }}
    >
      <img src={"images/" + image} alt="" />
    </a>
    // </div>
  );
};

export default TechItem;
