import React from "react";
import { Link } from "react-router-dom";
import CardSection from "../Components/CradSection/CardSection";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row m-5">
          <div className="col-12 ">
            <button className="fw-bold btn btn-dark  p-3 m-2 ">
              <Link
                to="/Services/Carrepair"
                className="text-light text-decoration-none"
              >
                Cars Repair
              </Link>
            </button>
          </div>
        </div>
      </div>

      <CardSection />
    </>
  );
};

export default Services;
