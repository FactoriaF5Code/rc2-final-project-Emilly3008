import { useState } from 'react';
import { Link } from "react-router-dom";
import "./CheckoutForm.css";

function CheckoutForm() {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    method: "creditCard", 
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    amount: 0,
  });

  const [paymentStatus, setPaymentStatus] = useState("");

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Información de envío</h3>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={shippingInfo.fullName}
          onChange={handleShippingChange}
          required
        />
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={shippingInfo.address}
          onChange={handleShippingChange}
          required
        />
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={shippingInfo.city}
          onChange={handleShippingChange}
          required
        />
        <label htmlFor="postalCode">Código postal:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={shippingInfo.postalCode}
          onChange={handleShippingChange}
          required
        />
        <label htmlFor="country">País:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={shippingInfo.country}
          onChange={handleShippingChange}
          required
        />

        <h3>Información de pago</h3>
        <div>
          <label htmlFor="method">Método de pago:</label>
          <select
            id="method"
            name="method"
            value={paymentInfo.method}
            onChange={handlePaymentChange}
            required
          >
            <option value="creditCard">Tarjeta de crédito</option>
            <option value="paypal">PayPal</option>
           
          </select>
        </div>
        
        {paymentInfo.method === "creditCard" && (
          <>
            <label htmlFor="cardNumber">Número de tarjeta:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              required
            />
            
          </>
        )}
        {paymentInfo.method === "paypal" && (
          <>
            
          </>
        )}

       
        <label htmlFor="amount">Monto a pagar:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={paymentInfo.amount}
          onChange={handlePaymentChange}
          required
        />

        <button type="submit" className="pay-button">Pagar</button>
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
      <Link to="/" className="continue-shopping">Continuar comprando</Link>
    </div>
  );
}

export default CheckoutForm;
