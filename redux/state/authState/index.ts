import { UserProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthStateProps {
  user: null | UserProps;
  token: null | string;
}

const initialState: AuthStateProps = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<AuthStateProps>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export const authReducer = authSlice.reducer;
