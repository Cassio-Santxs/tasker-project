import styled from 'styled-components'

export const Container = styled.form`

h2 {
  color: var(--black);
  font-size: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
  text-align: center;
}

span {
    color: var(--tertiaryColor);
    border-bottom: 2.5px solid var(--tertiaryColor);
  }

input {
  width: 100%;
  padding: 0.5rem;
  height: 3rem;
  border-radius: 0.25rem;

  border: 1px solid var(--secondaryColor);
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--black);
  }

  & + input {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }

  
}

button[type="submit"] {
  
  padding: 1.15rem 1.5rem;
  
  background: var(--primaryColor);
  color: var(--black);
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  display: flex;
  text-align: center;
  margin: 1rem auto;
  
  

  &:hover {
    filter: brightness(0.9);
  }
}

`