import { Container, Content } from './styles'
import binImg from '../../assets/bin.svg'

export function Table() {
  return (
    <Container>
      <Content>
        <header>
          <h2>
            <strong>Your schedule for today</strong>
          </h2>
        </header>
        <table>
          <thead>
            <tr>
              <th>
                <strong>Task</strong>
              </th>
              <th>
                <strong>Hour</strong>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Dentist</td>
              <td>07:00</td>
              <input type="checkbox" name="taskHandle" />
              <img src={binImg} alt="bin icon" />
            </tr>

            <tr>
              <td>Homework</td>
              <td>14:00</td>
              <input type="checkbox" name="taskHandle" />
              <img src={binImg} alt="bin icon" />
            </tr>

            <tr>
              <td>Piano</td>
              <td>17:00</td>
              <input type="checkbox" name="taskHandle" />
              <img src={binImg} alt="bin icon" />
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  )
}
