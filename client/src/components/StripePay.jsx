import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useParams } from 'react-router-dom'
import API from '../api/api'
import Alert from './Alert'
import { useEffect } from 'react'
import {
  reservationToPaid,
  resetPaidReservation,
} from '../features/reservation/reservationToPaidSlice'
import { getReservation } from '../features/reservation/reservationDetailsSlice'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}
const StripePay = () => {
  const [successPay, setSuccessPay] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const amount = 25

  const dispatch = useDispatch()
  const params = useParams()
  const reservationId = params.id

  const reservationPaid = useSelector((state) => state.reservationPaid)
  const { success } = reservationPaid

  const reservationDetails = useSelector((state) => state.reservationDetails)
  const { reservation } = reservationDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!reservation || reservation._id !== reservationId) {
      dispatch(getReservation(reservationId))
    }
    if (successPay) {
      //dispatch reservation to paid
      dispatch(reservationToPaid(reservationId))
    }
  }, [dispatch, reservationId, successPay, reservation])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: userInfo.name,
        email: userInfo.email,
      },
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await API.post('/api/stripe/payment', {
          amount: Math.round(amount * 100),
          id,
        })

        if (response.data.success) {
          console.log('Successful payment')
          setSuccessPay(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!reservation?.isPaid ? (
        <div className="max-w-md w-full mx-auto mt-20">
          <form onSubmit={handleSubmit}>
            <CardElement options={CARD_OPTIONS} />
            <button className="btn w-full btn-success">Pay</button>
          </form>
        </div>
      ) : (
        <div className="max-w-md w-full mx-auto mt-20">
          <Alert variant="alert-success" message="Successful payment" />
        </div>
      )}
    </>
  )
}

export default StripePay
