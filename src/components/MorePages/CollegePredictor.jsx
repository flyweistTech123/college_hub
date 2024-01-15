import React, { useState } from "react";
import './CollegePredictor.css'
import TopPart3 from "../TopPart3";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSlider from "../uppside/Navbar&skider";
import Footer1 from "../Footer1";
import Modal from "react-bootstrap/Modal";



const Predictor = () => {

  const [show, setShow] = useState(false);

  function Result(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <div className="predictor6">
              <h6>Provide your information to receive the results of the college prediction.</h6>
              <div className="predictor7">
                <div className="predictor3">
                  <label htmlFor="">Your Entrance Exam</label>
                  <select>
                    <option value="english">Select Course</option>
                    <option value="hindi">Hindi</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>

                <div className="predictor3">
                  <label htmlFor="">Year of Exam</label>
                  <select>
                    <option value="english">General</option>
                    <option value="hindi">Hindi</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
              </div>
              <div className="predictor7">
                <div className="predictor3">
                  <label htmlFor="">Enter Your Rank / Score</label>
                  <input type="text" placeholder="Enter Rank" />
                </div>

                <div className="predictor3">
                  <label htmlFor="">Reservation Category</label>
                  <select>
                    <option value="english">General</option>
                    <option value="hindi">Hindi</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
              </div>
              <div className="predictor7">
                <div className="predictor3">
                  <label htmlFor="">Select State</label>
                  <select>
                    <option value="english">Select State</option>
                    <option value="hindi">Hindi</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>

                <div className="predictor3">
                  <label htmlFor="">Select Course</label>
                  <select>
                    <option value="english">MBBS</option>
                    <option value="hindi">Hindi</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="predictor8">
              <h6>Any college application so far</h6>
              <button>Yes</button>
              <button>No</button>
            </div>
            <div className="predictor9">
              <h6>We may take upto 24 Hrs to get back <span>if delayed reach us at : 885203201250</span></h6>
              <button>Submit</button>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <div>
        <NavbarSlider />
      </div>
      <div className="topki">
        <TopPart3 />
      </div>

      <div className="predictor1">
        <h1>
          College Hub College Predictor -  Your Path to Informed Choices
        </h1>
        <p>Discover Your Ideal College Fit with Our Advanced College Predictor</p>
      </div>

      <div className="predictor4">

      </div>
      <div className="predictor5">
        <div className="predictor2">
          <div className="predictor3">
            <label htmlFor="">Your Entrance Exam</label>
            <select>
              <option value="english">Select Course</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>

          <div className="predictor3">
            <label htmlFor="">Year of Exam</label>
            <select>
              <option value="english">General</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="predictor2">
          <div className="predictor3">
            <label htmlFor="">Enter Your Rank / Score</label>
            <input type="text" placeholder="Enter Rank" />
          </div>

          <div className="predictor3">
            <label htmlFor="">Reservation Category</label>
            <select>
              <option value="english">General</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="predictor2">
          <div className="predictor3">
            <label htmlFor="">Select State</label>
            <select>
              <option value="english">Select State</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>

          <div className="predictor3">
            <label htmlFor="">Select Course</label>
            <select>
              <option value="english">MBBS</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
      </div>

      <div className="tst3">
        <button onClick={() => setShow(true)}>Check Result</button>
      </div>

      <div className="predictor4">

      </div>
      <Footer1 />
      <Result show={show} onHide={() => setShow(false)} />


    </>
  );
};

export default Predictor;
