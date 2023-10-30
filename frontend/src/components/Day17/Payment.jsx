import React from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'; // Add Axios for server communication
import baseUrl from '../../baseUrl';

const stripePromise = loadStripe('pk_test_51NNZZDSEFCFyra1SNSyMBOetGUzcgy2NNbCTnr0wRn9JgB9R577o2Xa9JRU1NBb3f3R61tELnPDRResL4aG1OQrM00XSzKB9js');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create a PaymentIntent on your server
    try {
      const response = await axios.post(`${baseUrl}/payment/create`, {
        amount: 1000, // Provide the amount in cents
        currency: 'inr',
      });
      const { clientSecret } = response.data;

      // Confirm the payment with the clientSecret
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // Include billing details here if needed.
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded');
        alert('Payment Successful')
        // You can perform additional actions here, e.g., submitting the order.
      }
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe} className='globalbtn'>
          Pay
        </button>
      </form>
    </section>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;