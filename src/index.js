import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./components/App/App";

const root = document.getElementById("root");
createRoot(root).render(<App />);
