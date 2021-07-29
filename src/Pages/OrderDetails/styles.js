import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  .finish-order {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    h1 {
      text-align: center;
      color: #4CA752;
    }

    img {
      width: 30px;
      margin-right: 10px;
    }
  }

  .emptyCart-message {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 18%;
    font-family: 'Encode Sans SC', sans-serif;
    color: #777777;
    font-size: 32px;
    line-height: 42px;

    span {
      font-size: 18px;
      color: #9A9A9A;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    margin-bottom: 10px;
    padding: 20px 40px 20px 10px;
    width: 50%;
    margin: 10px auto;
    border-radius: 6px;
    border: 1px solid #E6E6E6;
    transition: box-shadow 0.2s;

    animation: spinY 0.8s linear normal;
  }

  &:last-child {
    margin-bottom: 100px
  }

  .content:hover {
    box-shadow: 1px 5px 5px -1px rgba(0, 0, 0, 0.2);
  }

  @keyframes spinY {
    from {
      margin-top: -10px;
      opacity: 0.1;
    }
    to { 
      margin-bottom: 10px;
      opacity: 1;
    }
  }

  .products {
    .products-details {
      display: flex;
    }

    img {
      width: 100px;
      margin-right: 10px;
    }

    .product-infos {
      margin-top: 10px;

      h2, h3 {
        font-family: 'Encode Sans SC', sans-serif;
        color: #363636;
      }

      h2 {
        width: 520px;
        font-size: 24px;
      }

      h3 {
        font-size: 20px;
        margin-top: 10px;
        color: #696969;
      }
    }
  }

  .subtotal {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 18px 80px;
    background: white;
    border-top: 2px solid lightgray;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 230px;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid lightgray;
      font-size: 16px;
      font-family: 'Encode Sans SC', sans-serif;
      background: #7059BD;
      color: white;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.2s, filter 0.2s;
    }

    button:active {
      transform: scale(0.99);
    }

    button:hover {
      filter: brightness(0.95);
    }

    p {
      font-family: 'Encode Sans SC', sans-serif;
      color: #363636;
      font-size: 30px;

      span {
        font-size: 16px;
        text-transform: uppercase;
        color: #C0C0C0;
      }
    }
  }
`;