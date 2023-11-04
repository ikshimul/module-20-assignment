"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

const UserDropDown = () => {
  return (
    <div className="float-right mx-3 h-auto d-flex">
      <div className="user-dropdown">
        <img
          className="icon-nav-img icon-nav"
          src="/images/profile.png"
          alt=""
        />
        <div className="user-dropdown-content ">
          <div className="mt-4 text-center">
            <img className="icon-nav-img" src="/images/profile.png" alt="" />
            <h6>{""}</h6>
            <hr className="user-dropdown-divider  p-0" />
          </div>
          <Link href="/dashboard/profile" className="side-bar-item">
            <AiOutlineUser className="side-bar-item-icon" />
            <span className="side-bar-item-caption">Profile</span>
          </Link>
          <div className="m-3">
            <SubmitButton text="Logout" className="btn  btn-outline-danger">
              <AiOutlineLogout className="side-bar-item-icon" />
              <span className="side-bar-item-caption">Logout</span>
            </SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropDown;
