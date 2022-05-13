import React from "react";
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 fineStore All right reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineWhatsApp />
      </p>
    </div>
  );
};

export default Footer;
