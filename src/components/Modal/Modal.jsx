import { Overlay, ModalWindow, ModalImg } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { toggleModal } = this.props;
    if (event.code === 'Escape') {
      toggleModal();
    }
  };

  handleBackdropClick = event => {
    const { toggleModal } = this.props;
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props.largeImage;
    const { handleBackdropClick } = this;
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <ModalImg src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
