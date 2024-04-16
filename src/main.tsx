import React from "react";
import ReactDOM from "react-dom/client";
import { LangContextProvider } from "./context/LangContext";
import { NightModeContextProvider } from "./context/NightModeContext";
import App from "./App.tsx";
import "./globalStyles/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NightModeContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </NightModeContextProvider>
  </React.StrictMode>
);
