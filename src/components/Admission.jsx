import React, { useState } from "react";
import TopPart from "./TopPart";
import Footer from "./Footer";


import img from "../Images/c50.png";
import img2 from "../Images/c51.png";
import img3 from "../Images/c52.png";
import img4 from "../Images/c53.png";
import img5 from "../Images/c54.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import img6 from "../Images/c55.png";
import cap from '../Images/cap.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import RightSide from "./CollegeInfo/RightSide";
import Footer1 from "./Footer1";

const Admission = () => {
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
        <div className="ingooo20">
            <h5>Highlights for Jamia Miliya Isalamia University,</h5>
            <div className="clg23">
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img} alt="" />
                  <p>Type of Institution</p>
                </div>
                <p>Private</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img2} alt="" />
                  <p>Course Offered</p>
                </div>
                <p>BCA, MCA, BSc, MSc, BA, MA, BBA, BCom, MCom, BFA, MFA, MSW, MPhil, PG Diploma.</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img5} alt="" />
                  <p>Application Mode</p>
                </div>
                <p>Online/Offline</p>
              </div>
            </div>

            <div className="ingooo21">
              <h5>Jamia Miliya Isalamia University, Coimbatore BCA Admission 2023</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BCA Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BCA Selection Process</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>MCA Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>MCA Selection Process</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>MCA Selection Process</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BSc Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BSc Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BSc Selection Process</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>MSc Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>MSc Selection Process</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
            <div className="ingooo21">
              <h5>BA Eligibility Criteria</h5>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
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
  );
};

export default Admission;
