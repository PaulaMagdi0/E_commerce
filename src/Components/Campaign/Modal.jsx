import React from 'react';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src="https://st2.depositphotos.com/3643473/6063/i/600/depositphotos_60638169-stock-photo-person-with-megaphone-and-words.jpg" alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>This is The Promo Code</p>
            <p>For Discount</p>
          </div>
          <div className='btnContainer'>
            <button className='btnOutline'>
              <span className='bold'>Discount</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
