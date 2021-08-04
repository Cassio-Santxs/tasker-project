import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewModal } from './components/NewModal'

Modal.setAppElement('#root')

export function App() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

  function handleTaskModalOpen() {
    setIsTaskModalOpen(true)
  }

  function handleTaskModalClose() {
    setIsTaskModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header handleTaskModalOpen={handleTaskModalOpen} />
      <Dashboard />
      <NewModal
        isOpen={isTaskModalOpen}
        onRequestClose={handleTaskModalClose}
      />
    </>
  )
}
