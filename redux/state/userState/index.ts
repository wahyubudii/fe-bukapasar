import { CartItemProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserStateProps {
  cart: null | CartItemProps;
}

const initialState: UserStateProps = {
  cart: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<UserStateProps>) => {
      state.cart = action.payload.cart;
    },
    setRemoveCart: (state) => {
      state.cart = null;
    },
  },
});

export const { setCart, setRemoveCart } = userSlice.actions;

export const userReducer = userSlice.reducer;
