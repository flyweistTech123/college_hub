import React, { useState } from "react";
import './Loan.css'
import ReactApexChart from 'react-apexcharts';
import MobileLoanNavbar from "../MobileLoanNavabr";
import { useNavigate } from "react-router-dom";
import img2 from "../../Images/c64.png";
import img3 from "../../Images/c65.png";
import img4 from "../../Images/c66.png";
import img5 from "../../Images/c67.png";
import img6 from "../../Images/c68.png";
import img7 from "../../Images/c69.png";
import img8 from "../../Images/c70.png";
import img9 from "../../Images/c71.png";
import img10 from "../../Images/c72.png";
import img11 from "../../Images/c73.png";
import img12 from "../../Images/c74.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import TopNavbar from "../TopNavbar";
import TopPart3 from "../TopPart3";
import img111 from "../../Images/c33.png";
import img21 from "../../Images/c26.png";
import img31 from "../../Images/slider1.png";
import img41 from "../../Images/slider2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer1 from '../Footer1'
import ApplyNowModal from "../Modals/Login/Apply";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Loan = () => {

  const [show1, setShow1] = useState(false);

  const modalclose = () => {
    setShow1(false);
    setShow2(true);
  };

  function EligibilityCheck(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <div className="loan41">
              <div className="loan42">
                <label htmlFor="">Select the location you want to study.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Within India</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Within India</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Enter your Gross family annual Income.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Up to ₹ 2.5 Lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 2.51 Lacs to 4 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 4.01 Lacs to 6 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 6.01 Lacs to 8 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">More Than ₹8 lacs</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Select your social category that help us lead a better scheme for you.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">General</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">OBC</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">SC / ST</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Miniority</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Select the course you wish to attend.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Graduate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Post - Graduate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Doctorate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Others</label>
                  </div>
                </div>
              </div>
              <div className="loan47">
                <div className="loan42">
                  <label htmlFor="">Type in the length of your course  <FaCircleQuestion color="#797979" /></label>
                  <div className="loan45">
                    <input type="text" />
                    <div className="loan46">
                      <IoIosArrowDown color="#000000" size={20} />
                      <p>Years</p>
                    </div>
                  </div>
                </div>
                <div className="loan42">
                  <label htmlFor="">Name of the Course your are planning for</label>
                  <div className="loan45">
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Choose the type of course you are interested in pursuing.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Full Time</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Part time</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Distance Learning</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Others</label>
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Enter your course fees  <FaCircleQuestion color="#797979" /></label>
                <div className="loan45">
                  <input type="text" />
                  <div className="loan46">
                    {/* <IoIosArrowDown color="#000000" size={20} /> */}
                    <p>INR</p>
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Enter the amount you intend to invest by yourself  <FaCircleQuestion color="#797979" /></label>
                <div className="loan45">
                  <input type="text" />
                  <div className="loan46">
                    <p>INR</p>
                  </div>
                </div>
              </div>


              <div className="loan48">
                <p>Required Loan Amount : 3,00,000</p>
              </div>

              <div className="loan49">
                <button onClick={modalclose}>Calculate Eligibility</button>
              </div>

            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }


  const [show2, setShow2] = useState(false);

  function Calculatoreligibility(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <div className="loan51">
              <div className="loan52">
                <h5>HELP OUR EXPERTS TO HELP YOU GET EDUCATION LOAN</h5>
                <p>ENTER YOUR DETAILS</p>
              </div>
              <div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">YOUR FULL NAME</label>
                    <input type="text" />
                  </div>
                  <div className="loan54">
                    <label htmlFor="">YOUR EMAIL ID</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">YOUR MOBILE NUMBER</label>
                    <input type="text" />
                  </div>
                  <div className="loan54">
                    <label htmlFor="">SELECT A COURSE</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                </div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">SELECT YOUR CITY</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                  <div className="loan54">
                    <label htmlFor="">SELECT A BANK</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                </div>
              </div>


              <div className="loan56">
                <p>Any loan availed so far</p>
                <div className="loan57">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>

              <div className="loan58">
                <h6>We may take upto 24 Hrs to get back <span>if delayed reach us at : 885203201250</span></h6>
              </div>

              <div className="loan60">
                <button onClick={()=>setShow2(false)}>Submit</button>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
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

  const [chartData, setChartData] = useState({
    series: [85, 15,],
    options: {
      chart: {
        width: 354.5,
        type: 'pie',
      },
      labels: ['Total Interest', 'Principal loan amount'],
      colors: ['#D9D9D9', '#349DCF'], // Custom colors
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [faltu, setFaltu] = useState(null);

  const handleFaltu = (index) => {
    setFaltu(index);
  };



  const [loanAmount, setLoanAmount] = useState(10000);
  const priceGap = 1000;

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);

    if (value >= 2500 && value <= 10000) {
      setLoanAmount(value);
    }
  };
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
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


          <div className="newhome1">
            <h2>Admissions Open for O P Jindal Global University. Click to Apply Now!</h2>
          </div>
        </div>

        <div className="loan31">
          <div className="loan30">
            <img src={img2} alt="" />
            <h5>Calculate <span>EMI</span></h5>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
          <div className="loan30">
            <img src={img3} alt="" />
            <h5><span>KYE:</span> know your Eligibilty</h5>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
          </div>
        </div>
        <div className="topki">
          <TopPart3 />
        </div>

      </div>
      <div className="loan10">
        <div className="loan11">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img4} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
      <div className="loan35">
        {["All Banks", "Govt Banks", "Private Banks", "Cooperative", "NBFCs"].map((bank, index) => (
          <div
            key={index}
            className={faltu === index ? "loan36" : "loan37"}
            onClick={() => handleFaltu(index)}
          >
            {bank}
          </div>
        ))}
      </div>
      <div className="loan12">
        <div className="loan13">
          <p>Bank Name</p>
          <p>Interest Rate</p>
          <p>Max Type</p>
          <p>Loan Type</p>
          <p>Scheme</p>
          <p>Compare</p>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100 % Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs
              10.55%
              above INR 7.50 Lacs
              10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3" onClick={() => setShow1(true)}>Eligibility Check</button>
              <button className="ext2" onClick={() => setModalShow(true)}>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3" onClick={() => setModalShow(true)}>Apply Now</button>
              <button className="ext2" onClick={() => setShow1(true)}>Eligibility Check</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3" onClick={() => setModalShow(true)}>Apply Now</button>
              <button className="ext2" onClick={() => setShow1(true)}>Eligibility Check</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3" onClick={() => setModalShow(true)}>Apply Now</button>
              <button className="ext2" onClick={() => setShow1(true)}>Eligibility Check</button>
            </div>
          </div>
        </div>
      </div>
      <div className="loan19">
        <p>Show More</p>
      </div>
      <div className="loan20">
        <h5>loan calculator</h5>
        <p>Education loans are crafted to provide financial support to students with aspirations of pursuing higher education in esteemed colleges within India.</p>
      </div>
      <div className="loan213124">
      </div>

      <div className="loan24">
        <div className="loan22">
          <div>
            <div className="loan23">
              <label htmlFor="">Fill the Loan Amount</label>
              <input type="text" placeholder="10,000₹" value={loanAmount}
                onChange={handleInputChange} />
            </div>
            <div className="rangebox">
              <div className="slider">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input type="range" className="range-min"
                  min="2500"
                  max="10000"
                  step={priceGap}
                  value={loanAmount}
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className="values">
              <span>10,000</span>
              <span>10L</span>
              <span>20L</span>
              <span>30L</span>
              <span>40L</span>
              <span>50L</span>
              <span>60L</span>
              <span>70L</span>
              <span>80L</span>
              <span>90L</span>
              <span>1CR</span>
            </div>
          </div>
          <div>
            <div className="loan23">
              <label htmlFor="">Fill the Interest Rate</label>
              <input type="text" placeholder="10,000₹" value={loanAmount}
                onChange={handleInputChange} />
            </div>
            <div className="rangebox">
              <div className="slider">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input type="range" className="range-min"
                  min="2500"
                  max="10000"
                  step={priceGap}
                  value={loanAmount}
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className="values">
              <span>10,000</span>
              <span>10L</span>
              <span>20L</span>
              <span>30L</span>
              <span>40L</span>
              <span>50L</span>
              <span>60L</span>
              <span>70L</span>
              <span>80L</span>
              <span>90L</span>
              <span>1CR</span>
            </div>
          </div>
          <div>
            <div className="loan23">
              <label htmlFor="">Fill the Loan Rate</label>
              <input type="text" placeholder="10,000₹" value={loanAmount}
                onChange={handleInputChange} />
            </div>
            <div className="rangebox">
              <div className="slider">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input type="range" className="range-min"
                  min="2500"
                  max="10000"
                  step={priceGap}
                  value={loanAmount}
                  onChange={handleInputChange} />
              </div>
            </div>
            <div className="values">
              <span>10,000</span>
              <span>10L</span>
              <span>20L</span>
              <span>30L</span>
              <span>40L</span>
              <span>50L</span>
              <span>60L</span>
              <span>70L</span>
              <span>80L</span>
              <span>90L</span>
              <span>1CR</span>
            </div>
          </div>
        </div>

        <div className="loan27">
          <h6>Emi Payable</h6>
          <p>188 Month</p>
          <h6>Total Interest</h6>
          <p>1,280</p>
          <h6>Payable Amount</h6>
          <p>11,280</p>

          <div className="loan28">
            <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
          </div>
        </div>
      </div>
      <div className="loan213124">
      </div>
      <EligibilityCheck show={show1} onHide={() => setShow1(false)} />
      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />
      <Calculatoreligibility show={show2} onHide={() => setShow2(false)} />
      <Footer1 />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Loan;
