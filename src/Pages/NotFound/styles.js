import styled from 'styled-components';

export const Container = styled.div`
  background: #EFF0F2;
  border-radius: 8px;
  box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.2);
  position: relative;

  .logo {
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 50px;
    text-align: center;
    margin-right: 10px;
    font-weight: 700;
    color: #363636;
  }

  img {
    width: 800px;
    margin-left: 25%;
    margin-top: -80px;
  }

  p {
    text-align: center;
    margin-top: -40px;
    margin-bottom: 60px;
    font-family: 'Encode Sans SC', sans-serif;
    color: #363636;
    font-size: 20px;
  }

  .go-home {
    margin-left: 40%;
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Encode Sans SC', sans-serif;
    background: lightgray;
    color: #363636;
    font-weight: 500;
    border-radius: 6px;
    text-decoration: none;
    padding: 10px 50px;
    transition: transform 0.2s, filter 0.2s;

    &:active {
        transform: scale(0.9);
      }
  
    &:hover {
      filter: brightness(0.95);
    }
  }

`;