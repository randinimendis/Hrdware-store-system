import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import Sidebar from "./SideBar";
import ApiService from "../Services/ApiService";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const loginUser = async (values, resetForm) => {
    await ApiService.login(values)
      .then((res) => {
        if (res.status === 200) {
          const { address, email, fname, lname, phone, token, _id, role } =
            res.data.user;
          localStorage.setItem("address", address);
          localStorage.setItem("email", email);
          localStorage.setItem("fname", fname);
          localStorage.setItem("lname", lname);
          localStorage.setItem("phone", phone);
          localStorage.setItem("token", token);
          localStorage.setItem("id", _id);
          localStorage.setItem("role", role?role:"customer");

          login(address, email, fname, lname, phone, token, _id);

          resetForm();
          toast("Successfully logged in!", {
            theme: "colored",
            type: "success",
            autoClose: 2000,
          });

          navigate("/");
        } else {
          toast("Something went wrong, please try again.", {
            theme: "colored",
            type: "error",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        toast("Incorrect username or password!", {
          theme: "colored",
          type: "error",
          autoClose: 2000,
        });
      });
  };
  return (
    <>
      <Sidebar />
      <div className="col-md-10">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "30px" }}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                loginUser(values, resetForm);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                id="loginForm"
                className="mx-auto w-50"
                onSubmit={handleSubmit}
              >
                <div className="card p-5" style={{backgroundColor:"whitesmoke"}}>
                  <div className="mb-3">
                    <h5>Login</h5>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Email
                      <Field
                        id="email"
                        name="email"
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        type="email"
                        placeholder="Email"
                        style={{ borderRadius: "0px" }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Password
                      <Field
                        id="password"
                        name="password"
                        className={`form-control ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        type="password"
                        placeholder="Password"
                        style={{ borderRadius: "0px" }}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary mx-auto w-100"
                      type="submit"
                      disabled={!values.email || !values.password}
                      style={{ borderRadius: "0px" }}
                    >
                      <b>LOGIN</b>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
