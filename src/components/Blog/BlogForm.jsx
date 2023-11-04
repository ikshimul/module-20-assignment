"use client";
import { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const [data, setData] = useState({
    title: "",
    short_discription: "",
    discription: "",
    image: "",
  });
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (IsEmpty(data.title)) {
      ErrorToast("Title Required");
    } else if (IsEmpty(data.short_discription)) {
      ErrorToast("Last Short Discription Required");
    } else if (IsEmpty(data.discription)) {
      ErrorToast("Discription Required");
    } else if (IsEmpty(data.image)) {
      ErrorToast("Image link Required");
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
      let res = await fetch("/api/blog", options);
      let ResJson = await res.json();
      setSubmit(false);
      if (ResJson["status"] === "success") {
        SuccessToast("Blog Create Success");
        router.refresh();
      } else {
        ErrorToast("Request Fail");
      }
    }
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="row h-100">
        <div className="col-md-12 col-lg-12 col-sm-12 col-12 ">
          <div className="card container animated fadeIn p-5 gradient-bg">
            <h5 className="mb-3">Blog</h5>

            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-6 p-2 col-12">
                <label className="form-label">Blog Title</label>
                <input
                  value={data.title}
                  onChange={(e) => {
                    inputOnChange("title", e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6 p-2 col-12">
                <label className="form-label">Short Discription</label>
                <input
                  value={data.short_discription}
                  onChange={(e) => {
                    inputOnChange("short_discription", e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 p-2 col-12">
                <label className="form-label">Discription</label>
                <textarea
                  rows="6"
                  value={data.discription}
                  onChange={(e) => {
                    inputOnChange("discription", e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                <label className="form-label">Image Link</label>
                <input
                  value={data.image}
                  onChange={(e) => {
                    inputOnChange("image", e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                <SubmitButton
                  className="btn btn-danger w-100 mt-3"
                  submit={submit}
                  text="Add Blog"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;
