import styled from 'styled-components';

export const TeacherWrappaer = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: 1rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 75%;
  }
  .display{
    width: 100%;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
      grid-gap: 1rem;
      margin: 1rem auto;
    }
  }
`