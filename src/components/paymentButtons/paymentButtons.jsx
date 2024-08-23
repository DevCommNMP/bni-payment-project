import React from 'react';
import "./PaymentButton.css";

const PaymentButtons = ({ titles }) => {
  return (
    <div className='container'>
      {titles && titles.map((title, index) => (
        <button key={index} className='payment-btn'>{title}</button>
      ))}
    </div>
  );
}

export default PaymentButtons;
