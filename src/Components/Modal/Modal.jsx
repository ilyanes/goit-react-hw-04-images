import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalImage, alt, toggleModal }) => {
  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    const escapeEvent = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', escapeEvent);
    return () => {
      window.removeEventListener('keydown', escapeEvent);
    };
  }, [toggleModal]);

  return createPortal(
    <div className="Overlay" onClick={onBackdropClick}>
      <div className="Modal">
        <img src={modalImage} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
};
Modal.propTypes = {
  modalImage: PropTypes.string,
  alt: PropTypes.string,
  toggleModal: PropTypes.func,
};
