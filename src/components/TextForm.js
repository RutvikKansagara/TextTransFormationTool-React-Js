import React from "react";
import { useState } from "react";
import { ChromePicker } from "react-color";

export default function TextForm(props) {
  const [alert, setAlert] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const onHandleChange = (event) => {
    setText(event.target.value);
  };

  const onHandleClick = () => {
    console.log(text.length);
    if (text.length === 0) {
      setAlert("info");
      setAlertMessage("Info your text is empty please first enter text !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    } else {
      let newText = text.toUpperCase();
      setText(newText);

      setAlert("success");
      setAlertMessage("Success your text is converted to uppercase !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    }
  };
  const onHandleLowClick = () => {
    if (text.length === 0) {
      setAlert("info");
      setAlertMessage("Info your text is empty please first enter text !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      setAlert("success");
      setAlertMessage("Success your text is converted to lowercase !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    }
  };

  const onHandleClearText = () => {
    if (text.length === 0) {
      setAlert("info");
      setAlertMessage("Info your text is empty please first enter text !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    } else {
      let newText = "";
      setText(newText);
      console.log(newText.length);
      setAlert("success");
      setAlertMessage("Success your text is cleared successfully !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    }
  };
  const onHandleSentenceCapitalization = () => {
    if (text.length === 0) {
      setAlert("info");
      setAlertMessage("Info your text is empty please first enter text !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    } else {
      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        const word = arr[i];

        if (word === word.toUpperCase()) {
          arr[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
      }

      const newText = arr.join(" ");
      console.log(newText);
      setText(newText);
      setAlert("success");
      setAlertMessage("Success sentence capitalization of text is done !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    }
  };
  const onHandleCopyText = () => {
    if (text.length === 0) {
      setAlert("info");
      setAlertMessage("Info your text is empty please first enter text !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    } else {
      const newText = document.getElementById("myBox");
      newText.select();

      navigator.clipboard.writeText(newText.value);

      setAlert("success");
      setAlertMessage("Success your text is copied to clipboard !");
      setTimeout(() => {
        setAlert("");
        setAlertMessage("");
      }, 1500);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
    setAlert("success");
    setAlertMessage(
      `Success your count is increased ! now count is ${count + 1}!`
    );
    setTimeout(() => {
      setAlert("");
      setAlertMessage("");
    }, 1500);
  };

  const [text, setText] = useState("Enter your text to convert in uppercase");
  const [count, setCount] = useState(0);
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <ChromePicker color={props.color} onChange={props.handleColorChange} />
      </div>
      <div className={`container alert alert-${alert}`} role="alert">
        {alertMessage}
      </div>
      <div className="container text-light">
        <div className="mb-3">
          <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
            {props.heading}
          </h1>
          <textarea
            className={`form-control text-${
              props.mode === "dark" ? "light" : "dark"
            } bg-${props.mode === "dark" ? "dark" : ""}`}
            id="myBox"
            rows="8"
            value={text}
            onChange={onHandleChange}
          ></textarea>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={onHandleClick}
          >
            convert to uppercase
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={onHandleLowClick}
          >
            convert to lowercase
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={increaseCount}
          >
            your count is : {count}
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={onHandleClearText}
          >
            clear text
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={onHandleSentenceCapitalization}
          >
            Sentence Capitalization
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "dark" : "primary"
            } text-${props.mode === "dark" ? "light" : "dark"} mt-5 mx-2`}
            onClick={onHandleCopyText}
          >
            copy text
          </button>
        </div>
      </div>
      <div
        className={`container mt-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1>Your text summary:</h1>
        <span>
          {wordCount} words {text.length} characters
        </span>
        <h1>Reading time it will take:</h1>
        <span>{0.004 * text.split(" ").length}</span>
        <h1>Preview:</h1>
        <span>{text}</span>
      </div>
    </>
  );
}
