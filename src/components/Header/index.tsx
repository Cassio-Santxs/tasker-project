import logoImg from '../../assets/checkbox-checked.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <h1>
          tas<span>ker</span>
        </h1>
        <button type="button">new task</button>
      </Content>
    </Container>
  )
}
