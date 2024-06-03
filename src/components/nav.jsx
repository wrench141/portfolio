import {useState} from "react"

export default function Navbar(){
  const [menu, setMenu] = useState(false);
    return (
      <>
        <nav className="nav">
          <p className="brand">DedSec.corp</p>
          <div className="links">
            <a href="/" className="link">
              Home
            </a>
            <a href="/" className="link">
              About
            </a>
            <a href="/" className="link">
              Services
            </a>
            <a href="/" className="link">
              Projects
            </a>
          </div>
          <a href="/team">
            <button className="cta">Our Team</button>
          </a>
        </nav>
        <nav className="nav mb">
          <p className="brand">DedSec.corp</p>
          <div
            className="links"
            style={!menu ? { top: "-100vh" } : { top: "0" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="brand">Dedsec.Corp</p>
              <p className="brand" onClick={() => setMenu(false)}>
                Close
              </p>
            </div>
            <a href="/" className="link bt">
              Portfolio
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
            <a href="/" className="link">
              About
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
            <a href="/" className="link">
              Services
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
            <a href="/" className="link">
              Let's Talk
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
            <a href="/team" className="link">
              Our Team
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
          <p className="link" onClick={() => setMenu(true)}>
            Menu
          </p>
        </nav>
      </>
    );
}