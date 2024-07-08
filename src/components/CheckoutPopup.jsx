import React, { useState, useRef, useEffect } from 'react';

const CheckoutPopup = ({ isOpen, onClose, total }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div ref={popupRef} className='bg-white p-6 rounded-lg max-w-md w-full'>
        <h2 className='text-2xl font-bold mb-4 pb-4 border-b-2'>Payment</h2>

        <div className='mb-4'>
          <p className='mb-2'>Pay With:</p>
          <div className='flex space-x-4'>
            <label className='flex items-center'>
              <input
                type='radio'
                value='card'
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className='mr-2'
              />
              Card
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                value='bank'
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className='mr-2'
              />
              Bank
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                value='transfer'
                checked={paymentMethod === 'transfer'}
                onChange={() => setPaymentMethod('transfer')}
                className='mr-2'
              />
              Transfer
            </label>
          </div>
        </div>

        <div className='mb-4'>
          <label className='block mb-2'>Card Number</label>
          <input
            type='text'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder='1234 5678 9101 1121'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex mb-4 space-x-4'>
          <div className='flex-1'>
            <label className='block mb-2'>Expiration Date</label>
            <input
              type='text'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder='MM/YY'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex-1'>
            <label className='block mb-2'>CVV</label>
            <input
              type='text'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder='123'
              className='w-full p-2 border rounded'
            />
          </div>
        </div>

        <div className='mb-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={saveCard}
              onChange={() => setSaveCard(!saveCard)}
              className='mr-2'
            />
            Save card details
          </label>
        </div>

        <button
          onClick={onClose}
          className='w-full py-2 bg-primary text-white rounded hover:bg-red-700'
        >
          Continue
        </button>

        <p className='text-xs text-gray-500 mt-4'>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPopup;
