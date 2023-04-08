import { useState, useRef } from "react";
import "../../styles/pages/home.css";

import { SearchOutlined } from "@ant-design/icons";
import { Heading1, DetailedList } from "../../components/Data_Display";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="home bg-black w-screen h-screen flex flex-col">
      <Navbar selectTab={{ select: setSelectedTab, current: selectedTab }} />
      {/* <Filter /> */}

      <Heading1>TV Shows</Heading1>

      <DetailedList
        title="ADULT ANIMATION"
        data={[
          {
            backdrop:
              "https://www.themoviedb.org/t/p/original/rYv1xgTI2Vc2CmdBPeWHG3eDayj.jpg",
            info: { title: "The Last Of Us" },
          },
          {
            backdrop:
              "https://www.themoviedb.org/t/p/original/biPTe4FGdy5eDTPFoiXO0JpFJEY.jpg",
            info: { title: "The Mandalorian" },
          },
          {
            backdrop:
              "https://www.themoviedb.org/t/p/original/lcNf2WSdRISnvetLIvRbAzheg0D.jpg",
            info: { title: "Inside Job" },
          },
          {
            backdrop:
              "https://www.themoviedb.org/t/p/original/bMoVrgArQrELqEKEqicMXMySCpT.jpg",
            info: { title: "Rick and Morty" },
          },
        ]}
      />
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
    <div className="navbar flex items-center h-20 w-full px-8 transition-all duration-300 ">
      <div
        className="logo flex justify-center items-center text-white
      pr-6 h-8"
      >
        <img
          className="h-[22px]"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
        />
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
      <div className="actions ">
        <SearchOutlined className="text-white font-medium bg-white/[20%] rounded-full cursor-pointer p-2" />
      </div>
    </div>
  );
};

export default Home;
