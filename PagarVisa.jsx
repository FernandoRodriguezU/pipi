import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const PagarVisaContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PagarVisaHeader = styled.div`
  background-color: #c0392b;
  color: #fff;
  padding: 1.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const PagarVisaTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
`;

const PagarVisaForm = styled.form`
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

const DateInput = styled(Input)`
  width: auto;
  min-width: 200px;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: #f0f0f0;
      border-radius: 4px;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
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

const PagarVisa = () => {
  const location = useLocation();
  const { total, itemsCarrito } = location.state || {};
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expirationDateError, setExpirationDateError] = useState(false);
  const [securityCodeError, setSecurityCodeError] = useState(false);
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleSecurityCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setSecurityCode(value);
    }
  };

  const validateExpirationDate = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date);
    return inputDate > currentDate;
  };

  // Calcular el rango de fechas permitido (desde 1995 hasta 10 años en el futuro)
  const minDate = '1995-01-01';
  const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!cardNumber.trim() || cardNumber.length !== 16) {
      setCardNumberError(true);
      hasError = true;
    } else {
      setCardNumberError(false);
    }

    if (!expirationDate || !validateExpirationDate(expirationDate)) {
      setExpirationDateError(true);
      hasError = true;
    } else {
      setExpirationDateError(false);
    }

    if (!securityCode.trim() || securityCode.length !== 3) {
      setSecurityCodeError(true);
      hasError = true;
    } else {
      setSecurityCodeError(false);
    }

    if (!hasError) {
      alert('¡Tu pedido está en camino!');
      navigate('/');
    }
  };

  return (
    <PagarVisaContainer>
      <PagarVisaHeader>
        <PagarVisaTitle>Pagar con Visa</PagarVisaTitle>
      </PagarVisaHeader>
      <PagarVisaForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="card-number">Número de tarjeta</Label>
          <Input
            type="text"
            id="card-number"
            placeholder="Ingresa el número de tu tarjeta"
            value={cardNumber}
            onChange={handleCardNumberChange}
            error={cardNumberError}
            maxLength="16"
          />
          {cardNumberError && <ErrorMessage>Por favor, ingresa un número de tarjeta válido (16 dígitos).</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="expiration-date">Fecha de vencimiento</Label>
          <DateInput
            type="date"
            id="expiration-date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            error={expirationDateError}
            min={minDate}
            max={maxDate}
          />
          {expirationDateError && <ErrorMessage>Por favor, selecciona una fecha de vencimiento válida.</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="security-code">Código de seguridad (CVV)</Label>
          <Input
            type="text"
            id="security-code"
            placeholder="CVV"
            value={securityCode}
            onChange={handleSecurityCodeChange}
            error={securityCodeError}
            maxLength="3"
          />
          {securityCodeError && <ErrorMessage>Por favor, ingresa un código de seguridad válido (3 dígitos).</ErrorMessage>}
        </FormGroup>
        <PayButton type="submit">Pagar con Visa</PayButton>
      </PagarVisaForm>
    </PagarVisaContainer>
  );
};

export default PagarVisa;