import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {},
})

export default userSlice.reducer
