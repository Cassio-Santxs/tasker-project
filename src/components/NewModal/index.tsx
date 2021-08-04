import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/cross.svg'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>
          Register your new <span>task</span>
        </h2>

        <input type="text" placeholder="Task" />
        <input type="text" placeholder="Hour" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}
