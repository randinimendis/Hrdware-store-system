import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";

import "./style.css";
import ApiService from "../Services/ApiService";
import { toast } from "react-toastify";

const HomePage = () => {
  

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await ApiService.getAllProducts();
      if(res){
        setProducts(res.data.products);
        setIsLoading(false);
      }    
    }
    fetchData();
  }, []);


  const handleAddToCart = async (productId) => {
    const customerId = localStorage.getItem("id");

    const data = {
      productId: productId,
      customerId: customerId,
    };

    await ApiService.addProductToCart(data).then((res) => {
      if (res.status === 200) {
        toast("Product added to cart !", {
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
  };

  useEffect(() => {
    // Initialize Owl Carousel
    if(!isLoading){
    const owl = window.jQuery(".owl-carousel1").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      navigation : true
    });

    const owl2 = window.jQuery(".owl-carousel2").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navigation : true
    });

    // Destroy Owl Carousel when component unmounts
    return () => {
      owl.trigger("destroy.owl.carousel");
      owl2.trigger("destroy.owl.carousel");
    };
  }
  }, [products,isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    
      <Sidebar />
      <div className="mx-auto w-75 row d-flex justify-content-center pt-5">
        <div className="container row">
          <div className="owl-carousel owl-carousel1">
            <div className="item">
              <img src="slide1.png" alt="slide1" />
            </div>
            <div className="item">
              <img src="slide2.jpg" alt="slide2" />
            </div>
            <div className="item">
              <img src="slide3.jpg" alt="slide3" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Featured Products</h2>
          <hr />
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="owl-carousel owl-carousel2">
                {products.map((product) => (
                  <div
                    className="item p-1"
                    style={{
                      border: "1px solid rgb(235 235 235)",
                      marginRight: "4px",
                    }}
                    key={product._id}
                  >
                    <img src={product.image} alt="product-icon" />
                    <div className="card-body">
                      <div className="d-flex justify-content-center align-items-center">
                        <h6
                          className="card-title mt-2"
                          style={{ height: "40px", overflow: "hidden" }}
                        >
                          {product.productName}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <p className="card-text mt-1">
                          <b>Rs. {product.price}</b>
                        </p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          style={{
                            borderRadius: 0,
                            borderColor: "rgb(212 237 255)",
                          }}
                          className="btn btn-outline-primary mb-3"
                          type="button"
                          onClick={() => handleAddToCart(product._id)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
