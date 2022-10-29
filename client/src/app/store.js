import { configureStore } from '@reduxjs/toolkit'
import carDetailsReducer from '../features/car/carDetailsSlice'
import carReducer from '../features/car/carSlice'
import userReducer from '../features/user/userSlice'
import userUpdateReducer from '../features/user/userUpdateSlice'

export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    userUpdate: userUpdateReducer,
    carsList: carReducer,
    carDetails: carDetailsReducer,
  },
})
