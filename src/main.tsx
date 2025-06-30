import React from "react";
import ReactDOM from "react-dom/client";
import { NightModeContextProvider } from "./context/NightModeContext";
import App from "./App.tsx";
import "./globalStyles/reset.scss";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NightModeContextProvider>
      <App />
    </NightModeContextProvider>
  </React.StrictMode>
);
