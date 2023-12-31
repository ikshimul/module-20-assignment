"use client";
import { useState } from "react";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { Toaster } from "react-hot-toast";

const LoginForm = () => {
  let [data, setData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(data.email)) {
      ErrorToast("Email Address Required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let res = await fetch("/api/admin/login", options);
      let ResJson = await res.json();

      setSubmit(false);

      if (ResJson["status"] === "success") {
        SuccessToast("Login Success");
        console.log("Login Success");
        window.location.href = "/dashboard/blog";
      } else {
        ErrorToast("Request Fail");
        console.log("Login Fail");
      }
    }
  };
  return (
    <div className="row h-100 justify-content-center center-screen">
      <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
        <form
          onSubmit={formSubmit}
          className="card animated fadeIn p-5 gradient-bg"
        >
          <h5 className="mb-3">Admin Login</h5>
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              inputOnChange("email", e.target.value);
            }}
            type="email"
            className="form-control mb-2"
          />

          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              inputOnChange("password", e.target.value);
            }}
            type="password"
            className="form-control mb-1"
          />

          <SubmitButton
            className="btn btn-danger mt-3"
            submit={submit}
            text="Login"
          />
        </form>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default LoginForm;
