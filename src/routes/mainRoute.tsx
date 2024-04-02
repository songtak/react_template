import { DOMRouterOpts } from "react-router-dom";
import { RouteObject } from "react-router";
import ErrorPage from "@pages/common/ErrorPage";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import AuthTestPage from "@pages/AuthTestPage";
/** 기본 라우터 */
const defaultRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
];

/** token 값이 유효할 때 라우트 */
const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthTestPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/auth",
  //   // element: <AuthTestPage />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     // New blog index route
  //     { index: true, Component: () => <h1>Blog Index</h1> },
  //     // Blog subapp splat route added for /blog/posts matching
  //     { path: "*", Component: AuthTestPage },
  //   ],
  // },
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

export { defaultRoutes, authRoutes };
