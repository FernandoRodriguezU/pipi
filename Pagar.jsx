import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const PagarContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PagarHeader = styled.div`
  background-color: #c0392b;
  color: #fff;
  padding: 1.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const PagarTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
`;

const PagarForm = styled.form`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ error }) => (error ? '#e74c3c' : '#ccc')};
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PaymentMethod = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;

  input {
    margin-right: 0.5rem;
  }
`;

const OrderSummary = styled.div`
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 4px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

const PayButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #c0392b;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a93226;
  }
`;

const Pagar = () => {
  const location = useLocation();
  const total = location.state?.total;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (!name.trim()) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Validate phone
    if (!phone.trim()) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    // Process payment
    if (paymentMethod === 'cash') {
      alert('¡Tu pedido está en camino!');
    } else if (paymentMethod === 'visa') {
      navigate('/pagar-visa', {
        state: {
          total,
          name,
          email,
          phone
        }
      });
    }
  };

  return (
    <PagarContainer>
      <PagarHeader>
        <PagarTitle>Pagar ahora</PagarTitle>
      </PagarHeader>
      <PagarForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Tu nombre</Label>
          <Input
            type="text"
            id="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          {nameError && <ErrorMessage>Por favor, completa este campo.</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          {emailError && <ErrorMessage>Por favor, ingresa un correo electrónico válido.</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Número de teléfono</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Ingresa tu número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={phoneError}
          />
          {phoneError && <ErrorMessage>Por favor, completa este campo.</ErrorMessage>}
        </FormGroup>
        <PaymentMethodContainer>
          <PaymentMethod>
            <input
              type="radio"
              name="payment-method"
              id="visa"
              checked={paymentMethod === 'visa'}
              onChange={() => setPaymentMethod('visa')}
            />
            <span>Visa</span>
          </PaymentMethod>
          <PaymentMethod>
            <input
              type="radio"
              name="payment-method"
              id="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            <span>Dinero en efectivo</span>
          </PaymentMethod>
        </PaymentMethodContainer>
        <OrderSummary>
          <h3>Resumen de la orden</h3>
          <OrderItem>
            <span>Subtotal:</span>
            <span>{total} Bs</span>
          </OrderItem>
          <Total>
            <span>Total:</span>
            <span>{total} Bs</span>
          </Total>
        </OrderSummary>
        <PayButton type="submit">Ir a Pagar</PayButton>
      </PagarForm>
    </PagarContainer>
  );
};

export default Pagar;