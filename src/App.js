// import logo from "./logo.svg";
import "./App.css";
// import ColorPicker from "./components/ColorPicker";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import { Comment } from "./components/Comment";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link,Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Profile from "./Profile";

function App() {
  // const comment = {
  //   date: new Date(),
  //   text: "I hope you enjoy learning React!",
  //   author: {
  //     name: "Hello Kitty",
  //     avatarUrl: "http://placekitten.com/g/264/164",
  //   },
  // };
  // const products = [
  //   { name: "Product 1", price: 10 },
  //   { name: "Product 2", price: 20 },
  //   { name: "Product 3", price: 30 },
  // ];

  const [color, setColor] = useState("#ffffff");
  const [alert, setAlert] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const handleColorChange = (newColor) => {
    console.log(123);
    console.log(newColor);
    document.body.style.backgroundColor = newColor.hex;
    setColor(newColor.hex);
  };

  const [mode, setMode] = useState("light");

  const toggleModeButton = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "transparent";

      setMode("light");
      setAlert("success");
      setAlertMessage("Success light mode is enabled !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
      document.title = "Text Transformation Tool - Light Mode";
    } else {
      document.body.style.backgroundColor = "blue";

      setMode("dark");
      setAlert("success");
      setAlertMessage("Success dark mode is enabled !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
      document.title = "Text Transformation Tool - Dark Mode";
    }
  };
  return (
    <>
      {/* <Navbar
        name="Navbar"
        aboutText="About Us"
        mode={mode}
        toggleModeButton={toggleModeButton}
        alert={alert}
        alertMessage={alertMessage}
      /> */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      {/* <div className="mt-5">
        <TextForm
          heading="Enter your text which you want to convert"
          mode={mode}
          color={color}
          handleColorChange={handleColorChange}
        />
      </div> */}

      {/* <About /> */}

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar
                  name="Navbar"
                  aboutText="About Us"
                  mode={mode}
                  toggleModeButton={toggleModeButton}
                  alert={alert}
                  alertMessage={alertMessage}
                />
                <TextForm
                  heading="Enter your text which you want to convert"
                  mode={mode}
                  color={color}
                  handleColorChange={handleColorChange}
                />
              </>
            }
          ></Route>

          <Route
            exact
            path="/about"
            element={
              <>
                <Navbar
                  name="Navbar"
                  aboutText="About Us"
                  mode={mode}
                  toggleModeButton={toggleModeButton}
                  alert={alert}
                  alertMessage={alertMessage}
                />
                <About />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
