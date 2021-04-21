import React from "react";
import ReactDOM from "react-dom";

// this is important to know that this is about what to show and where to show. what to show is the code, and where to show is the getElemetById which tells us that the code will be shown in the indext.html body
ReactDOM.render(
  <div>
    <h1>Awara Review 395</h1>
    <ul>
      <li>I did it myself</li>
      <li>I did it myself</li>
      <li>I did it myself</li>
    </ul>
  </div>,
  document.getElementById("root")
);
