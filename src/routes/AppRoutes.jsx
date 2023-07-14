import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../component/Loading";
import ProtectedRoute, {
  ProtectedRouteForUnAuthorizedPage,
} from "./ProtectedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage "));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const MyListPage = lazy(() => import("../pages/MyListPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const PageNotFounded = lazy(() => import("../pages/PageNotFounded"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <LandingPage />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/home"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <LoginPage />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/signUp"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <SignUpPage />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/my_list"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <MyListPage />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/search"
        exact
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <PageNotFounded />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
