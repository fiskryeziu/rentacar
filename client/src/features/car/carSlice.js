import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  cars: [],
  error: '',
}

export const getCars = createAsyncThunk(
  'car/getCars',
  async (rangeValue, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`api/cars?rangeValue=${rangeValue}`)
      return data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCars.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false
        state.cars = action.payload
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export default carSlice.reducer
