import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-family: 'Encode Sans SC', sans-serif;
      font-size: 30px;
      margin-right: 10px;
      font-weight: 700;
      color: #363636;
      text-shadow: 1px 1px 1px #7059BD;
    }

    img {
      width: 50px;
    }
  }

  .link-button {
    text-decoration: none;
  }

  .cart {
    .image-title {
      display: flex;
      align-items: flex-end;
      position: relative;
      margin-right: 50px
    }

    p {
      font-family: 'Encode Sans SC', sans-serif;
      margin-right: 5px;
      color: #363636;
    }

    img {
      width: 30px;
      cursor: pointer;
      position: absolute;
      top: 6px;
      left: 126px;
    }

    span {
      font-size: 12px;
      margin-left: 40px;
      font-weight: 500;
      font-family: 'Encode Sans SC', sans-serif;
      margin-top: 10px;
      color: #363636;
    }
  }

  .my-cart-title {
    font-size: 34px;
    font-family: 'Encode Sans SC', sans-serif;
    color: #363636;
  }
`;