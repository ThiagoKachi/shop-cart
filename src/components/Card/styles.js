import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 40px;
  
  font-family: 'Encode Sans SC', sans-serif;
  position: relative;

  .card {
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 6px;
    border: 1px solid lightgray;
    padding: 5px;
    animation: spinX 0.8s linear normal;
  }

  @keyframes spinX {
    from {
      margin-top: -10px;
      opacity: 0.1;
    }
    to { 
      margin-bottom: 0px;
      opacity: 1;
    }
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

  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #4F4F4F;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 100px;
    left: 580px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;