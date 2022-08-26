import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bureas from "../pages/bureas/Bureas";
import History from "../pages/aboutUs/History";
import Messages from "../pages/Messages";
import Leadership from "../pages/leadership/Leadership";
import InitiativesPage from "../pages/initiatives/Initiatives";
import LoginForm from "../componenets/VirtualKeyBoards/LoginForm";
import Analytics from "../componenets/analytics/Analytics";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search/Search";
const RouterConfig = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="bureas" element={<Bureas />} />
      <Route path="about-us">
        <Route path="history" element={<History />} />
      </Route>
      <Route path="Initiatives" element={<InitiativesPage />} />
      <Route path="messages" element={<Messages />} />
      <Route path="leadership" element={<Leadership />} />
      <Route path="loginForm" element={<LoginForm />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="register" element={<Signup />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};

export default RouterConfig;
