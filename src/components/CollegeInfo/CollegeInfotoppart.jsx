import React, { useState } from 'react'
import { MdDownload } from "react-icons/md";
import img26 from "../../Images/Rectangle 71.png";
import img27 from '../../Images/Rectangle 4.png'
import img28 from '../../Images/clginfo.png'
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Broucher from '../Modals/Login/Broucher';
import ShortList from '../Modals/ShortList/ShortList';



export const CollegeInfotoppart = () => {
  const [modalShow, setModalShow] = useState(false);
  const [collegeselectModal, setCollegeSelect] = useState(false)
  const navigate = useNavigate();
  return (
    <>
      <div className="ingooo1">
        <Navbar />
        <div className="ingooo2">
          <img src={img26} />
          <img src={img27} alt="" />
        </div>
        <div className="ingooo4">
          <img src={img28} alt="" />
          <h2>Jamia Millia Islamia -[JMI]: Admission 2023 (open), Rankings,Courses, Cutoff, Placement,Scholarship</h2>
        </div>
      </div>

      <div className="ingooo5">
        <div className="ingooo7">
          <p>The National Institutional Ranking Framework (NIRF) has been accepted by the MoE and launched by Hono</p>
          <div className="ingooo8">
            <button onClick={() => setCollegeSelect(true)}>Shortlist For Common Application</button>
            <button onClick={() => setModalShow(true)}>Brochure <MdDownload /></button>
          </div>
        </div>
      </div>


      <Broucher show={modalShow}
        onHide={() => setModalShow(false)} />
      <ShortList show={collegeselectModal}
        onHide={() => setCollegeSelect(false)} />
    </>

  )
}


export default CollegeInfotoppart;