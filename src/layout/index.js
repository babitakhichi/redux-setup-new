import React, { useEffect } from "react";

import PublicLayout from "./publicLayout";
import PrivateLayout from "./privateLayout";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Layout() {
  const profile = useSelector(selectUserData);
  const navigate = useNavigate();
  console.log("profile------------", profile);
  useEffect(() => {
    if (profile) navigate("/profile");
    else navigate("/");
  }, [profile]);

  return <>{profile ? <PrivateLayout /> : <PublicLayout />}</>;
}

export default Layout;
