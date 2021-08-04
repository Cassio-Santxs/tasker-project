import styled from 'styled-components'

export const Container = styled.header`

background: var(--primaryColor);

`

export const Content = styled.div`

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 

  h1 {
    font-size: 4.5rem;
  }

  span {
    color: var(--tertiaryColor);
  }


  button {
    font-size: 1.25rem;
    color: var(--black);
    background-color: var(--white);
    border: 3px solid var(--tertiaryColor);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    font-weight: 700;

    transition: all 0.15s;
  }

  button:hover {
    transform: scale(1.05);
  }

`