import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Screen2 from "./components/Screen2/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Scholarship from "./components/Scholarship/Scholarship";
import CommonApplication from "./components/CommonApplication";
import CollegeInfo from "./components/CollegeInfo/CollegeInfo";
import CollegePlacement from "./components/CollegePlacement";
import CourseAndFee from "./components/CourseAndFee";
import Admission from "./components/Admission";
import Loan from "./components/Loan/Loan";
import Gallery from "./components/Gallery";
import Scholarship2 from "./components/Scholarship2";
import ReadMore from "./components/ReadMore";
import CouncilConnect from "./components/CounsellorConnect";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import BecomeSeller from "./components/BecomeSeller";
import OneStop from "./components/OneStop";
import Profile from "./components/Profile";
import TestPerform from "./components/TestPerform";
import College from "./components/College";
import Career from "./components/Career";
import Feed from "./components/Feed";
import Payment from "./components/Payment";
import Insurance from "./components/Insurance";
import Counsellor from "./components/Counsellor";
import Rewards from "./components/Rewards";
import Setting from "./components/Setting";
import CutOff from "./components/CutOff";
import PayNow from "./components/PayNow";
import Cart from "./components/Cart";
import CollegeReview from "./components/CollegeReview";
import Infrastructure from "./components/Infrastructure";
import Document from "./components/Document";
import Mumbai from "./components/Cities/Mumbai";
import Kolkata from "./components/Cities/Kolkata";
import Chennai from "./components/Cities/Chennai";
import Agra from "./components/Cities/Agra";
import Jaipur from "./components/Cities/Jaipur";
import ScholarshipTest from "./components/ScholarshipTest/ScholarshipTest";
import Hostel from "./components/Hostel/Hostel";
import MockTest from "./components/MorePages/MockTest";
import MockTest1 from "./components/MorePages/MockTest1";
import Predictor from "./components/MorePages/CollegePredictor";
import Review from "./components/MorePages/Review";
import PredictNow from "./components/MorePages/Predict_Now";
import Exam from "./components/Exam/Exam";
import Careers from "./components/Careers/Careers";
import EngineeringCareers from "./components/Careers/EngineeringCareers/Engineering";
import ElectricalEngineering from "./components/Careers/EngineeringCareers/Electrical_enginer";
import JEEMaintest from "./components/ScholarshipTest/JeeMaintest/JeeMaintest";
import Counsellorconnect from "./components/MorePages/Counsellor connect/Counsellorconnect";
import ReferEarn from "./components/Refer&Earn";
import ReferEarnChart from "./components/Refer&EarnChart";
import TermsCondition from "./components/Terms & Condition/Terms&Condition";
import CampareColleges from "./components/Campare Colleges/CampareColleges";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen2" element={<Screen2 />} />
          {/* <Route path="/delhi" element={<Screen3 />} /> */}
          {/* <Route path="/management" element={<Screen4 />} /> */}
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/common-applications" element={<CommonApplication />} />
          <Route path="/college-info" element={<CollegeInfo />} />
          <Route path="/college-placement" element={<CollegePlacement />} />
          <Route path="/course-fee" element={<CourseAndFee />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/scholarship2" element={<Scholarship2 />} />
          {/* <Route path="/read-more" element={<ReadMore />} /> */}
          <Route path="/council-connect" element={<CouncilConnect />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/test2" element={<Test2 />} />
          <Route path="/become-partner" element={<BecomeSeller />} />
          <Route path="/one-stop-solution" element={<OneStop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test-perform" element={<TestPerform />} />
          <Route path="/college" element={<College />} />
          <Route path="/career" element={<Career />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/counsellor" element={<Counsellor />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/cut-off" element={<CutOff />} />
          <Route path="/pay-now" element={<PayNow />} />
          <Route path="/college-review" element={<CollegeReview />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          {/* <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/kolkata" element={<Kolkata />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/agra" element={<Agra />} />
          <Route path="/jaipur" element={<Jaipur />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/document" element={<Document />} />
          <Route path="/scholarshiptest" element={<ScholarshipTest />} />
          <Route path="/hostels" element={<Hostel />} />
          <Route path="/mocktest" element={<MockTest />} />
          <Route path="/tests" element={<MockTest1 />} />
          <Route path="/college-predictor" element={<Predictor />} />
          <Route path="/predict_now" element={<PredictNow />} />
          <Route path="/review" element={<Review />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="/engineeringcareers" element={<EngineeringCareers />} />
          <Route path="/electricalengineering" element={<ElectricalEngineering />} />
          <Route path="/jeemaintestinstructions" element={<JEEMaintest />} /> */}
          <Route path="/counsellorconnect" element={<Counsellorconnect />} />
          <Route path="/refer&earn" element={<ReferEarn />} />
          <Route path="/referearnchart" element={<ReferEarnChart />} />
          <Route path="/termscondition" element={<TermsCondition />} />
          <Route path="/camparecolleges" element={<CampareColleges />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
