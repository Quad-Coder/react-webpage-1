import React from "react";
import ProPic from "../components/images/";

function Home() {
  return (
    <div className="home">
      <div className="Introduction">
        <h3 style={{ color: "#bfc0c0" }}>
          Hey! My name is Quadrick Reeder and I am you next Software Engineer.
        </h3>
        <img src={ProPic} alt="Self Portrait" />
      </div>
      <p style={{ color: "#bfc0c0" }}>
        My interest in coding started in 2018 and that same year I started doing
        my research to dable with different coding languages. It wasn't until I
        started taking classes at Laney College that I really started to apply
        myself.{" "}
      </p>
      <p style={{ color: "#bfc0c0" }}>
        In 2021 I attended Thinkful's Software Engineering Immersion Program. It
        was here that I learned industry standards using the JavaScript language
        different tools such as CSS, HTML, MongoDB, Express, and React.
      </p>
    </div>
  );
}

export default Home;
