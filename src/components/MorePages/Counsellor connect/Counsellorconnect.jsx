import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopPart3 from "../../TopPart3";
import MyVerticallyCenteredModal from "../../CouncilModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "../../MobileLoanNavabr";
import LoginModal from "../../LoginModal";
import common2 from '../../../Images/common1.png'
import Sidebar4 from "../../Sidebar4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer1 from "../../Footer1";
import './Counsellorconnect.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img111 from "../../../Images/c33.png";
import img21 from "../../../Images/c26.png";
import img31 from "../../../Images/slider1.png";
import img41 from "../../../Images/slider2.png";
import img2 from "../../../Images/phone-number 1.png";
import phn from '../../../Images/call.png';
import msg from '../../../Images/whatsapp.png';
import email from '../../../Images/email.png'
import cousllor11 from '../../../Images/counsloer.png'
import cousllor12 from '../../../Images/counsloer1.png'
import cousllor13 from '../../../Images/counsloer2.png'
import cousllor14 from '../../../Images/counsloer3.png'
import TopNavbar from "../../TopNavbar";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";


import msgimg from '../../../Images/msg2.0.png'
// import Counselling from "../../Modals/Login/Counselling";



const StarRating = ({ rating }) => {

  const [modalShow, setModalShow] = useState(false);


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


const Counsellorconnect = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
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
    )
  }

  const handleClick = () => {
    setShowNavbar(prev => !prev);
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoArrowForwardCircleOutline color="#0185C3" size={30} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}
      >
        <IoArrowBackCircleOutline color="#0185C3" size={30} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <>
      {/* <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      /> */}
      <LoginModal show={show3} onHide={() => setShow3(false)} />
      <div className="app1">
        <div className="home200">
          <div className="home1">
            <Slider {...settings}>
              <div className="car1">
                <img src={img111} />
              </div>
              <div className="car1">
                <img src={img21} />
              </div>
              <div className="car1">
                <img src={img31} />
              </div>
              <div className="car1">
                <img src={img41} />
              </div>
            </Slider>
            <div className="home2">
              <div className="home100">
                <i class="fa-solid fa-bars"></i>
              </div>
              <TopNavbar color="#1A3B5A" />
            </div>
          </div>
        </div>


        <div className="cousellor_connecting111">
          <div className="cousellor_connecting">
            <div className="cousellor_connecting3">
              <h1>Connect with the leading counselors in India.</h1>
              <p>Our Counsellor are available throughout for
                Chat & support at each step of your application Process</p>
            </div>
            <div className="cousellor_connecting1">
              <img src={img2} alt="" />
              <h5>+2 minutes</h5>
              <p>to speak to
                your counsellor</p>

              <div className="cousellor_connecting2">
                <img src={phn} alt="" />
                <img src={msg} alt="" />
                <img src={email} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <TopPart3 />
        </div>

      </div>
      <div className="cousellor_connecting4">
        <div className="cousellor_connecting5">
          <p>Scholarships
            Assistance</p>
        </div>
        <div className="cousellor_connecting5">
          <p>Education Loan Assistance</p>
        </div>
        <div className="cousellor_connecting5">
          <p>One Application Assistance</p>
        </div>
        <div className="cousellor_connecting5">
          <p>Placement Assistance</p>
        </div>
        <div className="cousellor_connecting5">
          <p>Earn n Learn</p>
        </div>
        <div className="cousellor_connecting5">
          <p>Financial  Aid Assistance</p>
        </div>
      </div>

      <div className="cousellor_connecting12">
        <div className="screen2">
          <Sidebar4 />
        </div>

        <div className="cousellor_connecting1011">
          <div className="cousellor_connecting10">
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor11} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor12} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor13} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor14} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
          </div>
          <div className="cousellor_connecting11">

          </div>
          <div className="cousellor_connecting10">
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor11} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor12} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor13} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor14} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor11} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor12} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor13} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor14} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor11} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor12} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor13} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor14} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor11} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor12} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor13} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
            <div className="cousellor_connecting6">
              <div className="cousellor_connecting7">
                <img src={cousllor14} alt="" />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="cousellor_connecting8">
                  <h6>Neha Sharma</h6>
                  <p>Counselling Finance</p>
                  <h5>6000+ Students | 7+ yrs exp</h5>
                </div>
              </div>
              <div className="cousellor_connecting9">
                <button onClick={() => setModalShow(true)}>Connect with Expert <img src={msgimg} alt="" /></button>
              </div>

            </div>
          </div>
          <div className="filt33">
            <p>Load More...</p>
          </div>
        </div>
      </div>


      <div className="cousellor_connecting13">
        <h2>Preferred by over 10,000 students from prominent schools & colleges in India. Our platform provides personalized recommendations for their higher education journey.</h2>
      </div>


      <div className="cousellor_connecting621">
      </div>


      {/* <Counselling show={modalShow}
        onHide={() => setModalShow(false)} /> */}

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

export default Counsellorconnect;
