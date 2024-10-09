import App from "./App";
import react from "react";
import reactDom from "react-dom/client";
import "../src/main.css";

const rootEl = document.querySelector("#root");
reactDom.createRoot(rootEl).render(<App />);
