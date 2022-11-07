import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePay from './StripePay'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51Hssa7Ff16dHM8M3FCu7VWSVOoUrsRC05LZcNPBR1rRhbBuk7W5q8MyZyO5mFplHpeOeLIsSfCu0z2PS8ANTixvx00z7rVq9ki'
)

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePay />
    </Elements>
  )
}

export default StripeContainer
