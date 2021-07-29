import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 40px;
  
  font-family: 'Encode Sans SC', sans-serif;
  position: relative;

  .card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    border: 1px solid lightgray;
    padding: 5px 0 0 10px;
    animation: spinX 0.8s linear normal;
    position: relative;
    height: 330px;
    transition: box-shadow 0.2s;
    width: 100%;
  }

  .card:hover {
    box-shadow: 1px 5px 5px -1px rgba(0, 0, 0, 0.2);
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
    margin: 0 auto;
  }
  
  .infos {
    padding: 20px 0;
  }

  h1 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    font-family: 'Encode Sans SC', sans-serif;
    width: 280px;
    color: #363636;
    height: 50px;
  }

  .prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price-original-price {
    display: flex;
    flex-direction: row;
  }

  .free-shipping {
    margin-right: 20px;
    font-size: 14px;
    color: #4CA752;
  }

  .original_price {
    color: #999999;
    font-size: 12px;
    text-decoration: line-through;
  }

  p {
    margin-top: 5px;
    margin-right: 5px;
    font-size: 17px;
    letter-spacing: 0.4px;
    color: #696969;
  }

  button {
    font-family: 'Encode Sans SC', sans-serif;
    cursor: pointer;
    margin-top: 12px;
    border: none;
    border-radius: 0 0 6px 6px;
    background: #7059BD;
    width: 100%;
    transition: filter 0.3s, background 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    
    img {
      width: 25px;
      margin: 0 auto;
      margin-right: -30px;
    }
    
    p {
      font-size: 14px;
      margin: 0 auto;
      color: white;
    }
  }

  button:active {
    filter: brightness(0.9);
  }

  .svg-icon {
    filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(100%) contrast(119%);
  }

  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #4F4F4F;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 80%;
    left: 50%;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
