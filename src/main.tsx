import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "@libs/ScrollToTop";
import MainRouter from "./routes/MainRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);
