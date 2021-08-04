import { Container, Content } from './styles'
import binImg from '../../assets/bin.svg'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Task {
  id: number
  taskTitle: string
  when: string
}

export function Table() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    api.get('/tasks').then(response => setTasks(response.data.tasks))
  }, [])

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
                <strong>When</strong>
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.taskTitle}</td>
                <td>{task.when}</td>
                <input type="checkbox" name="taskHandle" />
                <img src={binImg} alt="bin icon" />
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  )
}
