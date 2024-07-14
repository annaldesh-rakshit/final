import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/restapi.jpg";
import ImageTwo from "../../images/weather-app.jpg";
import ImageThree from "../../images/food_pred.jpg";
import ImageFour from "../../images/ipl_visualization.jpg";
import ImageFive from "../../images/coding_platform.png";
import ImageSix from "../../images/portfolio.jpg";
import "./styles.scss";
import { useState } from "react";

const projectData = [
  {
    id: 2,
    name: "RESTful API",
    image: ImageOne,
    link: "www.google.com",
  },
  {
    id: 2,
    name: "Weather App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Portfolio",
    image: ImageSix,
    link: "",
  },
  {
    id: 3,
    name: "Food order Prediction",
    image: ImageThree,
    link: "",
  },
  {
    id: 3,
    name: "IPL data Visualization",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Coding Platform DBMS",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Data-Analysis",
  },
];

const Projects = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="projects" className="projects">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="projects__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                      <a
                        href="https://github.com/sangammukherjee/portfolio-website-2022"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
