import React from "react";

const CreateProduct = () => {
  return (
    <div className="">
      <form className="container">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="title">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="title"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="price">
            Price
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="price"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="description">
            Description
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="description"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="image">
            Image
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="image"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="category">
            Category
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="category"
          />
        </div>
        <button className="btn btn-success">add a product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
