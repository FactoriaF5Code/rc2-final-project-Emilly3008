import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./CheckoutForm.css";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    // Aquí enviarías el ID del pago a tu servidor para procesarlo con Stripe
    console.log('PaymentMethod:', paymentMethod);

    setIsPaid(true);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? 'Procesando...' : 'Pagar'}
      </button>
      {error && <div>{error}</div>}
      {isPaid && <div>¡Pago exitoso!</div>}
    </form>
  );
}

export default CheckoutForm;
