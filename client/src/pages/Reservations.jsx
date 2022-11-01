import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReservations } from '../features/reservation/reservationListSlice'
import { TbCircleX, TbCircleCheck } from 'react-icons/tb'
import {
  reservationToApprove,
  resetApproveReservation,
} from '../features/reservation/reservationApproveSlice'

const Reservations = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const reservationList = useSelector((state) => state.reservationList)
  const { reservations } = reservationList

  const reservationApprove = useSelector((state) => state.reservationApprove)
  const { success } = reservationApprove
  useEffect(() => {
    if (userInfo || success) {
      dispatch(resetApproveReservation())
      dispatch(getAllReservations())
    }
  }, [dispatch, userInfo, success])

  const deleteHandler = (id) => {
    dispatch(reservationToApprove(id))
  }
  return (
    <div className="overflow-x-auto mb-20">
      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
            <th></th>
            <th>CarId</th>
            <th>Car</th>
            <th>Cost</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Paid</th>
            <th>Approved</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 &&
            reservations.map((reservation, index) => (
              <tr key={reservation._id}>
                <th>{index + 1}</th>
                <td>{reservation.reservationItem.car}</td>
                <td>{reservation.reservationItem.name}</td>
                <td>{reservation.totalCost}</td>
                <td>{reservation.user.name}</td>
                <td>{reservation.user.phoneNumber}</td>
                <td>
                  {reservation.isPaid ? (
                    <TbCircleCheck className="text-2xl text-success" />
                  ) : (
                    <TbCircleX className="text-2xl text-error text-center" />
                  )}
                </td>
                <td>
                  {reservation.isApproved ? (
                    <TbCircleCheck className="text-2xl text-success" />
                  ) : (
                    <TbCircleX className="text-2xl text-error text-center" />
                  )}
                </td>
                <td>
                  {!reservation.isApproved && (
                    <button
                      className="btn btn-outline btn-xs btn-warning"
                      onClick={() => deleteHandler(reservation._id)}
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>CarId</th>
            <th>Car</th>
            <th>Cost</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Paid</th>
            <th>Approved</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Reservations
