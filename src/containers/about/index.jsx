import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
const personalDetails = [
  {
    label: "Name",
    value: "Annaldesh Rakshit",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "rakshith.annaldesh@gmail.com",
  },
  {
    label: "Contact No",
    value: "9100732309",
  },
];

const jobSummary =
  "I graduated with a Chemical Engineering degree from NIT Warangal, achieving an 8.41 CGPA.Alongside my core curriculum, I dedicated myself to enhancing my proficiency in software by delving into subjects such as Data Structures, Algorithms, Web Development, Database Management, Machine Learning, Operating Systems, and Object-Oriented Programming.  As a passionate and eager newcomer, I am currently pursuing opportunities in IT roles.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Aspiring Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__imageWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/D5635AQHpVrGHa8aDPw/profile-framedphoto-shrink_400_400/0/1704306578748?e=1721318400&v=beta&t=19scsVEbLI180ZRx6tlYcaV3U5JEx4QwCBSyAx6vsUk"
              alt="picture"
            />
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
