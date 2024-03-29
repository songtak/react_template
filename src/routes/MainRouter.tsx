import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { defaultRoutes } from "./mainRoute";

/** 기본 라우터 */
const MainRouter = () => {
  const mainRouter = createBrowserRouter(defaultRoutes);

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
};

export default MainRouter;
