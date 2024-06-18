import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";

function Profile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const remove = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div>
      profile<button onClick={remove}>Remove</button>
    </div>
  );
}

export default Profile;
