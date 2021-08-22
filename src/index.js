// import { ReactDOM } from "react";

// ReactDOM.render();

import App from "./App";

const root = document.getElementById("root");
console.log({ root });
root.innerHTML = `${App({ name: "webpack" })}`;
