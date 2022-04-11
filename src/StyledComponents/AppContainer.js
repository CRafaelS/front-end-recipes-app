import styled from 'styled-components';

export default styled.div`
width: ${(props) => props.theme.width};
height: ${(props) => props.theme.height};
background: url(${(props) => props.theme.background});
background-size: cover;
`;
