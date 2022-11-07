import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import API from '../api/api'

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
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await API.post('/api/stripe/payment', {
          amount: 1000,
          id,
        })

        if (response.data.success) {
          console.log('Successful payment')
          setSuccess(true)
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
      {!success ? (
        <div className="max-w-md w-full mx-auto mt-20">
          <form onSubmit={handleSubmit}>
            <CardElement options={CARD_OPTIONS} />
            <button className="btn w-full btn-success">Pay</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>success</h2>
        </div>
      )}
    </>
  )
}

export default StripePay
