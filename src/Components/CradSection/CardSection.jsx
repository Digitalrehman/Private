import React from "react";
import "./Cardsection.css";
import ProductionCard from "../Producation card/ProductionCard";
import { IMG_CONTAINER } from "../Header";
import { Link } from "react-router-dom";

const CardSection = () => {
  return (
    <>
      <div className="car-container">
        {IMG_CONTAINER.map((cars, index) => {
          return (
            <div className="cart-box" key={index}>
              <Link to={`/services/CarsDetail/${cars.carname}`}>
              <ProductionCard car={cars} />
              </Link>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardSection;
