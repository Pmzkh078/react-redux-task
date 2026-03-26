import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import ProductPage from "../features/products/ProductPage";
import TodoPage from "../features/todos/TodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/todos" element={<TodoPage />} />
    </Routes>
  );
};

export default AppRoutes;