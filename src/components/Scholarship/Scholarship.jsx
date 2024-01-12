import React, { useState, useEffect } from "react";
import './Scholarship.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import img from '../../Images/clgschro.png'
import Sidebar3 from "../Sidebar3";
import { IoMdArrowDropright } from "react-icons/io";
import NavbarSlider from "../uppside/Navbar&skider";
import ApplyNowModal from "../Modals/Login/Apply";


const Scholarship = () => {
  const navigate = useNavigate();
  const [slideShow2, setSlideShow2] = useState(8);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setSlideShow2(3);
    } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
      setSlideShow2(3);
    } else setSlideShow2(8);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow2,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);


  const [modalShow, setModalShow] = useState(false);


  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Mumbai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Chennai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Bangalore</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <>
      <div>
        <NavbarSlider />
      </div>
      <div className="schro5">
        <div className="screen2">
          <Sidebar3 />
        </div>


        <div className="schro12">
          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>
          <div className="schro11">

          </div>
          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>

          <div className="schro13">
            <div className="schro14">
              <div className="schro15">Most Popular Links</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
            </div>
            <div className="schro17">
              <div className="schro18">Most Applied Colleges</div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>

            </div>
            <div className="schro21">
              <div className="schro22">Most Applied Scholarships</div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>

            </div>
          </div>
          <div className="schro11">
          </div>

          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Shree Ram College- Delhi Uni...</h6></div>
              <div className="schro9">
                <ul>
                  <li><p>International Student Eligible : <span>Yes</span></p></li>
                  <li><p>Amount : <span>Variable Amount</span></p></li>
                  <li><p>Type : <span>Full-Ride-Scholarship</span></p></li>
                  <li><p>Level Of Study  : <span>Bachelors</span></p></li>
                  <li><p>Number Of Scholorships : <span>40</span></p></li>
                </ul>
                <h5>Read more</h5>
              </div>
              
              <div className="schro10">
                <button onClick={() => setModalShow(true)} >Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>

        </div>



      </div>


      <div className="schro24">
      </div>

      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />
    
      <Footer />
    </>
  );
};

export default Scholarship;
