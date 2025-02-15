import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
    isAuthenticated: false,
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      localStorage.removeItem("userToken");
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
    authCheckComplete: (state) => {
      state.loading = false;
    },
  },
});

export const { login, logout, profile, authCheckComplete } = userSlice.actions;
export default userSlice.reducer;
