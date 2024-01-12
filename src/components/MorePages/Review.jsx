import React, { useState } from "react";
import './Review.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/review.png'
import NavbarSlider from "../uppside/Navbar&skider";
import Footer1 from "../Footer1";


const Review = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tests')
  }
  return (
    <>
      <div>
        <NavbarSlider />
      </div>

      <div className="review21">
        <h1>
          Unveiling Campus  Experiences
        </h1>
        <p>Dive into the Authentic Narratives of Campus Life, Academic Excellence, and Beyond.Peer Perspectives and Insights to Shape Your College Journey</p>
      </div>

      <div className="review22">
        <div className="review23">
          <div className="review24">
            <label htmlFor="">Select Your College / University</label>
            <select>
              <option value="english">Select Course</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="review23">
          <div className="review24">
            <label htmlFor="">Your Course</label>
            <select>
              <option value="english">Select Course</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="review23">
          <div className="review244">
            <label htmlFor="">Passing Year</label>
            <select>
              <option value="english">Select Year</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>

          <div className="review244">
            <label htmlFor="">Year of Entrollment</label>
            <select>
              <option value="english">Select Year</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="review23">
          <div className="review24">
            <label htmlFor="">Your Feedback</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>

        <div className="review23">
          <div className="review24">
            <label htmlFor="">Rate Your College</label>
            <div className="review28">
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
              <h5><i className="fa-solid fa-star"></i></h5>
            </div>

          </div>
        </div>

      </div>

      <div className="review30">
        <h3>Contact Info</h3>
      </div>

      <div className="review29">
        <div className="review23">
          <div className="review24">
            <label htmlFor="">Full Name</label>
            <input type="text" />
          </div>
          <div className="review24">
            <label htmlFor="">Contact Number</label>
            <input type="text" />
          </div>
        </div>
        <div className="review23">
          <div className="review24">
            <label htmlFor="">E Mail ID</label>
            <input type="text" />
          </div>
          <div className="review244">
            <label htmlFor="">College Roll Number</label>
            <select>
              <option value="english">General</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="review23">
          <div className="review244">
            <label htmlFor="">State</label>
            <select>
              <option value="english">Select State</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <div className="review244">
            <label htmlFor="">Select City</label>
            <select>
              <option value="english">General</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
      </div>
      <div className="review32">
        <input type="checkbox" id="checkbox1" />
        <label for="checkbox1">College Hub representatives may reach out for more information</label>
      </div>

      <div className="review33">
        <button>Submit</button>
      </div>

      <Footer1 />

    </>
  );
};

export default Review;
