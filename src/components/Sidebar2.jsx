import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { LuCompass } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdFeed } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoRibbonOutline } from "react-icons/io5";
import { AiTwotoneBank } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";


import img from "../Images/c93.png";

const Sidebar2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
      <div className="profile7">
        <div className="profile8">
          <img src={img} alt="" />
          <h6>Profile</h6>
          <button>Edit</button>
        </div>
        <div className="profile9" >
          <div className={location.pathname === "/profile"?"profile11" : "profile10"} onClick={()=>navigate("/profile")}>
            <i className="iicon123"><MdOutlinePersonOutline /></i>
            <p>Profile</p>
          </div>
          <div  className={location.pathname === "/test-perform"?"profile11" : "profile10"}
            onClick={()=>navigate("/test-perform")}
          >
            <i className="iicon123"><GrDocumentPerformance /></i>
            <p>My Test Performances</p>
          </div>
          <div  className={location.pathname === "/college"?"profile11" : "profile10"}
            onClick={()=>navigate("/college")}
          >
            <i className="iicon123"><IoSchoolOutline /></i>
            <p>College</p>
          </div>
          <div  className={location.pathname === "/career"?"profile11" : "profile10"}
            onClick={()=>navigate("/career")}
          >
            <i className="iicon123"><LuCompass /></i>
            <p>Career Compass</p>
          </div>
          <div className={location.pathname === "/document"?"profile11" : "profile10"} onClick={()=>navigate("/document")}>
            <i  className="iicon123"><IoDocumentTextOutline /></i>
            <p>Documents</p>
          </div>
          <div className={location.pathname === "/feed"?"profile11" : "profile10"}
            onClick={()=>navigate("/feed")}
          >
            <i className="iicon123"><MdFeed /></i>
            <p>Feeds</p>
          </div>
          <div className={location.pathname === "/payment"?"profile11" : "profile10"}
            onClick={()=>navigate("/payment")}
          >
            <i className="iicon123"><MdOutlinePayment /></i>
            <p>Payment</p>
          </div>
          <div className={location.pathname === "/rewards" ? "profile11" : "profile10"}
            onClick={()=>navigate("/rewards")}
          >
            <i className="iicon123"><IoRibbonOutline /></i>
            <p>Rewards</p>
          </div>
          <div className={location.pathname === "/insurance"?"profile11" : "profile10"}
            onClick={()=>navigate("/insurance")}
          >
            <i className="iicon123"><AiTwotoneBank /></i>
            <p>Insurance</p>
          </div>
          <div className={location.pathname === "/counsellor"?"profile11" : "profile10"}
            onClick={()=>navigate("/counsellor")}
          >
            <i class="fa-solid fa-people-arrows"></i>
            <p>Counsellor</p>
          </div>
          <div className={location.pathname === "/setting" ? "profile11" : "profile10"}
            onClick={()=>navigate("/setting")}
          >
            <i className="iicon123"><IoSettingsOutline /></i>
            <p>Account Setting</p>
          </div>
          <div className={location.pathname === "/refer&earn" ? "profile11" : "profile10"}
            onClick={()=>navigate("/refer&earn")}
          >
            <i className="iicon123"><MdOutlineAttachMoney /></i>
            <p>Refer &Earn</p>
          </div>
          <div className={location.pathname === "/" ? "profile11" : "profile10"}
            onClick={()=>navigate("/")}
          >
            <i className="iicon123"><IoIosLogOut /></i>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
