import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import Sidebar2 from "./Sidebar2";
import Offcanvas from "react-bootstrap/Offcanvas";
import TopNavbar from "./TopNavbar";
import { useNavigate } from "react-router-dom";

const ReferEarn = () => {
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const navigate = useNavigate()
    return (
        <>
            <div className="schro">
                <TopNavbar />
            </div>
            <div className="home100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <div className="profile1">
                <div className="profile2">
                    <Sidebar2 />
                </div>
                <div className="profile3">
                    <div className="profile4">
                        <div className="referearn234">
                            <h4>Basic Details</h4>
                            <h6 onClick={() => navigate('/referearnchart')}>View Referrals</h6>
                        </div>

                        <div className="profile5">
                            <input type="text" placeholder="Full Name" />
                            <input type="date" placeholder="DOB" />
                            <input type="text" placeholder="Social Category" />
                            <input type="text" placeholder="Gender" />
                            <input type="text" placeholder="Marital Status" />
                            <input type="text" placeholder="Physically Challenged" />
                        </div>
                    </div>
                    <div className="profile4">
                        <h4>Contact Details</h4>
                        <div className="profile5">
                            <input type="text" placeholder="Mobile Number" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="State" />
                        </div>
                    </div>
                    <div className="profile4">
                        <h4>Educational Details</h4>
                        <h6>Class X</h6>
                        <div className="profile5">
                            <input type="text" placeholder="Board" />
                            <input type="text" placeholder="School" />
                            <input type="text" placeholder="Passing Year" />
                            <input type="text" placeholder="Mark Type" />
                            <input type="text" placeholder="Percentage/ CGPA" />
                        </div>
                        <h6>Class XII</h6>
                        <div className="profile5">
                            <input type="text" placeholder="Board" />
                            <input type="text" placeholder="Passing Year" />
                            <input type="text" placeholder="Passing Year" />
                            <input type="text" placeholder="Stream" />
                            <input type="text" placeholder="Mark Type" />
                            <input type="text" placeholder="Percentage / CGPA" />
                        </div>
                        <h6>Graduation</h6>
                        <div className="profile5">
                            <input type="text" placeholder="College" />
                            <input type="text" placeholder="Passing Year" />
                            <input type="text" placeholder="Degree" />
                            <input type="text" placeholder="Mark Type" />
                            <input type="text" placeholder="Percentage / CGPA" />
                        </div>
                    </div>
                    <div className="profile4">
                        <h4>Preferences</h4>
                        <div className="profile5">
                            <input type="text" placeholder="Stream" />
                            <input type="text" placeholder="Level" />
                            <input type="text" placeholder="Specification" />
                            <input type="text" placeholder="Location" />
                            <input type="text" placeholder="College type" />
                            <input type="text" placeholder="Fee Range" />
                            <input type="text" placeholder="College" />
                            <input type="text" placeholder="No PreferencesInterested in studying abroad?" />
                            <input type="text" placeholder="Need Loan?" />
                        </div>
                    </div>


                    <div className="referearn239">
                        <button>Submit</button>
                    </div>
                </div>


            </div>
            <Footer />
            <Offcanvas show={show2} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileLoanNavbar />
                    <Sidebar2 />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ReferEarn;
