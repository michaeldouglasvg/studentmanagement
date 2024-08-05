import styled from 'styled-components';

export const FooterStyles = styled.header`
  width: 100%;
  box-shadow: ${({ theme }) => theme.colors.boxshadow}; 
  position: fixed;
  bottom: 0;
  padding: 1rem;
  background: "#335c6e";
  display: grid;
  place-items: center;
  background:  ${({ theme }) => theme.colors.footer};
`;
