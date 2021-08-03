import { GlobalStyle } from './styles/global'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  )
}
