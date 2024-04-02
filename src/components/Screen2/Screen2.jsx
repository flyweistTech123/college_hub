import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Screen2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import { IoLocation } from "react-icons/io5";
import img from '../../Images/cardsimg.png'
import Sidebar from "../Sidebar";
import { IoIosArrowDown } from "react-icons/io";

import { IoFilterOutline } from "react-icons/io5";

import clgimg from '../../Images/homclg.png'
import Footer1 from "../Footer1";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "../MobileLoanNavabr"



const Screen2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Navbar />

      <div className="screen1">
      <div className="screen20" style={{marginTop:"10px", marginLeft:"10px"}}>
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="screen2">
          <Sidebar />
        </div>
        <div className="screen3">
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
      <Footer1 />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Screen2;
