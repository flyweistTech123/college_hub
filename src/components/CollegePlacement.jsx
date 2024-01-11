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
import CollegeInfotoppart from "../components/CollegeInfo/CollegeInfotoppart";
import { IoLocationSharp } from "react-icons/io5";
import RightSide from "./CollegeInfo/RightSide";
import Footer1 from "./Footer1";

const CollegePlacement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [flag, setFlag] = useState(false)
  const getFlag = () => {
    setFlag(prev => !prev);
  }
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <CollegeInfotoppart />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="clg36">
            <h2>Jamia Miliya Islamia, Placement Cell  2023</h2>
            <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            <div className="placement-table">
              <table>
                <tbody>
                  <tr>
                    <td>Placement Percentage</td>
                    <td>94%</td>
                  </tr>
                  <tr>
                    <td>Total no of placements</td>
                    <td>925/1000</td>
                  </tr>
                  <tr>
                    <td>Total no of offers</td>
                    <td>96/100</td>
                  </tr>
                  <tr>
                    <td>Total No of Internships</td>
                    <td>478/525</td>
                  </tr>
                  <tr>
                    <td>Total no of students placed</td>
                    <td>230/250</td>
                  </tr>
                  <tr>
                    <td>Highest package offered</td>
                    <td>12.5 Lakhs per Annum</td>
                  </tr>
                  <tr>
                    <td>Average package offered</td>
                    <td>8.5 Lakhs per Annum</td>
                  </tr>
                  <tr>
                    <td>Recruiters</td>
                    <td>Amazon, Microsoft, Prestige, +19</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="clg38">
            <h3>Table Of Content</h3>
            <hr />
            <div className="clg39">
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="clg38">
            <h3>Jamia Millia Islamia, New Delhi Highlights</h3>
            <hr />
            <div className="clg39">
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="clg38">
            <h3>Jamia Miliya Islamia, Placement Process</h3>
            <hr />
            <div className="clg39">
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
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

export default CollegePlacement;
