import React from "react";
import Sidebar from "./SideBar";

import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import ApiService from "../Services/ApiService";

const RegisterSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(/^(?:\+94|0)?(7(?:0|1|2|5|6|7|8))[0-9]{7}$/, {
      message: "Invalid mobile number",
      excludeEmptyString: true,
    })
    .required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const registerUser = async (values, resetForm) => {
    await ApiService.register(values).then((res) => {
      if (res.status === 200) {
        resetForm();
        toast("Account created successfully !", {
          theme: "colored",
          type: "success",
          autoClose: 2000,
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
  return (
    <>
      <Sidebar />
      <div className="col-md-10">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "30px" }}
        >
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              address: "",
              phone: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                registerUser(values, resetForm);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                id="registerForm"
                className="mx-auto w-50"
              >
                <div className="card p-5" style={{backgroundColor:"whitesmoke"}}>
                <div className="mb-3">
                  <h5>Register</h5>
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col">
                      <label className="form-label mx-auto w-100">
                        First name
                        <Field
                          id="fname"
                          name="fname"
                          style={{ borderRadius: "0px" }}
                          className={`form-control ${
                            touched.fname && errors.fname ? "is-invalid" : ""
                          }`}
                          placeholder="First Name"
                        />
                        {touched.fname && errors.fname && (
                          <div className="invalid-feedback">{errors.fname}</div>
                        )}
                      </label>
                    </div>
                    <div className="col">
                      <label className="form-label mx-auto w-100">
                        Last name
                        <Field
                          id="lname"
                          name="lname"
                          style={{ borderRadius: "0px" }}
                          className={`form-control ${
                            touched.lname && errors.lname ? "is-invalid" : ""
                          }`}
                          placeholder="Last Name"
                        />
                        {touched.lname && errors.lname && (
                          <div className="invalid-feedback">{errors.lname}</div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label mx-auto w-100">
                    Address
                    <Field
                      id="address"
                      name="address"
                      style={{ borderRadius: "0px" }}
                      className={`form-control ${
                        touched.address && errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Address"
                    />
                    {touched.address && errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label mx-auto w-100">
                    Mobile Number
                    <Field
                      id="phone"
                      name="phone"
                      style={{ borderRadius: "0px" }}
                      className={`form-control ${
                        touched.phone && errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Mobile Number"
                    />
                    {touched.phone && errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label mx-auto w-100">
                    Email
                    <Field
                      id="email"
                      name="email"
                      style={{ borderRadius: "0px" }}
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                    />
                    {touched.email && errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label mx-auto w-100">
                    Password
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      style={{ borderRadius: "0px" }}
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                    />
                    {touched.password && errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label mx-auto w-100">
                    Confirm Password
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      style={{ borderRadius: "0px" }}
                      className={`form-control ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Confirm password"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary mx-auto w-100"
                    type="submit"
                    style={{ borderRadius: "0px" }}
                  >
                    <b>REGISTER</b>
                  </button>
                </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
