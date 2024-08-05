import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 120;
  box-shadow: ${({ theme }) => theme.colors.boxshadow}; 
  .header{
    padding: .1rem .3rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      width: 100%;
      padding: .1rem 1rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      padding: .1rem 13rem;
    }

    .main{
      @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .right-section{
        display: flex;
        align-items: center;
        position: absolute;
        right: .4rem;
        
        .them-icon{
          cursor: pointer;
        }
      }

      .buttons{
        display: flex;
        align-items: center;
        margin-right: 1rem;
      }
    }
  }
`;
