import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c108.png";
import img2 from "../Images/c109.png";
import img3 from "../Images/c110.png";
import img4 from "../Images/c111.png";
import img5 from "../Images/c112.png";
import img6 from "../Images/c113.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png'


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import RightSide from "./CollegeInfo/RightSide";
import Footer1 from "./Footer1";


const Infrastructure = () => {
  const [show, setShow] = useState(false);

  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <CollegeInfotoppart />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="infra1">
            <div className="infra2">
              <div className="infra3">
                <img src={img} alt="" />
                <p>Computer</p>
              </div>
              <div className="infra3">
                <img src={img2} alt="" />
                <p>Sports</p>
              </div>
              <div className="infra3">
                <img src={img3} alt="" />
                <p>Hospital</p>
              </div>
              <div className="infra3">
                <img src={img4} alt="" />
                <p>Library</p>
              </div>
              <div className="infra3">
                <img src={img5} alt="" />
                <p>GYM</p>
              </div>
              <div className="infra3">
                <img src={img6} alt="" />
                <p>Auditorium</p>
              </div>
            </div>
          </div>
            <div className="infra4">
                <h5>Library</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5> DigitalLibrary</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Network Facilities</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Cisco Networking Academy</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Hostels</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Sports Facilities</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Guest House</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Canteen</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Amenities Complex</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Banks & ATM </h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
        </div>
        <div className="clg1611">
        <RightSide/>
      </div>
      </div>
      <div className="space">

      </div>
      <Footer1 />
    </>
  );
};

export default Infrastructure;
