import React, { useState } from "react";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png'


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import Footer1 from "./Footer1";
import RightSide from "./CollegeInfo/RightSide";


const Scholarship2 = () => {
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
                    <div className="clg62">
                        <div className="clg64">
                            <h6>B.Tech Scholarship</h6>
                            <ul>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
                        </div>
                        <div className="clg64">
                            <h6>B.Tech Scholarship</h6>
                            <ul>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
                        </div>
                        <div className="clg64">
                            <h6>M.Tech Scholarship</h6>
                            <ul>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clg1611">
                    <RightSide />
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
    )
}

export default Scholarship2;