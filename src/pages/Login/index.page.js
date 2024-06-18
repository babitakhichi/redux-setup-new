import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUserData } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const profile = useSelector(selectUserData);
  const navigate = useNavigate();
  console.log("profile,", profile);
  const addDetaild = () => {
    dispatch(login({ name: "babita", email: "babita@mailinator.com" }));
    navigate("/profile");
  };

  return (
    <div className="App">
      <button onClick={addDetaild}>Add</button>
    </div>
  );
}

export default Login;
