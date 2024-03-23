import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";



export default function Contact() {
  return (
    <>
        <div className="container" id="contact">
          <h1>CONTACT ME</h1>
          <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
            <a href="#" target="_blank" className="items">
            <FaInstagramSquare className="icons" />
            </a>
            <a href="#" target="_blank" className="items">
            <CiFacebook className="icons" />
            </a>
            <a href="#" target="_blank" className="items">
            <CiLinkedin className="icons" />
            </a>
            <a href="#" target="_blank" className="items">
            <FaXTwitter className="icons" />
            </a>
            <a href="https://www.github.com" target="_blank" className="items">
            <FaSquareGithub className="icons" />
            </a>
            <a href="mailto:rupeshghumare7@gmail.com" target="_blank" className="items">
            <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>
    </>
  )
}
