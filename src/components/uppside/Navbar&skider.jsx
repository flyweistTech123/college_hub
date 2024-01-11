import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/c33.png";
import img2 from "../../Images/c26.png";
import img3 from "../../Images/slider1.png";
import img4 from "../../Images/slider2.png";














import "bootstrap/dist/css/bootstrap.min.css";



import TopNavbar from "../TopNavbar";


const NavbarSlider = () => {
  const navigate = useNavigate();




 
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };




  return (
    <>
      <div className="home200">
        <div className="home1">
          <Slider {...settings}>
            <div className="car1">
              <img src={img1} />
            </div>
            <div className="car1">
              <img src={img2} />
            </div>
            <div className="car1">
              <img src={img3} />
            </div>
            <div className="car1">
              <img src={img4} />
            </div>
          </Slider>
          <div className="home2">
            <div className="home100">
              <i class="fa-solid fa-bars"></i>
            </div>
            <TopNavbar color="#1A3B5A" />

         
            <div className="home5">
              <h2>Let's start your career journey.</h2>
            </div>
            <div className="home4">

              <input
                type="text"
                placeholder="Search for colleges, exams, Q & A, Articles..."
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="home6">
              <button onClick={() => navigate("/screen2")}>
                Explore College & University
              </button>
            </div>
          </div>
        </div>
      

      <div className="newhome1">
        <h2>Admissions Open for O P Jindal Global University. Click to Apply Now!</h2>
      </div>
      </div>

    </>
  );
};

export default NavbarSlider;
