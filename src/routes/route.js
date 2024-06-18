import Login from "../pages/Login/index.page";
import Profile from "../pages/Profile/index.page";

export default function route() {
  return [
    {
      path: "/",
      name: "Login",
      key: "/",

      element: <Login />,
    },
    {
      path: "/profile",
      name: "Profile",
      key: "/profile",

      element: <Profile />,
    },
  ];
}
