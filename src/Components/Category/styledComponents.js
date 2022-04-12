import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;

`;

export const Button = styled.button`
  width: 105px;
  height: 28px;
  margin: 5px 0;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonCards = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 161px;
  height: 172px;
  margin: 5px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 0;
`;

export const Img = styled.img`
  width: 161px;
  height: 109px;
  border-radius: 6px 6px 0px 0px;
`;

export const P = styled.p` 
  font-family: titleFont;
  font-size: 20px;
`;
