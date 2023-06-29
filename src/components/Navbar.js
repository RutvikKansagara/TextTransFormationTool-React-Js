import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // console.log(props),
    // console.log(props.mode),
    // console.log(props.aboutText),
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "dark" ? "dark" : "light"
        } bg-${props.mode === "dark" ? "dark" : "light"}`}
      >
        <a className="navbar-brand" href="/">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link ms-5" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/about">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-5"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled ms-5" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input
              className="form-control mr-sm-2 ms-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0 ms-5"
              type="submit"
            >
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch ms-5 text-${props.mode}=== "dark" ? "light" : "dark"`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleModeButton}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Enable light mode" : "Enable dark mode"}
            </label>
          </div>
        </div>
      </nav>
      <div style={{height:'50px'}}>
      <div className={`container alert alert-${props.alert} mt-5`} role="alert">
        {props.alertMessage}
      </div>
      </div>
    </>
  );
}
