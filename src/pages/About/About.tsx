import React from "react";
import "./About.css";
import profilePicture from "../../images/profile-picture.jpg";

const About = () => {
  return (
    <div className="about">
      <img className="about__profilePicture" src={profilePicture} />
      <p>
        {" "}
        Hello! My name is James Crews and I am an aspiring self-taught software
        engineer. Over the past couple years i have been teaching myself how to
        code, with most of my experience being in C# and Typescript/Javascript,
        specifically in the React framework. I have a heavy interest in
        algorithmic programming and a love solving complex problems. A few of my
        projects showing my progress can be found on this website.
      </p>
    </div>
  );
};

export default About;
