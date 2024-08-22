import React from 'react'
import './navbar.css'
import comapny_logo from "../../assets/TestLogo.svg";
import dr_img from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import overview from "../../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import patient from "../../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import schedule from "../../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import message from "../../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import transactions from "../../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import setting from "../../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import more_setting from "../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

function Navbar() {
  return (
    <nav className="navbar main_navbar">
      <div className="navbar-logo">
        <img src={comapny_logo} alt="Company Logo" />
      </div>
      <div className="navbar-links">
        <a href="#about" className="menu-item">
          <span className="img_css">
            <img src={overview} />
          </span>
          Overview
        </a>
        <a href="#contact" className="menu-item">
          <span className="img_css">
            <img src={patient} />
          </span>
          Patients
        </a>
        <a href="#schedule" className="menu-item">
          <span className="img_css">
            <img src={schedule} />
          </span>
          Schedule
        </a>
        <a href="#message" className="menu-item">
          <span className="img_css">
            <img src={message} />
          </span>
          Message
        </a>
        <a href="#transactions" className="menu-item">
          <span className="img_css">
            <img src={transactions} />
          </span>
          Transactions
        </a>
      </div>
      <div className="navbar-logo">
        <img src={dr_img} alt="Company Logo" />
        <div className="dr_detail">
          <span>Dr. Jose Simmons</span>
          <p className="dr_designation">General Practitioner</p>
        </div>
        <div className="separator"></div>
        <div className="">
          <img src={setting} className="setting_img mr-2" />
          <img src={more_setting} className="more_setting" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar