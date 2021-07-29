import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .show {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-family: 'Encode Sans SC', sans-serif;
    color: #363636;
    cursor: pointer;
  }

  img {
    width: 8px;
    margin-top: 4px;
    margin-left: 8px;
  }

  div {
    animation: spinX 0.2s linear normal;
    position: absolute;
    overflow-y: scroll;
    height: 70vh;
    width: 280px;
    z-index: 1;
    background: #333333;
    border-radius: 6px;
    margin-top: 15px;
    right: -100px;

    button {
      margin: 0 auto;
      color: white;
      cursor: pointer;
      width: 100%;
      padding: 10px 20px;

      &:first-child {
        margin-top: 10px;
      }
    }

    button:hover {
      background: #7059BD;
    }
  }
    @keyframes spinX {
    from {
      margin-top: 5px;
      opacity: 0.1;
    }
    to { 
      margin-bottom: 0px;
      opacity: 1;
    }
  }
`;
