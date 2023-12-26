import React, { useEffect } from "react";
import DetailItems from "./DetailItems";
import axios from "axios";
import { useState } from "react";
const Carrepair = () => {
  let [storedata, setStoredata] = useState([]);
  useEffect(() => {
    fetchapi();
  }, []);
  let fetchapi = async () => {
    let fetcher = await axios.get("https://fakestoreapi.com/products");
    let data = fetcher.data;
    setStoredata(...[data]);
  };
  return (
    <>
      <div className="container-fluid flex-wrap">
        <div className="row my-3">
          <div className="text-center my-4">
            <h1 className="fw-bolder text-decoration-underline text-dark">
              Product Details
            </h1>
          </div>
          {storedata.map((product, index) => {
            return (
              <div key={index} className="col-4">
                <DetailItems product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carrepair;
