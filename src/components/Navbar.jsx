import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./CouncilModal";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";



import img from "../Images/c1.png";
import CounsellingModal from "./Modals/Login/CounsellingModal";



const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  return (
    <>
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
            <button onClick={()=>setModalShow(true)}><FaRegQuestionCircle /> Need Counselling</button>
          </div>
        </div>
      </div>

      <CounsellingModal show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default Navbar;
