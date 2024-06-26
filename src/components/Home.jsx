import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import img3 from "../Images/c1.png";
import img4 from "../Images/c4.png";
import img5 from "../Images/c5.png";
import img6 from "../Images/c6.png";
import img7 from "../Images/c7.png";
import img8 from "../Images/c8.png";
import img9 from "../Images/c9.png";
import img10 from "../Images/c10.png";
import img11 from "../Images/c11.png";
import img14 from "../Images/c14.png";
import img15 from "../Images/c15.png";
import img16 from "../Images/c16.png";
import img17 from "../Images/c17.png";
import img18 from "../Images/c18.png";
import img19 from "../Images/c19.png";
import img20 from "../Images/c20.png";
import img21 from "../Images/c21.png";
import img22 from "../Images/c22.png";
import clgimg from '../Images/homclg.png'


import { MdOutlineSort } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";









import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeTable from "./HomeTable";
import ApplyNowModal from "./Modals/Login/Apply";
import NavbarSlider from "./uppside/Navbar&skider";
import ShortList from "./Modals/ShortList/ShortList";
import Broucher from "./Modals/Login/Broucher";

const Home = () => {
  const navigate = useNavigate();
  const [showt, setShowt] = useState(false);

  const [faltu, setFaltu] = useState(true);

  const handleClose = () => setShowt(false);
  const handleShow = () => setShowt(true);

  const [slideShow, setSlideShow] = useState(4);
  const [slideShow2, setSlideShow2] = useState(8);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setSlideShow(1);
      setSlideShow2(3);
    } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
      setSlideShow(2);
      setSlideShow2(3);
    } else setSlideShow(4);
  });




  const moreMenu = [
    {
      name: "Institute",
      link: "/screen2",
    },
    {
      name: "Q&A  ",
    },
    {
      name: "Test and Services",
      link: "/test",
    },
    {
      name: "Practice Questions",
    },

    {
      name: "Loan",
      link: "/loan",
    },

    {
      name: "Reviews",
    },

    {
      name: "Counsellor Connect",
      link: "/council-connect",
    },
    {
      name: "Become a partner",
      link: "/become-partner",
    },
    {
      name: "One Stop Solution",
      link: "/one-stop",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];
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
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: window.innerWidth >= 800 ? <SampleNextArrow /> : null,
    prevArrow: window.innerWidth >= 800 ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow2,
    slidesToScroll: 1,
    autoplay: true,

  };

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: window.innerWidth >= 800 ? <SampleNextArrow /> : null,
    prevArrow: window.innerWidth >= 800 ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };




  const [showNavbar, setShowNavbar] = useState(false);
  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Exams</h3>
          <div className="menu2">
            <div className="menu3">
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

  const [showNavbar2, setShowNavbar2] = useState(false);
  function NavMenu2() {
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

  const handleClick2 = () => {
    setShowNavbar2((prev) => !prev);
  };

  const handleFaltu = () => {
    setFaltu((prev) => !prev);
  };


  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  const [collegeselectModal, setCollegeSelect] = useState(false)




  return (
    <>
      <div>
        <NavbarSlider />
      </div>
      {/* <div className="home100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div> */}

      {showNavbar ? <NavMenu2 /> : " "}
      {showNavbar2 ? <NavMenu /> : ""}
      <div className="maintomainhome">
        <div className="home7">
          <h2>Top Cities</h2>
          <div className="home8">
            <Slider {...settings4}>
              <div className="home9" onClick={() => navigate("/screen2")}>
                <img src={img4} alt="" />
                <p>Delhi</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img5} alt="" />
                <p>Mumbai</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")}>
                <img src={img6} alt="" />
                <p>Kolkata</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img7} alt="" />
                <p>Chennai</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img8} alt="" />
                <p>Agra</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img9} alt="" />
                <p>Jaipur</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img9} alt="" />
                <p>Jaipur</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img9} alt="" />
                <p>Jaipur</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img9} alt="" />
                <p>Jaipur</p>
              </div>
              <div className="home9" onClick={() => navigate("/screen2")} >
                <img src={img9} alt="" />
                <p>Jaipur</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="home10">
          <h2>Top Colleges Near Me</h2>
          <div className="home11">
            <Slider {...settings2}>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                {/* <hr className="home16" /> */}
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17" onClick={() => setModalShow1(true)}>
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17" onClick={() => navigate('/counsellorconnect')}>
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                {/* <hr className="home16" /> */}
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>
                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="home18">
          <h2>Explore your future</h2>
          <p>Select your college</p>
          <div className="home19">
            <div className={faltu ? "home20" : "home200"} onClick={handleFaltu}>
              Colleges
              <hr />
            </div>
            <div className={faltu ? "home200" : "home20"} onClick={handleFaltu}>
              Exams
              <hr />
            </div>
          </div>
          <div className="home21">
            <div className="home22" onClick={() => navigate("/screen2")}>
              <img className="impimg" src={img16} alt="" />
              <div className="home23">
                <h6>Management</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22" onClick={() => navigate("/screen2")}>
              <img className="impimg" src={img14} alt="" />
              <div className="home23">
                <h6>Engineering</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22" onClick={() => navigate("/screen2")}>
              <img className="impimg" src={img15} alt="" />
              <div className="home23">
                <h6>Law</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22" onClick={() => navigate("/screen2")}>
              <img className="impimg" src={img17} alt="" />
              <div className="home23">
                <h6>Science</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22" onClick={() => navigate("/screen2")}>
              <img className="impimg" src={img18} alt="" />
              <div className="home23">
                <h6>Commerce</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22">
              <img className="impimg" src={img19} alt="" />
              <div className="home23">
                <h6>Arts</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22">
              <img className="impimg" src={img20} alt="" />
              <div className="home23">
                <h6>Medical</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22">
              <img className="impimg" src={img21} alt="" />
              <div className="home23">
                <h6>Paramedical</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
            <div className="home22">
              <img className="impimg" src={img22} alt="" />
              <div className="home23">
                <h6>Pharmacy</h6>
                <p>461 colleges</p>
              </div>
              <img className="img23" src={img11} />
            </div>
          </div>
        </div>
        <div className="home10">
          <h2>Top Universities</h2>
          <div className="home11">
            <Slider {...settings2}>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                {/* <hr className="home16" /> */}
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                {/* <hr className="home16" /> */}
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>
                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
              <div className="home12">
                <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
                <div className="filt22">
                  <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                </div>
                <div className="home13">
                  <div className="home14">
                    <h4>Jamai milia islamia</h4>
                    <p>30,000 yearly</p>
                  </div>
                  <div className="home15">
                    <p>20.5k Reviews</p>
                  </div>
                </div>
                <div className="home17">
                  <p>View all courses and fees</p>
                  <img
                    src={img11}
                    alt=""
                    onClick={() => navigate("/college-info")}
                  />
                </div>

                <div className="home17">
                  <p>Download Broachers</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Compare</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home17">
                  <p>Speak to Expert</p>
                  <img src={img11} alt="" />
                </div>
                <div className="home177">
                  <button onClick={() => setCollegeSelect(true)}>Add to Common Application Form</button>
                  <button onClick={() => setModalShow(true)}>Apply Now</button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="home25">
          <h2>Top Featured Colleges</h2>
          <div className="home29">
            <button className="home27"><MdOutlineSort /> City Name <FaAngleDown /></button>
          </div>
          <div className="home26">

            <Slider {...settings3}>

              <div className="home29">
                <button className="home28">MBA/PGDM</button>
              </div>
              <div className="home29">
                <button className="home28">BE / B.Tech</button>
              </div>
              <div className="home29">
                <button className="home28">BBA / BBM</button>
              </div>
              <div className="home29">
                <button className="home28">BCA</button>
              </div>
              <div className="home29">
                <button className="home28">B.Pharm</button>
              </div>
              <div className="home29">
                <button className="home28">B.F.A</button>
              </div>
              <div className="home29">
                <button className="home28">M.F.A</button>
              </div>
              <div className="home29">
                <button className="home28">B.Design</button>
              </div>
              <div className="home29">
                <button className="home28">M.Design</button>
              </div>
            </Slider>
          </div>
        </div>
        <div className="home1212">
          <HomeTable />
        </div>

        <div className="newhome2">
          <img src={clgimg} alt="" />
          <div className="newhome3">
            <h1>Have Any Doubt?
              Connect With Us</h1>
            <button onClick={() => setModalShow(true)}>Connect Now</button>
          </div>
        </div>
      </div>





      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />

      <Broucher show={modalShow1}
        onHide={() => setModalShow1(false)} />

      <ShortList show={collegeselectModal}
        onHide={() => setCollegeSelect(false)} />

      <Footer />
      <Offcanvas show={showt} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="home101">
            <img src={img3} alt="" />
            <>

            </>

            <div className="login10">
              <i class="fa-solid fa-user"></i>
              <p>Login</p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
