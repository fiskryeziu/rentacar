import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  success: false,
  error: '',
}

export const reservationToPaid = createAsyncThunk(
  'reservationPaid/reservationToApprove',
  async (id, { rejectWithValue, getState }) => {
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
      const { data } = await API.put(`api/reservation/${id}/paid`, {}, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationToPaidSlice = createSlice({
  name: 'reservationPaid',
  initialState,
  reducers: {
    resetPaidReservation() {
      return { initialState }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(reservationToPaid.pending, (state, action) => {
        state.loading = true
      })
      .addCase(reservationToPaid.fulfilled, (state, action) => {
        state.loading = false
        state.reservation = action.payload
        state.success = true
      })
      .addCase(reservationToPaid.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetPaidReservation } = reservationToPaidSlice.actions
export default reservationToPaidSlice.reducer
