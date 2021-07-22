import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    width: 600px;
    padding: 12px;
    border-radius: 4px 0 0 4px;
    border: 1px solid lightgray;
    border-right: 0;
    font-size: 18px;
    color: #363636;
    
    &::placeholder {
      color: gray;
    }

    &:focus {
      border-right: 0;
      outline: none
    }
  }

  button {
    width: 60px;
    border: 1px solid lightgray;
    border-left: 0;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    img {
      width: 28px;
      margin-top: 5px;

      transition: transform 0.04s;

      &:active {
        transform: scale(0.9); 
      }
    }
  }

`;