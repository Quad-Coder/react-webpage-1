import React from "react";
import ProPic from "../components/images/ProPic.JPG";
import CodeSymbol from "../components/images/CodeSymbol.JPG";
import ThinkfulLogo from "../components/images/ThinkfulLogo.JPG";

function Home() {
  return (
    <div className="home" style={{ background: "#212529" }}>
    
      <div className="Introduction">
        <h3 className="Intro" style={{ color: "#bfc0c0" }}>
          Hey! My name is Quadrick Reeder and I am you next Software Engineer.
        </h3>
        <img
          className="proPic"
          src={ProPic}
          style={{
            width: 200,
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="Interest">
        <img className="codeSymbol" src={CodeSymbol} />
        <p style={{ color: "#bfc0c0" }}>
          My interest in coding started in 2018 and that same year I started
          doing my research to dable with different coding languages. It wasn't
          until I started taking classes at Laney College that I really started
          to apply myself.
        </p>
      </div>
      <br />
      <div className="Thinkful">
        <p style={{ color: "#bfc0c0" }}>
          In 2021 I attended Thinkful's Software Engineering Immersion Program.
          It was there at the 6 month program that I learned industry standards using the JavaScript
          language different tools such as CSS, HTML, MongoDB, Express, and
          React.
        </p>
        <img
          className="thinkfulLogo"
          src={ThinkfulLogo}
          style={{ width: 200, borderRadius: "50%" }}
        />
      </div>
      <br />
      <div className="Conclusion">
        <p style={{ color: "#bfc0c0" }}>
          Complimenting these newly learned skills is 3+ years of customer
          service and warehouse experience that made my communications skills
          superb.
        </p>
      </div>
      <br/>
      <div className="Projects">
        <div className="pTitles">
          <img className=""src=""/>
        <h3 className="projectTitle" style={{ color: "#bfc0c0"}}>Projects</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
