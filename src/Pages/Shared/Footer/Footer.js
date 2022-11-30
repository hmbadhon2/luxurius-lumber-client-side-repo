import React from 'react';
import { Link } from 'react-router-dom';
import lumberLogo from '../../../assets/lumber logo2.pngg'
const Footer = () => {
    return (
        <footer className="footer mb-0 mt-32 p-10 bg-primary text-white">
        <div>
         <img src={lumberLogo} alt="" />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <Link className="link link-hover">Selling</Link> 
          <Link className="link link-hover">Buying</Link> 
          <Link className="link link-hover">Marketing</Link> 
          <Link className="link link-hover">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link className="link link-hover">About us</Link> 
          <Link className="link link-hover">Contact</Link> 
          <Link className="link link-hover">Jobs</Link> 
         
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link className="link link-hover">Terms of use</Link> 
          <Link className="link link-hover">Privacy policy</Link> 
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    );
};

export default Footer;