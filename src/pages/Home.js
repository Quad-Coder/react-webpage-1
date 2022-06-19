import React from "react";
import ProPic from "../components/images/ProPic.JPG";
import CodeSymbol from "../components/images/CodeSymbol.JPG";
import ThinkfulLogo from "../components/images/ThinkfulLogo.JPG";
import MongoDB from "../components/images/MongoDB.JPG";
import Express from "../components/images/ExpressjsL.JPG";
import ReactLogo from "../components/images/ReactLogo.JPG";
import Nodejs from "../components/images/Nodejs.JPG";
import WeLoveMovies from "../components/images/WeLoveMovies.JPG";

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
          It was there at the 6 month program that I learned industry standards
          using the JavaScript language different tools such as CSS, HTML,
          MongoDB, Express, and React.
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
      <br />
      <div className="Projects">
        <img
          className="mongoDBLogo"
          src={MongoDB}
          style={{ width: 200, borderRadius: "50%" }}
        />
        <img
          className="expressjs"
          src={Express}
          style={{ width: 200, borderRadius: "50%" }}
        />
        <h3 className="projectTitle" style={{ color: "#bfc0c0" }}>
          Projects
        </h3>
        <img
          className="react"
          src={ReactLogo}
          style={{ width: 200, borderRadius: "50%" }}
        />
        <img
          className="nodejs"
          src={Nodejs}
          style={{ width: 200, borderRadius: "50%" }}
        />
      </div>
      <br />
      <section id="project1" class>
        <div className="info-card accent-border project1">
          <a
            href="https://projectwelovemovies.herokuapp.com/"
            class="info-img accent-border flex-single deploy-wrap"
          >
            <img
              src={WeLoveMovies}
              alt="Mock database that stores movies, reviews and theaters in relational databases."
              style={{ width: "30%" }}
            />
            <div class="deploy-screen">
              <div class="deploy-text">View Deployment</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
