import React from "react";
import "./ProductionCard.css";
const ProductionCard = (props) => {
  let { carimg, carname, cardes } = props.car;
  return (
    <>
      <div className="Card-Box">
        <div className="img-box">
          <img src={carimg} />
        </div>
        <div className="information">
          <div className="car-name">
            <h3>{carname}</h3>
          </div>
          <div className="car-description">
            <p>{cardes}</p>
          </div>
          <div className="car-btn">
            
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductionCard;
