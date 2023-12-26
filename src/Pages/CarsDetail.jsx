import React from "react";
import "../Pages/CarDetail.css";
import { useParams } from "react-router-dom";
import { IMG_CONTAINER } from "../Components/Header";


const CarsDetail = () => {
  let {id} = useParams()
  let carsfilter = IMG_CONTAINER.filter((car)=>{
    return car.carname === id
  })
  let [car] = carsfilter
  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold text-dark text-decoration-underline">
          Cars Details
        </h1>
      </div>

      <div className="Card">
        <div className="img">
          <img src={car.carimg} />
        </div>
        <div className="info">
          <div className="car-na">
            <h1>{car.carname}</h1>
          </div>
          <div className="car-des">
            <p>
             {car.cardes}
            </p>
          </div>
          <div className="car-btn">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsDetail;
