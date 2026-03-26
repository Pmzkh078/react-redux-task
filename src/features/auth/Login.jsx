import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "./authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const handleChange = ({ target: { name, value } }) => {
    if (error) dispatch(clearError()); 
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(
      loginUser({ username: form.username, password: form.password })
    );
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/products");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status"></span>
            ) : (
              "Login"
            )}
          </button>
          {error && (
            <div className="alert alert-danger mt-3 py-2 text-center" role="alert">
              <small>{error}</small>
            </div>
          )}
        </form>
        
        <div className="mt-3 text-center">
           <small className="text-muted">Try: emilys / emilyspass</small>
        </div>
      </div>
    </div>
  );
};

export default Login;