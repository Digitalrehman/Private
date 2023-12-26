import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Account from "../Pages/Account";
import Carrepair from "../Pages/Carrepair";
import CarsDetail from "../Pages/CarsDetail";
import Pagenotfound from "../Pages/Pagenotfound";
import { Headers } from "../Components/Header";
import Login from "../Pages/Login";
import PrivateRoute from "../Components/Private/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={Headers[0].HomeUrl} element={<Home />} />
        <Route path={Headers[1].HomeUrl} element={<About />} />
        <Route path={Headers[2].HomeUrl} element={<Services />} />
        <Route path="/services/Carrepair" element={<Carrepair />} />
        <Route path={Headers[3].HomeUrl} element={<Account />} />
        <Route path="/services/CarsDetail/:id" element={<CarsDetail />} />
      </Route>
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
};

export default Router;
