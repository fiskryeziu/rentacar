import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  loading: false,
  userInfo: user ? user : null,
  error: '',
}

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await API.post('api/user/login', userData, config)
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data))
      }
      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = ''
      state.userInfo = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { reset } = userListSlice.actions
export default userListSlice.reducer
