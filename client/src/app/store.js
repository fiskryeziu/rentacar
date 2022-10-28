import { configureStore } from '@reduxjs/toolkit'
import carDetailsReducer from '../features/car/carDetailsSlice'
import carReducer from '../features/car/carSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    carsList: carReducer,
    carDetails: carDetailsReducer,
  },
})
