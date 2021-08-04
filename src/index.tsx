import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    task: Model
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          taskTitle: 'School',
          when: '16:00'
        },
        {
          id: 2,
          taskTitle: 'Chinese class',
          when: '20:00'
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/tasks', () => {
      return this.schema.all('task')
    })

    this.post('/tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('task', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
