import axios from "axios";
const API_URL = "http://localhost:8000/api//";

const register = async (data) => {
  return await axios.post(API_URL + "register", data);
};

const login = async (data) => {
  return await axios.post(API_URL + "login", data);
};

const userDetails = async () => {
  return await axios.get(
    API_URL + "customer/get/" + localStorage.getItem("id")
  );
};

const updateUserProfile = async (data) => {
  return await axios.put(
    API_URL + "customer/update/" + localStorage.getItem("id"),
    data
  );
};

const getAllProducts = async () => {
  return await axios.get(API_URL + "getallproducts");
};

const addProductToCart = async (data) => {
  return await axios.put(API_URL + "addtocart", data);
};

const getCart = async () => {
  return await axios.get(API_URL + "getcart/" + localStorage.getItem("id"));
};

const deleteCartITem = async (productId) => {
  const data = {
    productId: productId,
    customerId: localStorage.getItem("id")
  }
  return await axios.put(API_URL + "deletecartitem",data);
}

const deleteCustomerAccount = async () => {
  return await axios.delete(API_URL + "customer/delete/" + localStorage.getItem("id"));

}
const ApiService = {
  register,
  login,
  userDetails,
  updateUserProfile,
  getAllProducts,
  addProductToCart,
  getCart,
  deleteCartITem,
  deleteCustomerAccount,
};
export default ApiService;
