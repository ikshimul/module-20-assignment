"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const NewsList = (props) => {
  console.log(props);
  return (
    <div className="row">
      {props.latest.map((item, i) => {
        return (
          <div className="p-2 col-md-4">
            <div className="card bg-white shadow-sm">
              <img
                className="card-img-top"
                src={item["image"]}
                alt="News Image"
              />
              <div className="card-body">
                <h6 className="card-title">{item["title"]}</h6>
                <p>{item["short_des"]}</p>
                <p className="my-2 fw-bold p-0">
                  <i className="bi bi-clock"></i>
                  &nbsp;{item["createdAt"].toString()}
                </p>
                <Link
                  href={"/Details/" + item["title"] + "?id=" + item["id"]}
                  className="btn mt-2 btn-sm btn-outline-danger"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
