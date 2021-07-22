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
    }

    img {
      width: 50px;
    }
  }

  span {

  }

  .cart {
    display: flex;
    align-items: center;

    p {
      font-family: 'Encode Sans SC', sans-serif;
      margin-right: 5px;
      color: #363636;
    }

    img {
      width: 30px;
      cursor: pointer;
    }
  }
`;