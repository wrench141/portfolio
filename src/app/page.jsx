'use client';

import "../styles/land.css";

import cam from "../assets/cam.jpg";
import cam2 from "../assets/cam2.jpg";
import meet from "../assets/meet.jpg";
import table from "../assets/table.jpg";
import secImg from "../assets/sec.jpg";
import proj from "../assets/proj.png";
import crm from "../assets/img2.jpg";

import { useEffect } from "react";
import Image from "next/image";

import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function Landing() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const line = document.getElementById("line");
    let count = 0;
    const interval = setInterval(() => {
      if (count == 0) {
        line.style.animation = "scrl 10s linear infinite";
      }

      if (count == circles.length) {
        count = 0;
        circles.forEach((circle) => circle.classList.remove("glow"));
      }

      circles[count].classList.add("glow");
      count += 1;
    }, 2000);
  }, []);

  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing">
        <div className="section">
          <h1 className="title">
            Explore the possibilities of digitalizing your <span>Business</span>{" "}
            with <span>Dedsec</span>
          </h1>
          <p className="sub">
            Dedsec, a digital agency for B2B companies, startups, brands to
            elevate their business over internet and attract new customers.
          </p>
          <div className="btns">
            <button className="btn ot">
              <p>Let's Connect</p>
              <div className="ball">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </button>
          </div>
        </div>
        <div className="imgGrid">
          <div className="sec">
            <Image src={table} alt="" className="img" />
            <Image src={cam2} alt="" className="img" />
          </div>
          <div className="sec">
            <Image src={meet} alt="" className="img" />
            <Image src={cam} alt="" className="img" />
          </div>
        </div>
      </div>
      <div className="steps">
        <Image src={secImg} alt="" className="img" />
        <div className="sec">
          <p className="title">
            We provide Quality and Creative solutions & adding the word called{" "}
            <span>Success</span> to your brand
          </p>
          <p className="sub">
            Dedsec has a passionate and leading team dedicated to help brands
            grow their online platforms and presence, improving their digital
            performances and marketing strategies
          </p>
        </div>
      </div>
      <div className="steps mb">
        <div className="sec">
          <div className="tgs">
            <div className="tg">
              <p className="count">3+</p>
              <p className="lab">Years of Experience</p>
            </div>
            <div className="tg">
              <p className="count">10+</p>
              <p className="lab">Happy Customers</p>
            </div>
            <div className="tg">
              <p className="count">10+</p>
              <p className="lab">Projects Finished</p>
            </div>
            <div className="tg">
              <p className="count">
                4.5<span>/5</span>
              </p>
              <p className="lab">Average Rating</p>
            </div>
          </div>
          <p className="title">
            Our Experience rewards in happiest customers with best services
          </p>
          <p className="sub">
            Dedsec team follows a comprehensive and creative model to build
            applications and services. We have a great customer base with the
            best ratings.
          </p>
        </div>
        <Image src={crm} alt="" className="img" />
      </div>
      <div className="work zflow">
        <div className="sec" style={{ marginBottom: "20px" }}>
          <p className="tag">SERVICES</p>
          <p className="title">Quality Services You Get</p>
        </div>
        <div className="wsteps">
          <div className="img rec">
            <ion-icon name="cloud-outline" className="icon"></ion-icon>
            <div className="data">
              <p className="tg rec">
                Cloud Services
                <ion-icon name="star"></ion-icon>
              </p>
              <p className="details">
                Dedsec has the best cloud based services and One of the featured
                servics - POS System
              </p>
            </div>
          </div>
          <div className="img">
            <ion-icon name="planet-outline" className="icon"></ion-icon>
            <div className="data">
              <p className="tg">
                Web Based Services
                <ion-icon name="star"></ion-icon>
              </p>
              <p className="details">
                DedSec developes user-friendly, creative and innovative Web
                applications within affordable ranges.
              </p>
            </div>
          </div>
          <div className="img">
            <ion-icon name="phone-portrait-outline" className="icon"></ion-icon>
            <div className="data">
              <p className="tg">
                Cross Platform Apps
                <ion-icon name="star"></ion-icon>
              </p>
              <p className="details">
                We offer top-notch cross-platform app development services,
                building highly functional applications for multiple platforms.
              </p>
            </div>
          </div>
          <div className="img">
            <ion-icon name="git-network-outline" className="icon"></ion-icon>
            <div className="data">
              <p className="tg">
                AI based Solutions
                <ion-icon name="star"></ion-icon>
              </p>
              <p className="details">
                With industries embracing AI, we provide AI solutions to
                optimize industrial applications and workflows.
              </p>
            </div>
          </div>
          <div className="img">
            <ion-icon name="hardware-chip-outline" className="icon"></ion-icon>
            <div className="data">
              <p className="tg">
                IOT Based Solutions
                <ion-icon name="star"></ion-icon>
              </p>
              <p className="details">
                For industries leveraging IoT and electronics, we offer
                specialized solutions to optimize operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="work">
        <div className="sec">
          <p className="tag">Here are the Steps</p>
          <p className="title">How do we Work?</p>
        </div>
        <div className="wsteps">
          <div className="line-cont">
            <div className="line" id="line"></div>
          </div>
          <div className="step">
            <div className="circle glow">
              <ion-icon name="sparkles-outline"></ion-icon>
            </div>
            <div>
              <p className="title">Briefing</p>
              <p className="sub">
                Conduct client consultations and gather project requirements.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <ion-icon name="bulb-outline"></ion-icon>
            </div>
            <div>
              <p className="title">Ideation</p>
              <p className="sub">
                Explore concepts, create prototypes through iterative design.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <div>
              <p className="title">Development</p>
              <p className="sub">
                Initiate development, implement features, run testing cycles.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <ion-icon name="bug-outline"></ion-icon>
            </div>
            <div>
              <p className="title">Refine</p>
              <p className="sub">
                Identify and resolve issues, perform quality assurance,
                incorporate user feedback.
              </p>
            </div>
          </div>
          <div className="step fw">
            <div className="circle">
              <ion-icon name="flag-outline"></ion-icon>
            </div>
            <div>
              <p className="title">Finish</p>
              <p className="sub">
                Optimize product, prepare for launch, deploy to production, plan
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="work" style={{ marginTop: "50px" }}>
        <div
          className="sec"
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="tag">Journey</p>
            <p className="title">Our Products</p>
          </div>
          <div className="btns">
            <button className="arr">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="arr">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <p className="ft">Featured</p>
            <Image src={proj} alt="" className="img" />
            <div
              style={{
                width: "100%",
                height: "max-contents",
                display: "grid",
                gridTemplateColumns: "1fr 40px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p className="title rec">
                  POS System
                  <ion-icon name="star"></ion-icon>
                </p>
                <p className="desc">
                  {(() => {
                    let desc =
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum commodi fugit, neque distinctio quia aspernatur voluptatem dolorem quaerat ab voluptate rem delectus. Repudiandae magni eveniet sapiente beatae omnis nam quia.";
                    return desc.split(" ").slice(0, 10).join(" ") + "...";
                  })()}
                </p>
              </div>
              <a href="/" className="btn">
                <ion-icon name="open-outline"></ion-icon>
              </a>
            </div>
          </div>
          <div className="card ept"></div>
          <div className="card ept"></div>
          <div className="card ept"></div>
        </div>
      </div>
      <div className="work" style={{ marginTop: "50px" }}>
        <div
          className="sec"
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <p className="title ct">
              Words of Praise from the Customers <br /> about our{" "}
              <span>Presence</span>
            </p>
          </div>
        </div>
        <div className="testimonials">
          <div className="tcont">
            <div className="test">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              totam ex sequi distinctio atque exercitationem molestias, quaerat
              adipisci expedita explicabo”
              <div className="author">
                <div className="details">
                  <p className="name">Sidhardhchandra141@gmail.com</p>
                  <p className="date">{Date().toString().slice(0, 15)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
