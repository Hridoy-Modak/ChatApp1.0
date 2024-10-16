import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logedUserinfo: (state, action) => {
        state.value= action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { logedUserinfo} = userSlice.actions

export default userSlice.reducer