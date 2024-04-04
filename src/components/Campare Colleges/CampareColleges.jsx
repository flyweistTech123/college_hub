import React, { useState } from "react";
import TopPart from "../TopPart";
import img from "../../Images/c50.png";
import img2 from "../../Images/c51.png";
import img3 from "../../Images/c52.png";
import img4 from "../../Images/c53.png";
import img5 from "../../Images/c54.png";
import img6 from "../../Images/c55.png";
import img7 from "../../Images/c56.png";
import './CampareColleges.css'


import MobileLoanNavbar from "../MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CollegeInfotoppart } from "../CollegeInfo/CollegeInfotoppart";
import Footer1 from "../Footer1";





const CampareColleges = () => {
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


            <div className="camparecollege">
                <div className="camparecollege1">
                    <div className="camparecollege3">
                        <div className="camparecollege4">
                            <h1>Jamia Millia Islamia University Quick facts</h1>

                            <ul>
                                <li>JMI placement 2023 records the highest CTC of INR 25 LPA.</li>
                                <li>JMI Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by JMI.</li>
                                <li>UGC notifies AMU and JMI in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                <li>JMI and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                <li>Jamia Millia Islamia conducted Entrepreneurship Development Program.</li>
                                <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                <li>The University was recognised as a central university on December 26, 1988.</li>
                                <li>In 1962, Jamia Millia Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clg22">
                        <h5>Jamia Miliya Islamia, New Delhi Highlights</h5>
                        <div className="clg23">
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img} alt="" />
                                    <p>Institution Type</p>
                                </div>
                                <p>Private</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img2} alt="" />
                                    <p>Total Faculty</p>
                                </div>
                                <p>500</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img3} alt="" />
                                    <p>Year of Establishment</p>
                                </div>
                                <p>2003</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img4} alt="" />
                                    <p>Gender Accepted</p>
                                </div>
                                <p>Co-Ed</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img5} alt="" />
                                    <p>Student Enrollment</p>
                                </div>
                                <p>21306</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img6} alt="" />
                                    <p>Campus Area</p>
                                </div>
                                <p>1000 Acres</p>
                            </div>
                        </div>
                    </div>
                    <div className="clg221">
                        <h5>Jamia Miliya Islamia, New Delhi Ranking</h5>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Publisher</button>
                                <button>Ranking</button>
                                <button>Stream</button>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>Engineering</p>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>MBA</p>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>Pharmacy</p>
                            </div>
                        </div>
                        <div className="clg28">
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="clg222">
                        <h5>Jamia Miliya Islamia, New Delhi Course & Fees 2023</h5>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Course</button>
                                <button>Avg. Fees</button>
                                <button>Duration</button>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>MBA</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>M.Tech</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                        </div>
                        <div className="clg28">
                            <button>More Courses</button>
                        </div>
                    </div>
                </div>
                <div class="vertical-line"></div>

                <div className="camparecollege2">
                    <div className="camparecollege3">
                        <div className="camparecollege4">
                            <h1>Asia Pacific Institute of Management...</h1>

                            <ul>
                                <li>JMI placement 2023 records the highest CTC of INR 25 LPA.</li>
                                <li>JMI Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by JMI.</li>
                                <li>UGC notifies AMU and JMI in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                <li>JMI and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                <li>Jamia Millia Islamia conducted Entrepreneurship Development Program.</li>
                                <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                <li>The University was recognised as a central university on December 26, 1988.</li>
                                <li>In 1962, Jamia Millia Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clg22">
                        <h5>Jamia Miliya Islamia, New Delhi Highlights</h5>
                        <div className="clg23">
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img} alt="" />
                                    <p>Institution Type</p>
                                </div>
                                <p>Private</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img2} alt="" />
                                    <p>Total Faculty</p>
                                </div>
                                <p>500</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img3} alt="" />
                                    <p>Year of Establishment</p>
                                </div>
                                <p>2003</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img4} alt="" />
                                    <p>Gender Accepted</p>
                                </div>
                                <p>Co-Ed</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img5} alt="" />
                                    <p>Student Enrollment</p>
                                </div>
                                <p>21306</p>
                            </div>
                            <div className="clg24">
                                <div className="ingooo10">
                                    <img src={img6} alt="" />
                                    <p>Campus Area</p>
                                </div>
                                <p>1000 Acres</p>
                            </div>
                        </div>
                    </div>
                    <div className="clg221">
                        <h5>Jamia Miliya Islamia, New Delhi Ranking</h5>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Publisher</button>
                                <button>Ranking</button>
                                <button>Stream</button>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>Engineering</p>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>MBA</p>
                            </div>
                            <div className="clg26">
                                <div className="clg27img">
                                    <img src={img7} alt="" />
                                </div>
                                <p>19</p>
                                <p>Pharmacy</p>
                            </div>
                        </div>
                        <div className="clg28">
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="clg222">
                        <h5>Jamia Miliya Islamia, New Delhi Course & Fees 2023</h5>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Course</button>
                                <button>Avg. Fees</button>
                                <button>Duration</button>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>MBA</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>M.Tech</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                        </div>
                        <div className="clg28">
                            <button>More Courses</button>
                        </div>
                    </div>
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

export default CampareColleges