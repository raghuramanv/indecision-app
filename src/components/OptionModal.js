import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleModalClose}
    closeTimeoutMS={400}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <h4 className="modal__body">{props.selectedOption}</h4>}
    <button onClick={props.handleModalClose} className="button">Okay</button>
  </Modal>
);

export default OptionModal;