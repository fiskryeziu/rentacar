import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const createUser = createAsyncThunk(
  'userCreate/createUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await API.post('api/user/admin/create', config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const adminUserCreateSlice = createSlice({
  name: 'userCreate',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export default adminUserCreateSlice.reducer
