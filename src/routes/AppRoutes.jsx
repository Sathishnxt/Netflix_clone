import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../component/Loading";
import ProtectedRoute, { ProtectedRoute2 } from "./ProtectedRoute";

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
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute2>
              <LandingPage />
            </ProtectedRoute2>
          </Suspense>
        }
      />
      <Route
        path="/home"
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
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute2>
              <LoginPage />
            </ProtectedRoute2>
          </Suspense>
        }
      />
      <Route
        path="/signUp"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute2>
              <SignUpPage />
            </ProtectedRoute2>
          </Suspense>
        }
      />
      <Route
        path="/my_list"
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
