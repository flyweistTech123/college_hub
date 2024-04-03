import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from "../Images/c96.png";
import TopNavbar from "./TopNavbar";

const College = () => {
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  
  const [step, setStep] = useState(0);
  const incCnt = () => {
    setStep((prev) => prev + 1);
  };
  const decCnt = () => {
    setStep((prev) => prev - 1);
  };
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

          <div className="collegefaq">
            <div
              className={step === 0 ? "faq5" : "faq6"}
              onClick={() => setStep(0)}
            >
              <p>Recommendation</p>
            </div>
            <div
              className={step === 1 ? "faq5" : "faq6"}
              onClick={() => setStep(1)}
            >
              <p>Shortlists</p>
            </div>
            <div
              className={step === 2 ? "faq5" : "faq6"}
              onClick={() => setStep(2)}
            >
              <p>Applications</p>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD Ghatkopar
                Mumbai, Maharashtra</p>
              <hr />
              <div className="college4">
                <p>Why should you choose this college? Know more about the College.Checkout USPs</p>
                <div className="college5">
                  <button>Scheduel A Call</button>
                  <button>Move to Shortlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD Ghatkopar
                Mumbai, Maharashtra</p>
              <hr />
              <div className="college4">
                <p>Why should you choose this college? Know more about the College.Checkout USPs</p>
                <div className="college5">
                  <button>Scheduel A Call</button>
                  <button>Move to Shortlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD Ghatkopar
                Mumbai, Maharashtra</p>
              <hr />
              <div className="college4">
                <p>Why should you choose this college? Know more about the College.Checkout USPs</p>
                <div className="college5">
                  <button>Scheduel A Call</button>
                  <button>Move to Shortlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD Ghatkopar
                Mumbai, Maharashtra</p>
              <hr />
              <div className="college4">
                <p>Why should you choose this college? Know more about the College.Checkout USPs</p>
                <div className="college5">
                  <button>Scheduel A Call</button>
                  <button>Move to Shortlist</button>
                </div>
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

export default College;
