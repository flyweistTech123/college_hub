import React, { useState } from "react";
import TopPart from "./TopPart";
import Footer from "./Footer";


import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png'
import { IoIosArrowForward } from "react-icons/io";


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import { IoLocationSharp } from "react-icons/io5";
import RightSide from "./CollegeInfo/RightSide";
import Footer1 from "./Footer1";


const CutOff = () => {
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
          <div className="ingooo20">
            <h5>JMI Latest Update</h5>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementu
            </p>


            <div className="ingooo21"> 
              <h5>Table Of Content</h5>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            <div className="ingooo21">
              <h5>Jamia Miliya Islamia Cut off 2022</h5>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="ingooo22">
            <h5>Jamia Miliya Islamia Management Cut off 2022</h5>
            <div className="ingooo23">
              <div className="ingooo24">
                <button>Course</button>
                <button>Cut Off Percentile</button>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
              <div className="ingooo25">
                <p>Lorem Ipsum</p>
                <p>40</p>
              </div>
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

export default CutOff;
