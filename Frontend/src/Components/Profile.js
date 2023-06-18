import React, { useState, useEffect, useContext } from "react";
import ApiService from "../Services/ApiService";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "", label: "" },
  ];

  const [initialValues, setInitialValues] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    payment_method: "",
    nic: "",
    gender: "not selected",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await ApiService.userDetails();
      const {
        fname,
        lname,
        phone,
        email,
        address,
        nic,
        gender,
        payment_method,
      } = res.data.customerde;
      setInitialValues({
        ...initialValues,
        fname: fname || "",
        lname: lname || "",
        phone: phone ? phone.toString() : "",
        email: email || "",
        address: address || "",
        nic: nic || "",
        payment_method: payment_method || "",
        gender: gender || "",
      });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/^(?:\+94|0)?(7(?:0|1|2|5|6|7|8))[0-9]{7}$/, {
        message: "Invalid mobile number",
        excludeEmptyString: true,
      })
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string().min(
      8,
      "Password must be at least 8 characters long"
    ),
    confirmPassword: Yup.string().when("password", (password, schema) => {
      if (password && password.length > 0) {
        return schema.oneOf([Yup.ref("password")], "Passwords must match");
      } else {
        return schema;
      }
    }),
  });

  const saveProfile = async (values) => {
    delete values.confirmPassword;

    if (values.password === "") {
      delete values.password;
    }

    await ApiService.updateUserProfile(values).then((res) => {
      if (res.status === 201) {
        toast("Profile updated successfully !", {
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

  const handleDeleteProfile = async () => {
    await ApiService.deleteCustomerAccount().then((res) => {
      logout();

      localStorage.removeItem("address");
      localStorage.removeItem("email");
      localStorage.removeItem("fname");
      localStorage.removeItem("lname");
      localStorage.removeItem("phone");
      localStorage.removeItem("token");
      localStorage.removeItem("id");

      navigate("/login");

      if (res.status === 200) {
        toast("Profile deleted !", {
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

  const confirmDelete = () => {
  if (window.confirm("Are you sure you want to delete this profile?")) {
    handleDeleteProfile();
  }
};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              saveProfile(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="mx-auto w-75 row d-flex justify-content-center pt-5"
            >
              <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center row">
                  <div className="mb-3">
                    <h1>Customer Profile</h1>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      First Name
                      <Field
                        className={`form-control ${
                          touched.fname && errors.fname ? "is-invalid" : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                        name="fname"
                      />
                      {touched.fname && errors.fname && (
                        <div className="invalid-feedback">{errors.fname}</div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Last Name
                      <Field
                        className={`form-control ${
                          touched.lname && errors.lname ? "is-invalid" : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                        name="lname"
                      />
                      {touched.lname && errors.lname && (
                        <div className="invalid-feedback">{errors.lname}</div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Mobile number
                      <Field
                        className={`form-control ${
                          touched.phone && errors.phone ? "is-invalid" : ""
                        }`}
                        type="tel"
                        style={{ borderRadius: 0 }}
                        name="phone"
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
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        type="email"
                        style={{ borderRadius: 0 }}
                        name="email"
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Address
                      <Field
                        className={`form-control ${
                          touched.address && errors.address ? "is-invalid" : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                        name="address"
                      />
                      {touched.address && errors.address && (
                        <div className="invalid-feedback">{errors.address}</div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Payment Method
                      <Field
                        className={`form-control ${
                          touched.payment_method && errors.payment_method
                            ? "is-invalid"
                            : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                        name="payment_method"
                      />
                      {touched.payment_method && errors.payment_method && (
                        <div className="invalid-feedback">
                          {errors.payment_method}
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      NIC
                      <Field
                        className={`form-control ${
                          touched.nic && errors.nic ? "is-invalid" : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                        name="nic"
                      />
                      {touched.nic && errors.nic && (
                        <div className="invalid-feedback">{errors.nic}</div>
                      )}
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mx-auto w-100">
                      Gender
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                        className={`form-control ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                        type="text"
                        style={{ borderRadius: 0 }}
                      >
                        {genderOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                      {touched.gender && errors.gender && (
                        <div className="invalid-feedback">{errors.gender}</div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-center row">
                  <div>
                    <img
                      className="rounded-circle img-fluid"
                      src="https://picsum.photos/200"
                      alt="profile  "
                    />
                    <div className="mb-3 mt-3">
                      <label className="form-label mx-auto w-100">
                        Password
                        <Field
                          className={`form-control ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          type="password"
                          style={{ borderRadius: 0 }}
                          name="password"
                        />
                        {touched.password && errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </label>
                    </div>
                    <div className="mb-3 mt-3">
                      <label className="form-label mx-auto w-100">
                        Confirm Password
                        <Field
                          className={`form-control ${
                            touched.confirmPassword && errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                          type="password"
                          style={{ borderRadius: 0 }}
                          name="confirmPassword"
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </label>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary mx-auto w-100"
                        type="submit"
                        style={{ fontWeight: "bold", borderRadius: 0 }}
                      >
                        SAVE
                      </button>
                      <button
                        className="btn btn-secondary mx-auto w-100 mt-2"
                        type="button"
                        style={{ fontWeight: "bold", borderRadius: 0 }}
                      >
                        RESET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{ fontWeight: "bold", borderRadius: 0 }}
                className="btn btn-danger mb-5"
                type="button"
                onClick={() => confirmDelete()}
              >
                DELETE PROFILE
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Profile;

