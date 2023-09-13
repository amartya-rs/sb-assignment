import React from "react";
import ReactDOM from "react-dom/client";
import { VideoProvider } from "./contexts/context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <VideoProvider>
         <App />
      </VideoProvider>
   </React.StrictMode>
);
