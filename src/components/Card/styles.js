import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 40px;
  
  font-family: 'Encode Sans SC', sans-serif;
  
  .card {
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 6px;
    border: 1px solid lightgray;
  }
  
  img {
    width: 150px;
    height: 150px;
  }
  
  .infos {
    padding: 20px 0;
  }

  h1 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
    font-family: 'Roboto', sans-serif;
  }

  .prices {
    display: flex;
    align-items: flex-start;
  }

  .original_price {
    color: #999999;
    font-size: 12px;
    text-decoration: line-through;
  }

  p {
    margin-top: 2px;
    margin-right: 5px;
    font-size: 20px;
    letter-spacing: 0.4px;
  }

  button {
    font-family: 'Encode Sans SC', sans-serif;
    cursor: pointer;
    padding: 12px 15px;
    margin-top: 12px;
    border: none;
    border-radius: 6px;
    color: black;
    background: lightgray;
    width: 420px;
    transition: filter 0.3s;
  }

  button:active {
    transform: scale(0.99); 
  }

  button:hover {
    filter: brightness(0.95);
  }
`;