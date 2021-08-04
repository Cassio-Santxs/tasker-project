import { Container, Content } from './styles'

interface HeaderProps {
  handleTaskModalOpen: () => void
}

export function Header({ handleTaskModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>
          tas<span>ker</span>
        </h1>
        <button type="button" onClick={handleTaskModalOpen}>
          new task
        </button>
      </Content>
    </Container>
  )
}
