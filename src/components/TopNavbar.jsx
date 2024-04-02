import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import logo from '../Images/collegehublogo.png'
import MoreModal from "./Modals/MoreModal";
import login from '../Images/loginpage.png'
import google from '../Images/google.png'
import profileimg from '../Images/navprofile.png'

const TopNavbar = (props) => {

  const [activeLink, setActiveLink] = useState(null);

  const handleClick11 = (index) => {
    setActiveLink(index);
  };
  const handleClick12 = (index, route) => {
    handleClick11(index);
    navigate(route);
  };
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNavbar(false);
        setShowNavbar2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [isMoremodalOpen, setMoremodalOpen] = useState(false)

  const openMoremodal = () => {
    setMoremodalOpen(true);
  }

  const closeMoremodal = () => {
    setMoremodalOpen(false);
  }


  const [isRegistratationmodalOpen, setRegistratationmodalOpen] = useState(false)

  const openRegistratatiomodal = () => {
    setRegistratationmodalOpen(true);
  }

  const closeRegistratatiomodal = () => {
    setRegistratationmodalOpen(false);
  }


  // Retrieve the initial state from localStorage
  const initialShowProfile = localStorage.getItem('showProfile') === 'true';
  
  // Set up state with initial value
  const [showProfile, setShowProfile] = useState(initialShowProfile);

  // Update localStorage whenever showProfile changes
  useEffect(() => {
    localStorage.setItem('showProfile', showProfile);
  }, [showProfile]);


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
        <div className="menu1" >
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Jawahar lal Nehru</p>
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
  const moreMenu = [

    {
      name: "Counsellor connect",
      link: "/counsellorconnect",
    },

    {
      name: "Mock Test",
      link: "/mocktest",
    },
    {
      name: "College Predictor",
      link: '/college-predictor',
    },

    {
      name: "Review a College",
      link: '/review',
    },
    {
      name: "One stop solution",
      link: '/one-stop-solution',
    },


    {
      name: "Become a Partner",
      link: '/become-partner',
    },

  ];



  const [show, setShow] = useState(false);
  const handleclose = () => {

    setShow(false);
    setShow12(true)
  }

  function MyVerticallyCenteredModal(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="login3">
              <div className="login5">
                <img src={login} alt="" />
              </div>
              <div className="login4">
                <h6>REGISTRATATION DETAILS</h6>
                <div className="login81">
                  <div className="login7">
                    <input
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      placeholder="Stream"
                    />
                    <input
                      type="text"
                      placeholder="Sub-Stream"
                    />
                    <div className="login122">
                      <input type="checkbox" id="checkbox1" />
                      <label for="checkbox1">Looking or Distance</label>
                    </div>

                    <input
                      type="text"
                      placeholder="Given Any Entrance Exam"
                    />
                  </div>
                  <div class="dotted-line">
                    <span>Or</span>
                  </div>
                  <div className="login2">
                    <img src={google} alt="" />
                    <p>Google</p>
                  </div>
                </div>
                <div className="login9">
                  <button onClick={() => handleclose()}>Next</button>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  const handleotpclose = () => {

    setShow12(false)
    setotpshow(true)

  }

  const [show12, setShow12] = useState(false);

  function Login122(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="login3">
              <div className="login5">
                <img src={login} alt="" />
              </div>
              <div className="login41">
                <h6>LOGIN</h6>
                <div className="login8">
                  <div className="login6">
                    <p>+91</p>
                  </div>
                  <div className="login71">
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                <div className="login9">
                  <button onClick={() => handleotpclose()} >Request OTP</button>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  const [otpshow, setotpshow] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to the next input box if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  function Otp1(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="otp11">
              <div className="otp-container">
                <h2>Enter OTP</h2>
                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                      type="text"
                      id={`otp-input-${index}`}
                      key={index}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      maxLength="1"
                    />
                  ))}
                </div>
              </div>
              <div className="login9">
                <button  onClick={() => setShowProfile(true)}>Submit</button>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }



  const data = [
    "Top Universities", "Top Courses", "Top Exams"
  ]

  const data1 = [
    "Management", "Engineering", "Law", "Science", "Commerce", "Arts", "Paramedical", "Pharmacy"
  ]
  const items = [
    { name: "Scholarships", route: "/scholarships" },
    { name: "Loan", route: "/loan" },
    { name: "Common Application", route: "/common-applications" },
    { name: "Scholarship Test", route: "/scholarshiptest" },
  ];


  return (
    <>
      <div className="home3">
        <div className="newNav">
          <img
            src={logo}
            alt=""
            onClick={() => navigate("/")}
            className="logoimg"
          />
        </div>

        <div className="newNav2">
          <div className="drop3">
            {data.map((i, index1) => (
              <div ref={dropdownRef}>
                <p onClick={() => {
                  handleClick11(index1);
                  setShowNavbar(true);
                }}
                  className={activeLink === index1 ? 'active' : ''}
                  style={{ color: props.color }}> {i} </p>
              </div>
            ))}


            <div className="drop3">
              {items.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleClick12(index, item.route)}
                  className={activeLink === index ? 'active' : ''}
                  style={{ color: props.color }}
                >
                  {item.name}
                </p>
              ))}
            </div>
            <p style={{ color: props.color }} onClick={openMoremodal}>
              More
            </p>

            {isMoremodalOpen && (
              <MoreModal onClose={closeMoremodal}>
                <ul className="custom-Moremodal">
                  {moreMenu.map((ele, i) => (
                    <li key={i}>
                      <a href={ele?.link}>{ele?.name}</a>
                      <div className="moremodal12"></div>
                    </li>
                  ))}
                </ul>
              </MoreModal>
            )}


            {showProfile ? (
              <p style={{ color: props.color }}>
                <img src={profileimg} alt="jjjj"  onClick={()=>navigate('/profile')} />
              </p>
            ) : (
              <div>
                <button className="loginn" onClick={() => setShow(true)}>
                Login
                </button>
              </div>
            )}






          </div>

        </div>
      </div>
      {showNavbar ? <NavMenu2 /> : ""}
      {showNavbar2 ? <NavMenu /> : ""}
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <Login122 show={show12} onHide={() => setShow12(false)} />
      <Otp1 show={otpshow} onHide={() => setotpshow(false)} />
    </>
  );
};

export default TopNavbar;
