import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    Adduser: (state, action) => {
      
      state.data.push({ details: action.payload});
    },
    Loginset: (state, action) => {
      state.data[action.payload].details.auth =true
        
    },
    Logout: (state, action) => {
      state.data[action.payload].details.auth =false
        
    },
  },
});

export default User.reducer;
export const { Adduser,Loginset,Logout } = User.actions;
