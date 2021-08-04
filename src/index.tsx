import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/tasks', () => {
      return [
        {
          id: 1,
          title: 'Dentist',
          hour: '07:00'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
