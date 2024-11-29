import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faEllipsis,
  faGreaterThan,
  faGauge,
  faGear,
  faLayerGroup,
  faPaperclip,
  faSpinner,
  faChartColumn,
  faTable,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { faBell, faImage } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Main />
    </>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src="download.webp" alt="logo" />
        <h1>Skydash</h1>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-search">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            className="nav-inp"
            placeholder="search now"
          ></input>
        </div>
        <div className="nav-menu-user">
          <div className="nav-notify"></div>
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          <img src="face.jpg" alt="user" width="30px" />
          <FontAwesomeIcon icon={faEllipsis} style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <ul className="list">
        <List
          text={"Dashboard"}
          icon={faGauge}
          expand={false}
          bgColor={"#8e6ecb"}
          txtColor={"#fff"}
        />
        <List text={"Widgets"} icon={faGear} expand={false} />
        <List text={"UI Elements"} icon={faLayerGroup} expand={true} />
        <List text={"Advanced UI"} icon={faImage} expand={true} />
        <List text={"Form Elemnts"} icon={faPaperclip} expand={true} />
        <List text={"Editors"} icon={faSpinner} expand={true} />
        <List text={"Charts"} icon={faChartColumn} expand={true} />
        <List text={"Tables"} icon={faTable} expand={true} />
        <List text={"Popups"} icon={faArrowUpFromBracket} expand={false} />
      </ul>
    </div>
  );
}

function List({ text, icon, expand, bgColor, txtColor }) {
  return (
    <li
      className="list-item"
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      <span>
        <FontAwesomeIcon icon={icon} />
        {text}
      </span>
      <span>{expand ? <FontAwesomeIcon icon={faGreaterThan} /> : ""}</span>
    </li>
  );
}

function Main() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="main">
      <div className="main-heading">
        <span>
          <h2>Welcome Kamal</h2>
          <p>
            All systems are running smoothly! You have{" "}
            <span style={{ color: "#8e6ecb" }}>3 unread alerts!</span>
          </p>
        </span>
        <span>
          <select className="select">
            <option>Today({date})</option>
            <option>Jan - Mar</option>
            <option>Mar - Jun</option>
            <option>Jun - Aug</option>
          </select>
        </span>
      </div>
      <div className="main-details">
        <img
          src="dashboard-1.png"
          alt="dashboard-picture"
          width="600px"
          className="item-1"
        />
        <div className="main-card i-2">
          <p>Today's Booking</p>
          <h2>4006</h2>
          <p>10.00% (30 days)</p>
        </div>
        <div className="main-card i-3">
          <p>Total Bookings</p>
          <h2>61344</h2>
          <p>22.00% (30 days)</p>
        </div>
        <div className="main-card i-4">
          <p>Number of Meetings</p>
          <h2>34040</h2>
          <p>2.00% (30 days)</p>
        </div>
        <div className="main-card i-5">
          <p>Number of CLients</p>
          <h2>47033</h2>
          <p>0.22% (30 days)</p>
        </div>
      </div>
    </div>
  );
}
