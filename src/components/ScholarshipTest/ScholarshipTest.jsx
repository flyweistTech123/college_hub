import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer1 from "../Footer1";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSlider from "../uppside/Navbar&skider";

const ScholarshipTest = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/tests')
    }
    return (
        <>
            <div>
                <NavbarSlider />
            </div>
            <div className="topki">
                <TopPart3 />
            </div>
            <div className="tst1">
                <div className="tst2">
                    <h4>Select the language for the test </h4>
                    <select>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="germany">Germany</option>
                    </select>
                </div>
                <div className="tst221">
                    <h4>Select Your Exam</h4>
                    <select>
                        <option value="english">B.tech</option>
                        <option value="hindi">B.tech</option>
                        <option value="germany">B.tech</option>
                    </select>
                </div>
            </div>
            <div className="tst3">
                <button onClick={handleClick}>Start Now</button>
            </div>
            <div className="loan21">
            </div>
            <Footer1 />

        </>
    );
};

export default ScholarshipTest;
