import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: initialUser,
  },
  reducers: {
    loginAction: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return (state = {
        ...state,
        userData: { ...action.payload },
      });
    },
    logoutAction: (state) => {
      localStorage.removeItem("user");
      return (state = {
        ...state,
        userData: null,
      });
    },
  },
});

export default authSlice.reducer;
export const { loginAction, logoutAction } = authSlice.actions;

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginAction(data));
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutAction());
  } catch (error) {
    console.log(error);
  }
};

export const selectUserData = (state) => state?.auth?.userData;
