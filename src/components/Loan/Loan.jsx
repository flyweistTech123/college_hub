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

const Loan = () => {

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
              <button className="ext3" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
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
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
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
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
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
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
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
      <div className="loan21">
      </div>

      <div className="loan24">
        <div className="loan22">
          <div>
          <div className="loan23">
            <label htmlFor="">Fill the Loan Amount</label>
            <input type="text" placeholder="10,000₹"  value={loanAmount}
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
            <input type="text" placeholder="10,000₹"  value={loanAmount}
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
            <input type="text" placeholder="10,000₹"  value={loanAmount}
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
      <div className="loan21">
      </div>
      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />
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
