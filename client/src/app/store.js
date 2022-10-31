import { configureStore } from '@reduxjs/toolkit'
import carDetailsReducer from '../features/car/carDetailsSlice'
import carReducer from '../features/car/carSlice'
import reservationApproveReducer from '../features/reservation/reservationApproveSlice'
import reservationListReducer from '../features/reservation/reservationListSlice'
import reservationReducer from '../features/reservation/reservationSlice'
import userReducer from '../features/user/userSlice'
import userUpdateReducer from '../features/user/userUpdateSlice'

export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    userUpdate: userUpdateReducer,
    carsList: carReducer,
    carDetails: carDetailsReducer,
    reservationUser: reservationReducer,
    reservationList: reservationListReducer,
    reservationApprove: reservationApproveReducer,
  },
})
