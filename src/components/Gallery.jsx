import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";
import img from "../Images/c79.png";
import img2 from "../Images/c80.png";
import img3 from "../Images/c81.png";
import img4 from "../Images/c82.png";
import img5 from "../Images/c83.png";
import img7 from "../Images/c56.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png';
import { IoIosArrowForward } from "react-icons/io";


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import { IoLocationSharp } from "react-icons/io5";
import Footer1 from "./Footer1";
import RightSide from "./CollegeInfo/RightSide";

const Gallery = () => {
  const [show, setShow] = useState(false);

  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }

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
          <div className="gal1">
            <h4>Infrastructure Image</h4>
            <div className="gal2">
              <div className="gal3">
                <img src={img} alt="" />
              </div>
              <div className="gal4">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="gal5">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="gal1">
            <h4>Upload Image</h4>
            <div className="gal2">
              <div className="gal3">
                <img src={img} alt="" />
              </div>
              <div className="gal4">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="gal5">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="gal1">
            <h4>Student Upload Image</h4>
            <div className="gal2">
              <div className="gal3">
                <img src={img} alt="" />
              </div>
              <div className="gal4">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="gal5">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="clg1611">
          <RightSide/>
        </div>
      </div>
      <div className="space">

      </div>
      <Footer1 />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Gallery;