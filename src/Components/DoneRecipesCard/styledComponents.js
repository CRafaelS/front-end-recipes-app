import styled from 'styled-components';

export const Image = styled.img`
  display: flex;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 150px;
  width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const ShareButton = styled.button`
  padding: 6px 11px;
  border-radius: 6px;
  margin-left: 5px;
  border: none;
  background: #fd8038;
`;

export const RecipeTitle = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-family: paperNote;
`;

export const TitlesDetails = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-family: CaviarDreamsBold;
`;

export const TextDetails = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-family: CaviarDreamsBold;
  width: 330px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
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
