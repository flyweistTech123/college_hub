import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/c33.png";
import img2 from "../../Images/c26.png";
import img3 from "../../Images/slider1.png";
import img4 from "../../Images/slider2.png";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from '../../Images/c1.png'

import Records from "../data.json";












import "bootstrap/dist/css/bootstrap.min.css";



import TopNavbar from "../TopNavbar";


const NavbarSlider = () => {
  const navigate = useNavigate();

  const moreMenu = [
    {
      name: "Institute",
      link: "/screen2",
    },
    {
      name: "Q&A  ",
    },
    {
      name: "Test and Services  ",
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



  const [showt, setShowt] = useState(false);

  const handleClose = () => setShowt(false);
  const handleShow = () => setShowt(true);

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


 
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };




  return (
    <>
      <div className="home200">
        <div className="home1">
          <Slider {...settings}>
            <div className="car1">
              <img src={img1} />
            </div>
            <div className="car1">
              <img src={img2} />
            </div>
            <div className="car1">
              <img src={img3} />
            </div>
            <div className="car1">
              <img src={img4} />
            </div>
          </Slider>
          <div className="home2">
            <div className="home100">
              <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <TopNavbar color="#1A3B5A" />

            
            {showNavbar ? <NavMenu2 /> : " "}
            {showNavbar2 ? <NavMenu />: ""}
            <div className="home5">
              <h2>Let's start your career journey.</h2>
            </div>
            <div className="home4">

              <input
                type="text"
                placeholder="Search for colleges, exams, Q & A, Articles..."
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="home6">
              <button onClick={() => navigate("/screen2")}>
                Explore College & University
              </button>
            </div>
          </div>
        </div>
      

      <div className="newhome1">
        <h2>Admissions Open for O P Jindal Global University. Click to Apply Now!</h2>
      </div>
      </div>
      <Offcanvas show={showt} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="home101">
            <img src={logo} alt="" onClick={() => navigate('/')} />
            <>
              <div className="drop100">
                {Records?.map((ele, i) =>
                  ele?.item ? (
                    <Dropdown key={i}>
                      <Dropdown.Toggle variant="none" id="dropdown-basic">
                        {ele?.name}
                      </Dropdown.Toggle>
                      <div className="drop1">
                        <Dropdown.Menu style={{ display: "flex" }}>
                          {ele?.item?.map((element) => (
                            <Dropdown.Item>
                              <div className="drop2">
                                {element?.name}
                                {element?.subItems?.map((ele, i) => (
                                  <>
                                    <p>{ele}</p>
                                  </>
                                ))}
                              </div>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                  ) : (
                    <p onClick={() => navigate(ele?.link)} className="dropmobile">{ele?.name}</p>
                  )
                )}
              </div>
            </>
            <p>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {moreMenu?.map((ele, i) => (
                    <Dropdown.Item href={ele?.link}>{ele?.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </p>
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

export default NavbarSlider;
