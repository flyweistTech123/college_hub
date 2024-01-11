import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c107.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png'


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import Footer1 from "./Footer1";
import RightSide from "./CollegeInfo/RightSide";


const CollegeReview = () => {
  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <CollegeInfotoppart />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
            </div>
            <div className="review3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
              <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec
                ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
            </div>
            <div className="review3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
              <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec
                ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
            </div>
            <div className="review3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
              <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec
                ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
            </div>
            <div className="review3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
              <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec
                ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
        <div className="clg1611">
          <RightSide />
        </div>
      </div>
      <div className="space">

      </div>
      <Footer1 />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CollegeReview;
