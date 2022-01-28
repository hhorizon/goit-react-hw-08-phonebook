import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function AddModal({ children, closeModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
        console.log('esc');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
}
