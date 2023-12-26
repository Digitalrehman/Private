import React from "react";

let DetailItems = (props) => {
  console.log(props);
  let { title, price, description, image } = props.product;
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={image} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}Hello </h5>
                <p className="card-text">{description}</p>
                <h4>{price}</h4>
                <button className="p-2 bg-success rounded-2 ">
                  More Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailItems;
