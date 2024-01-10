import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./CouncilModal";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";



import img from "../Images/c1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <div className="nav1">
        <div className="nav2">
          <img src={img} alt="" onClick={() => navigate("/")} />
          <div className="search-container12">
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, Articles..."
              className="search-input1"
            />
            <div className="search-icon11">
              <FaSearch />
            </div>
          </div>

          <div className="navbtn">
            <button onClick={()=>setShow(true)}><FaRegQuestionCircle /> Need Counselling</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
