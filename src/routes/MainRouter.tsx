import { useEffect } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { defaultRoutes, authRoutes } from "./mainRoute";
import AuthLayout from "@components/layouts/AuthLayout";
import useLocalStorageStore from "@stores/storageStore";

/** 기본 라우터 */
const MainRouter = () => {
  const mainRouter = createBrowserRouter(defaultRoutes);
  const authRouter = createBrowserRouter(authRoutes);
  const access_token = useLocalStorageStore((state: any) => state.access_token);
  const setAccessToken = useLocalStorageStore(
    (state: any) => state.setAccessToken
  );

  useEffect(() => {
    setAccessToken("저장된 token 바꿈!");
  }, []);

  return (
    <>
      <AuthLayout />
      <RouterProvider router={authRouter} />
    </>
  );
};

export default MainRouter;
