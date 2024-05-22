import React from "react";
import { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: '#173d7a'

  // })

  // const [btnText, setBtntext] = useState("Enable Light Mode");

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#173d7a" : "white",
  };

  return (
    <div className="container " style={myStyle}>
      <h1> About us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            style={myStyle}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a ReactJs website.</strong> built primarily
              to do various operations on regular typed text. You can safely use
              WordPad or NotePad for text drafting, and saving, but TextUtils
              offers much more than simple text drafting and formatting.
              <code> TextUtils can convert your text to any case </code>
              in just one simple click of a button. It can extract links and
              numbers safely from a labyrinth of random text or sophisticated
              documentation.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It has an improved property of base64 encoding, reversal of your
              inputted text.You can even remove whitespaces from your scripted
              documents, and wear up your earphones to listen to it, instead of
              straining your eyes! It does a detailed analyzing of your text,
              and provides an output of words, and characters, along with
              reading time as well.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            style={myStyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The best part of TextUtils is that it is an open source project,
              as a result, dozens of new features are in the upcoming, which
              definitely makes it a cut above the rest.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
