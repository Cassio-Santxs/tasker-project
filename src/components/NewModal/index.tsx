import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/cross.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewModal({ isOpen, onRequestClose }: ModalProps) {
  const [taskTitle, setTaskTitle] = useState('')
  const [when, setWhen] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const data = {
      taskTitle,
      when
    }

    api.post('/tasks', data)
  }

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

      <Container onSubmit={handleCreateNewTask}>
        <h2>
          Register your new <span>task</span>
        </h2>

        <input
          type="text"
          placeholder="Task"
          value={taskTitle}
          onChange={event => setTaskTitle(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="When"
          value={when}
          onChange={event => setWhen(event.target.value)}
          required
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}
