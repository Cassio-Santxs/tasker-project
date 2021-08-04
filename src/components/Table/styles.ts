import styled from 'styled-components'

export const Container = styled.div`

  
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -10rem;
  border-radius: 5px;

`

export const Content = styled.div`

  
  background: var(--white);
  padding: 2rem;
  border-radius: 0.25rem;

  header {
    border-radius: 0.25rem;
    
    display: flex;
    padding: 1.5rem 0;
    justify-content: center;
    border-bottom: 5px solid var(--secondaryColor);
    font-size: 1.3rem;

    border-radius: 0.25rem;
    margin-bottom: 5rem;
    margin-top: 0rem;

    }

  table {
    border-radius: 0.25rem;
    background: var(--secondaryColor);
    border-collapse: collapse;
    padding-top: 2.7rem;
    width: 100%;
    border-spacing: 0 0.5rem;
    margin-bottom: 1.1rem;
    

    tbody tr {
      border-bottom: 7px solid var(--white);
      border-top: 7px solid var(--white);

      &:first-child {
        border-top: 1rem solid var(--white);

      }
      
    }

    th {
      border-radius: 0.25rem;
      color: var(--black);
      font-weight: 600;
      padding: 1rem 17rem 1rem 1.5rem; 
      font-size: 1.2rem;
      text-align: left;
      line-height: 1rem;
      border-bottom: 7px solid var(--white);
      
      
    }

    td {
      padding: 0.7rem 0rem 0.7rem 1.5rem; 
      line-height: 1rem;
      color: var(--black);
      font-weight: 400;
      text-align: left;
      border-radius: 0.25rem;      
      border-top: 7px solid var(--white);
      

    }

    img {
      margin-top: 0.7rem;
      margin-left: 2rem; 
      cursor: pointer;
      filter: invert(63%) sepia(71%) saturate(4095%) hue-rotate(325deg) brightness(93%) contrast(100%);
      

    }

    input {
      display: inline;
      background: #ffffff;
      cursor: pointer;
      filter: invert(0%) sepia(100%) saturate(130%) hue-rotate(90deg) brightness(1.4);
      
    }
   

  }

`