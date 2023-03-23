import { useState, useRef } from "react";
import "../../styles/home.css";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="home bg-black w-full h-full flex flex-col">
      <Navbar selectTab={{ select: setSelectedTab, current: selectedTab }} />
      <Filter />
      <div className="simple-list">
        <div className="flex items-center w-[5000px]">
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
        </div>
      </div>

      <div className="detailed-list">
        <div className="toolbar">
          <div className="title">
            <div className="rounded-xl bg-[#ff0d0d] w-[5px] h-[23px]"></div>
            <h4 className="mx-2">Awarded Productions</h4>
          </div>
          <div className="controls">
            <div className="arrows text-xs">
              <ArrowLeftOutlined className="p-2 cursor-pointer rounded-full " />
              <ArrowRightOutlined className="p-2 cursor-pointer rounded-full " />
            </div>
            <div className="button">See All</div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-item">
            <div className="image"></div>
            <div className="info"></div>
          </div>
          <div className="list-item">
            <div className="image"></div>
            <div className="info"></div>
          </div>
          <div className="list-item">
            <div className="image"></div>
            <div className="info"></div>
          </div>
          <div className="list-item">
            <div className="image"></div>
            <div className="info"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Filter = () => {
  const [filters, setFilters] = useState([
    { name: "Action", active: false },
    { name: "Adventure", active: false },
    { name: "Animation", active: false },
    { name: "Biography", active: false },
    { name: "Crime", active: false },
    { name: "Comedy", active: false },
    { name: "Drama", active: false },
  ]);

  function updateState(name) {
    const newState = filters.map((filter) => {
      if (filter.name == name) return { ...filter, active: !filter.active };
      return filter;
    });
    setFilters(newState);
  }
  return (
    <div className="flex items-center px-5 py-2 w-full h-10 transition-all duration-300">
      <div className="filter-wrapper flex items-center justify-evenly w-[800px]">
        {filters.map((filter) => {
          return (
            <div
              className={`filter-item ${
                filter.active ? "filter-item-selected" : ""
              }`}
              onClick={() => {
                updateState(filter.name);
              }}
            >
              {filter.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Navbar = ({ selectTab }) => {
  return (
    <div className="navbar flex items-center h-20 w-full px-8 transition-all duration-300">
      <div
        className="logo flex justify-center items-center text-white
      pr-6 h-8"
      >
        <img
          className="h-full"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
        />
        Original
      </div>
      <div className="navbar-menu flex items-center justify-evenly w-[550px]">
        <div
          className={`navbar-menu-item ${
            selectTab.current == "all" ? "navbar-menu-item-selected" : ""
          }`}
          onClick={() => {
            selectTab.select("all");
          }}
        >
          All
        </div>
        <div
          className={`navbar-menu-item ${
            selectTab.current == "movies" ? "navbar-menu-item-selected" : ""
          }`}
          onClick={() => {
            selectTab.select("movies");
          }}
        >
          Movies
        </div>
        <div
          className={`navbar-menu-item ${
            selectTab.current == "series" ? "navbar-menu-item-selected" : ""
          }`}
          onClick={() => {
            selectTab.select("series");
          }}
        >
          Series
        </div>
        <div
          className={`navbar-menu-item ${
            selectTab.current == "trends" ? "navbar-menu-item-selected" : ""
          }`}
          onClick={() => {
            selectTab.select("trends");
          }}
        >
          Trends
        </div>
        <div
          className={`navbar-menu-item ${
            selectTab.current == "news" ? "navbar-menu-item-selected" : ""
          }`}
          onClick={() => {
            selectTab.select("news");
          }}
        >
          News
        </div>
      </div>
    </div>
  );
};

export default Home;
