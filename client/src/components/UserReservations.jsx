import React, { useEffect } from 'react'
import ReservationCard from './ReservationCard'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './Spinner'
import Alert from './Alert'
import { getUserReservation } from '../features/reservation/reservationSlice'
import { useNavigate } from 'react-router-dom'

const UserReservations = () => {
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails

  const reservationList = useSelector((state) => state.reservationList)
  const { reservations, error, loading } = reservationList

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/sign-in')
    } else {
      dispatch(getUserReservation())
    }
  }, [dispatch, userInfo, navigate])

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="flex flex-col gap-4 mx-2">
      {error && <Alert variant="alert-error" message={error} />}
      {reservations?.length > 0 &&
        reservations.map((reservation) => (
          <ReservationCard key={reservation._id} reservation={reservation} />
        ))}
    </div>
  )
}

export default UserReservations
