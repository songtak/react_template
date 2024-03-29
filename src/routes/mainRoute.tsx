import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/common/ErrorPage";
import MainPage from "../pages/MainPage";

/** 기본 라우터 */
const defaultRoutes: RouterProvider[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
];

/**
 * @todo 위의 방식과 아래 방식 사이 중에 어느게 더 나을지?
 */
// const defaultRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

export { defaultRoutes };
