import React, { useState } from "react";
import './MockTest.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer1 from "../Footer1";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSlider from "../uppside/Navbar&skider";
import { FiCode } from "react-icons/fi";

const MockTest1 = () => {
    const navigate = useNavigate();
    const [start, setStart] = useState(false);
    const handleClick = () => {
        setStart(prev => !prev);
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
                <div className="tst2">
                    <h4>Select Your Exam</h4>
                    <select>
                        <option value="english">B.tech</option>
                        <option value="hindi">B.tech</option>
                        <option value="germany">B.tech</option>
                    </select>
                </div>
            </div>

            <div className="testtt1">
                B.Tech Program Scholarship Test
            </div>
            <div className="tst4">
                <div className="tst5">
                    <div className="tst6">
                        <p>This Could prove to be start of something BIG</p>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="test80">
                            <div className="tst8">
                                <button>Next</button>
                            </div>
                            <div className="test81">
                                <p>Page 1 to 10</p>
                                <FiCode  color="#1A3B5A" size={25}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="tst3">
                <button>Restart Now</button>
            </div>
            <div className="loan2131243">
            </div>
            <Footer1 />

        </>
    );
};

export default MockTest1;
