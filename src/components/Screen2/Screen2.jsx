import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Screen2.css'
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import img from '../../Images/cardsimg.png'
import Sidebar from "../Sidebar";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { IoFilterOutline } from "react-icons/io5";

import clgimg from '../../Images/homclg.png'
import scholar from '../../Images/schrolarship12.png'



const Screen2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tests')
  }

  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFaltu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

      <Navbar />

      <div className="now1">
        <div className="sidefilt" >
          <Sidebar />
        </div>


        <div className="sidefilt1">
          <div className="now4">
            <div className="filt50">
              <h1>List of Top Colleges In India based on 2023 Ranking</h1>
              <button> <IoFilterOutline /> Popularity <IoIosArrowDown /></button>
            </div>


            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>
            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>
            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>

            <div className="filt36">

            </div>

            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>

            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>
            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>
            <div className="filt36">

            </div>
            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>

            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                </div>
                <div className="filt30">
                  <p>Asia Pacific Institute of Management...</p>
                  <p><IoLocation /> Kochi, Kerala | MCI Accredited</p>
                </div>



                <div className="filt37">
                  <div className="filt34">
                    <ul>
                      <li>
                        MBBS
                      </li>
                      <li>
                        M.Ch
                      </li>
                    </ul>
                  </div>
                  <div className="filt34">
                    <ul>
                      <li>
                        Admission Open
                      </li>
                      <li>
                        Course Fee
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="filt35">
                  <div className="filt39">
                    <button>Apply Now</button>
                    <button>Brochure</button>
                  </div>
                  <div className="filt38">
                    <button>Expert Talk</button>
                    <button>Compare</button>
                  </div>
                  <button className="filt25btn">Add to common Application Form</button>

                </div>

              </div>
            </div>

            <div className="filt33">
              <p>Load More...</p>
            </div>

            <div className="filt45">
              <img src={clgimg} alt="" />
              <div className="filt46">
                <h2>Upto 100% Scholarships Available</h2>
                <button>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Screen2;
