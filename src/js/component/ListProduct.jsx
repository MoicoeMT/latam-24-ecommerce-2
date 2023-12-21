import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="card mt-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        Products <button onClick={() => navigate(`/product/create`)} className="btn btn-secondary">+</button>
      </div>
      <ul className="list-group list-group-flush">
        {store.products.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="">
                <h4>{item.title}</h4>
                <p> ${item.price}</p>
              </div>
              <div className="d-flex gap-1">
                <button
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => actions.deleteProduct(item.id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProduct;
