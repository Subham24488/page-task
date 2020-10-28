import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FiHome,
  FiPieChart,
  FiHelpCircle,
  FiSettings,
  FiMessageSquare,
} from "react-icons/fi";
import {
  AiOutlineCheckCircle,
  AiOutlineFile,
  AiOutlineStar,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { MdPeople, MdNotificationsNone, MdFilterList } from "react-icons/md";
import SearchBar from "../searchBar/searchBar.component";
import human from "../../assets/human.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Detail from "./detail.component";
import { adminData } from "../../data";

import "./admin.styles.scss";

const Admin = () => {
  return (
    <div className="admin">
      <div className="left-nav">
        <img src={logo} alt="logo" style={{width:"50%"}} />
        <ul>
          <li>
            <a to="#">
              <FiHome className="left-nav-icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a to="#">
              <AiOutlineCheckCircle className="left-nav-icon" />
              <span>My Tasks</span>
            </a>
          </li>
          <li>
            <a to="#">
              <AiOutlineFile className="left-nav-icon" />
              <span>My Projects</span>
            </a>
          </li>
          <li>
            <a to="#">
              <MdPeople className="left-nav-icon" />
              <span>People</span>
            </a>
          </li>
          <li>
            <a to="#">
              <FiPieChart className="left-nav-icon" />
              <span>Statistics</span>
            </a>
          </li>
        </ul>
        <div className="bottom-nav">
          <div className="line"></div>
          <ul>
            <li>
              <a to="#">
                <FiHelpCircle className="left-nav-icon" />
                <span>Help</span>
              </a>
            </li>
            <li>
              <a to="#">
                <FiSettings className="left-nav-icon" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="admin-body">
        <div className="admin-header">
          <div className="admin-search">
            <SearchBar hSearch />
          </div>
          <div className="admin-header-right">
            <a href="#" className="header-icons">
              <MdNotificationsNone />
            </a>
            <a href="#" className="header-icons">
              <FiMessageSquare />
            </a>
            <a href="#" className="header-icons">
              <AiOutlineStar />
            </a>
            <a href="#" className="user">
              <img src={human} alt="user" />
            </a>
          </div>
        </div>
        <div className="admin-content">
          <div className="admin-content-header">
            <div className="header-top">
              <span>
                To Review
                <RiArrowDropDownLine />
              </span>
              <button>+</button>
            </div>
            <div className="header-bottom">
              <div className="bottom-search">
                <SearchBar />
              </div>
              <div className="tags">
                <a href="#">
                  <AiOutlineFile />
                  <span>My Projects</span>
                </a>
                <a href="#">
                  <MdPeople />
                  <span>Assignees</span>
                </a>
                <a href="#">
                  <AiOutlineStar />
                  <span>Priority</span>
                </a>
                <a href="#">
                  <MdFilterList />
                  <span>Filters</span>
                </a>
              </div>
            </div>
          </div>
          <div className="admin-content-body">
            <div className="table-header">
              <p>
                Due <AiOutlineArrowUp />
              </p>
              <p>Title</p>
              <p>Project</p>
              <p>Updated</p>
              <p>Assignees</p>
              <p>Priority</p>
            </div>
            {adminData.map((data, id) => {
              return <Detail data={data} key={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
