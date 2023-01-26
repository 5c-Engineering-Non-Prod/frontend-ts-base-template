import React, { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./component/Layout/BaseLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useAppDispatch, useAppSelector } from "./redux/utils/hook";
import { firebaseUpdateUserToken } from "./redux/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const { isUserVerifyLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return dispatch(firebaseUpdateUserToken(user));
      }
    });
  }, []);

  if (isUserVerifyLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
