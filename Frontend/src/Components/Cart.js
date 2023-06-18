import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../Services/ApiService";
import { toast } from "react-toastify";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isDescriptionVisible = (index) => {
    return activeIndex === index;
  };

  const fetchData = async () => {
    await ApiService.getCart().then((res) => {
      setProducts(res.data.cart.products);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const calculateSUbTotal = () => {
    let tot = 0;
    for (let i = 0; i < products.length; i++) {
      tot += products[i].qty * products[i].product.price;
    }
    setSubTotal(tot);
  }

  useEffect(() => {
    calculateSUbTotal();
  }, [products,calculateSUbTotal]);


  const delelteCartItem = async (productId) => {
    await ApiService.deleteCartITem(productId).then((res) => {
      setIsLoading(true); 
      fetchData();
      if (res.status === 200) {
        toast("Removed item from cart !", {
          theme: "colored",
          type: "success",
          autoClose: 1500,
        });
      } else {
        toast("Something went wrong, please try again.", {
          theme: "colored",
          type: "error",
          autoClose: 2000,
        });
      }
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="mx-auto w-75 row d-flex pt-5">
        <div className="col-md-6">
          <div>
            <h1>Your cart</h1>
            <p>
              Not ready to checkout ?{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                Continue shopping{" "}
              </Link>
            </p>

            {products.map((product) => (
              <div key={product._id}>
                <div className="row">
                  <div className="col-3">
                    <img src={product.product.image} style={{width:"110px", height:"auto"}} alt="product icon" />
                  </div>
                  <div className="col-7">
                    <h4>{product.product.productName}</h4>
                    <p style={{ marginBottom: "0" }}>
                      Quantity : {product.qty}
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      Product price: {product.product.price}
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      <b>Sub total: {product.product.price * product.qty}</b>
                    </p>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-link parent-delete-icon"
                      onClick={() => delelteCartItem(product.product._id)}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="delete-icon"
                      />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}

            <div className="row mt-5">
              <h4>Order Information</h4>
              <hr />
              <div className="accordion" id="faqAccordion">
                <div className="mb-2 ">
                  <div
                    className="btn btn-link mx-auto w-100 border-0"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: 0,
                    }}
                    onClick={() => toggleDescription(0)}
                    aria-expanded={isDescriptionVisible(0)}
                    aria-controls="collapseOne"
                  >
                    <div className="border rounded">
                      <div className="p-3 d-flex align-items-center justify-content-between">
                        <span className="faq-title">FAQ Title 1</span>
                        <FontAwesomeIcon
                          icon={isDescriptionVisible(0) ? faMinus : faPlus}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className={`collapse ${
                      isDescriptionVisible(0) ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="p-3">FAQ Description 1</div>
                  </div>
                </div>

                <hr />

                <div className="mb-2 ">
                  <div
                    className="btn btn-link mx-auto w-100 border-0"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: 0,
                    }}
                    onClick={() => toggleDescription(1)}
                    aria-expanded={isDescriptionVisible(1)}
                    aria-controls="collapseOne"
                  >
                    <div className="border rounded">
                      <div className="p-3 d-flex align-items-center justify-content-between">
                        <span className="faq-title">FAQ Title 2</span>
                        <FontAwesomeIcon
                          icon={isDescriptionVisible(1) ? faMinus : faPlus}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className={`collapse ${
                      isDescriptionVisible(1) ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="p-3">FAQ Description 2</div>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "45vh",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-6">Sub Total</div>
              <div className="col-6 text-right" style={{ textAlign: "right" }}>
                Rs. {subTotal}
              </div>
            </div>
            <div className="row">
              <div className="col-6">Shipping</div>
              <div className="col-6 text-right" style={{ textAlign: "right" }}>
                Calculated at the next step
              </div>
            </div>
            <hr className="mt-3" />
            <div className="row">
              <div className="col-6">Total</div>
              <div className="col-6 text-right" style={{ textAlign: "right" }}>
                Rs. {subTotal}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-primary mx-auto w-100"
                  style={{ fontWeight: "bold", borderRadius: 0 }}
                >
                  Continue to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
