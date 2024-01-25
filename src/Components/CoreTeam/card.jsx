import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div
      className="maincard"
      style={{
        ...styles.card,
        backgroundColor: "#0F0F0F",
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: props.z_index,
        opacity: props.opacity,
        transform: `translate(-50%,-50%) scale(${props.scale})`,
        border: "1px solid #046635"
        // display:'${props.new_display}',
      }}
    >
      <img
        data-aos={"flip-left"}
        data-aos-delay={"100"}
        loading="lazy"
        decoding="async"
        style={styles.image}
        src={props.picsum_img}
        alt="reactjs"
      ></img>

      <h1 className="namee">
        {props.surname}
        <br></br>
        {props.name}
      </h1>
      <h4 className="pos">{props.dep} </h4>
    </div>
  );
}

//, backgroundColor:props.color, left:'${props.x}px' , top:'${props.y}px'

const styles = {
  card: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "400px",
    width: "300px",
    backgroundColor: "red",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    boxSizing: "border-box",
    background: "black"
  },
  image: {
    width: "150px",
    height: "250px",
    borderRadius: "5px",
    zIndex: "3",
    objectFit: "contain",
  },
  department: {
    color: "white",
  },
};
export default Card;
