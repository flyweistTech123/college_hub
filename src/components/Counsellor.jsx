import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c99.png";
import img2 from "../Images/c100.png";
import TopNavbar from "./TopNavbar";

const Counsellor = () => {
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <div className="cart90">
        <TopNavbar />
      </div>
      <div className="home100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <div className="profile1">
        <div className="profile2">
          <Sidebar2 />
        </div>
        <div className="profile3">
          <div className="counsellor1">
            <img src={img2} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
          <div className="counsellor1">
            <img src={img} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
          <div className="counsellor1">
            <img src={img2} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
          <div className="counsellor1">
            <img src={img2} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
          <div className="counsellor1">
            <img src={img2} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
          <div className="counsellor1">
            <img src={img} alt="" />

            <div className="counsellor5">
              <div className="counsellor2">
                <h6>Akash Sharma</h6>
                <p>Expert Counsellor at CollegeHub</p>
              </div>
              <div className="counsellor6">
                <button>Rate Counsellor</button>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
          <Sidebar2 />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Counsellor;
