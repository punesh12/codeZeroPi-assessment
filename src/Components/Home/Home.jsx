import React from "react";
import "./Home.css";
import headerImage from "../../Assets/team.svg";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-cta">
          <h1>
            Welcome to <span> Landkit</span>. Develop anything.
          </h1>
          <p>
            Build a beautiful, mdern website with flexible Bootstrap components
            built from sratch.
          </p>
          <div className="home-header-cta-btns">
            <input
              className="btn-view-all-pages"
              type="submit"
              value="View all pages"
            />
            <input
              className="btn-view-documentation"
              type="submit"
              value="Documentation"
            />
          </div>
        </div>
        <div className="home-header-image">
          <img className="cta-img" src={headerImage} alt="" srcset="" />
        </div>
      </div>
      <div className="home-header-short-info">
        <div className="short-info">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/toggle-on.png"
            alt="logo"
          />
          <h4>Built for developers</h4>
          <p>
            Landkit is built to make your life easier, Variables, build tooling,
            documentation, and reusable components.
          </p>
        </div>

        <div className="short-info">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/toggle-on.png"
            alt="logo"
          />

          <h4>Design to be modern</h4>
          <p>
            Designed with the latest design trends in mind. Landkit feels
            modern, minimal, and beautiful.
          </p>
        </div>

        <div className="short-info">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/toggle-on.png"
            alt="logo"
          />

          <h4>Documentation for everything</h4>
          <p>
            We've written extensive documentation for components and tools, so
            you never have to reverse engineer anything.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
