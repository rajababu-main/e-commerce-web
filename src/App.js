import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateComponent from "./components/PrivateComponent";
import { useEffect } from "react";
import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <div>
      <Header />
      <Dashboard />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
