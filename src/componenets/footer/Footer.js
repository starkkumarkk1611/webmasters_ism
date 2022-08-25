import React from "react";
import "./footer.css";
import aicteLogo from "../../assets/aictelogo.png";
import { BsFacebook, BsTwitter, BsDribbble, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div style={{color:"#fff"}} className="d-flex align-items-center justify-content-evenly main-logo">
              <img src={aicteLogo} alt="aictelogo" />
              <h2 className="mx-2 p-0">AICTE</h2>
              <span style={{borderLeft:"2px solid #fff"}} className="vertical-main-bar"></span>
              <div className="mx-0">
                <p className="m-0 p-0 small">
                  All India Council for Technical Education
                </p>
                <p className="m-0 p-0 small">अखिल भारतीय तकनीकी शिक्षा परिषद</p>
              </div>
            </div>
            <p className="text-justify">
              All India Council for Technical Education (AICTE) was set up in
              November 1945 as a national-level apex advisory body to conduct a
              survey on the facilities available for technical education
            </p>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">BASANT</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">
                  DISTINGUISHED ALUMINI AWARD
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  WHAT TO SUPPORT
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  HOW TO SUPPORT
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <h6>SITEMAP</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  TERM OF USE
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  RIGHT OF INFORMATION
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  REPORTS
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">DIRECTORY</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">
                  CENTRALIZED SUPPORT SYSTEM
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <h6>Get in touch</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">
                  REPORTING TO INSTITUTES
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">
                  VERIFY INSTITUTE APPROVAL
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  AICTE DASHBOARD
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">CYBER SECURITY</a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">
                  DEMAND UNIVERSITY RESULT
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">
                  PGDM STUDENT VERIFICATION
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
      </div>
      <div className="cont_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017. AICTE Nelson Mandela Marg, Vasant Kunj,
                New Delhi -110070
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#Home">
                    <i className="social-icons">
                      <BsFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#Home">
                    <i className="social-icons">
                      <BsLinkedin />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#Home">
                    <i className="social-icons">
                      <BsDribbble />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#Home">
                    <i className="">
                      <BsTwitter />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
