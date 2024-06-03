'use client'

import React, { useEffect, useRef } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import "../../styles/team.css";

export default function Team() {
  const titleTextRef = useRef(null);

  useEffect(() => {
    const titleText = "Introducing Team Dedsec";
    const typeWriter = () => {
      let i = 0;
      const interval = window.setInterval(() => {
        titleTextRef.current.textContent += titleText[i];
        i++
        if(i == titleText.length){
            clearInterval(interval)
        }        
      }, 50)
    };
    typeWriter();
  }, []);

  return (
    <div className="tmcont">
      <Navbar />
      <div className="ztop">
        <p className="title" ref={titleTextRef}>
          <span className="cursor" id="cursor"></span>
        </p>
        <p className="sub">
          A band of incredible, creative, and talented developers, united by a
          passion for innovation
        </p>
        <div className="cards">
          <div className="card">
            <p className="name"><span>B. chandra sidhardha</span> ✦ Core</p>
            <p className="sub">CEO . Founder</p>
          </div>
          <div className="card">
            <p className="name"><span>M. Miazur Rahaman</span> ✦ Core</p>
            <p className="sub">Co-Founder . Technical Lead</p>
          </div>
          <div className="card">
            <p className="name"><span>Polinati Vinod</span> ✦ Core</p>
            <p className="sub">Co-Founder . Business Lead</p>
          </div>
          <div className="card">
            <p className="name"><span>B. Sai Sasank</span> ✦ Core</p>
            <p className="sub">Co-Founder . Product Lead</p>
          </div>
          <div className="card">
            <p className="name"><span>Shaik Shajid</span> ✦ Operational</p>
            <p className="sub">UI/UX Lead</p>
          </div>
          <div className="card">
            <p className="name"><span>Reddy Rewat</span> ✦ Operational</p>
            <p className="sub">Financial Analyst</p>
          </div>
          <div className="card">
            <p className="name"><span>Chaitanya Yekollu</span> ✦ Operational</p>
            <p className="sub">Development Lead</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
