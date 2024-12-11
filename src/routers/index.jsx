import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Auth from "../pages/auth/Auth";
import ProductCreate from "../components/ProductCreate";
import Categories from "../pages/category/Categories";
import CategoryCreate from "../pages/admin/CategoryCreate";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/categories" element={<Categories />} />
          <Route path="/product-create" element={<ProductCreate />} />
          <Route path="/category-create/:id" element={<CategoryCreate />} />
          <Route path="/category-create" element={<CategoryCreate />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
