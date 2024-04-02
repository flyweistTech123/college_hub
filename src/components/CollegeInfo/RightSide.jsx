import React, { useState } from "react";
import img8 from "../../Images/c57.png";
import img9 from "../../Images/c58.png";
import ApplyNowModal from "../Modals/Login/Apply";
import Placementreport from "../Modals/Login/Placementreport.jsx";







const RightSide = () => {

  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);


  return (
    <>
      <div className="clg16">
        <div className="clg30">
          <div className="clg31">
            <img src={img8} alt="" />
            <p>Are you Interested in this College ?</p>
          </div>
          <div className="clg32">
            <button className="clg8"onClick={() => setModalShow1(true)}>Placement Report</button>
            <button className="clg9" onClick={() => setModalShow(true)}>Apply Now</button>
          </div>
        </div>
        <div className="clg3011">
          <div className="clg33">
            <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Featured News</h6>
            <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent News</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35" style={{ paddingBottom: "20px" }}>
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
        </div>
        <div className="clg3011">
          <div className="clg33">
            <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Trending Articles</h6>
            <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent Articles</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35">
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
          <hr className="clg34" />
          <div className="clg35" style={{ paddingBottom: "20px" }}>
            <img src={img9} alt="" />
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
          </div>
        </div>


      </div>

      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />
      <Placementreport show={modalShow1}
        onHide={() => setModalShow1(false)} />
    </>
  );
};

export default RightSide;