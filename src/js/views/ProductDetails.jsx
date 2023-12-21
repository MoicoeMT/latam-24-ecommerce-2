import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductDetails = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  console.log(params);
  const product = store.products.find((item) => item.id == params.id);
  console.log(product);

  return (
    <div className="container card mb-3">
      {product ? (
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
              <p className="card-text">
                <small className="text-body-secondary">
                  ${product.price} 
                </small>
              </p>
              <button onClick={()=> actions.deleteProduct(product.id)} className="btn btn-danger">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
              <Link to={"/"}>
                regresar
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
