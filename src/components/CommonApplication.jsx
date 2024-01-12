import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TopPart3 from "./TopPart3";
import MyVerticallyCenteredModal from "./CouncilModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import LoginModal from "./LoginModal";
import TopNavbar from "./TopNavbar";
import common from '../Images/common.png'
import common2 from '../Images/common1.png'
import Sidebar4 from "./Sidebar4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import location from '../Images/loaction.png'
import { IoMdArrowDropright } from "react-icons/io";
import ShortList from "./Modals/ShortList/ShortList";
import NavbarSlider from "./uppside/Navbar&skider";
import Footer1 from "./Footer1";



const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          color={isFilled ? '#ffd700' : '#ccc'}
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};


const CommonApplication = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const[collegeselectModal, setCollegeSelect] = useState(false)



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
    )
  }

  const handleClick = () => {
    setShowNavbar(prev => !prev);
  }


  return (
    <>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <LoginModal show={show3} onHide={() => setShow3(false)} />
      <div>
        <NavbarSlider />
      </div>
      <div className="topki">
        <TopPart3 />
      </div>

      <ShortList show={modalShow}
        onHide={() => setModalShow(false)} />

      <div className="common1">
        <div className="screen2">
          <Sidebar4 />
        </div>

        <div>
          <div className="coommoom">
            <h4>Popular Colleges for common application</h4>
            <h6>College Hub offers you the convenience of applying to over 100 colleges through a single application.</h6>
            <div className="coommoom1">
              <button>View All</button>
            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="filt33">
            <p>Load More...</p>
          </div>
          <div className="coommoom3">
            <div className="coommoom">
              <h4>Popular Colleges for common application</h4>
              <h6>College Hub offers you the convenience of applying to over 100 colleges through a single application.</h6>
              <div className="coommoom1">
                <button>View All</button>
              </div>
            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)} >Short List</button>
              </div>

            </div>
          </div>
          <div className="filt33">
            <p>Load More...</p>
          </div>
          <div className="coommoom3">
            <div className="coommoom">
              <h4>Popular Colleges for common application</h4>
              <h6>College Hub offers you the convenience of applying to over 100 colleges through a single application.</h6>
              <div className="coommoom1">
                <button>View All</button>
              </div>
            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="common7">
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
            <div className="common2">
              <div className="common3">
                <img src={common2} alt="" />
                <div className="common4">
                  <h6>340 Courses</h6>
                  <p>₹5,000</p>
                </div>
              </div>
              <div className="common5">
                <h6>Parul University
                  Vadodra</h6>
              </div>
              <div className="common6">
                <button onClick={() => setCollegeSelect(true)}>Short List</button>
              </div>

            </div>
          </div>
          <div className="filt33">
            <p>Load More...</p>
          </div>
          <div className="loan21">
          </div>

        </div>
      </div>




      <ShortList show={collegeselectModal}
        onHide={() => setCollegeSelect(false)} />


      <Footer1 />
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CommonApplication;
