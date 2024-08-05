import styled from 'styled-components';

export const BodyWrapper = styled.header`
  width: 100%;
  margin: 1rem auto;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 75%;
    margin: 2rem auto;
  }
`;

export const MainDisplayContainer = styled.section`
  width: 100%;
`

export const HomeWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: .5rem;
  .heading{
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    margin: 1rem auto;
    font-weight: bold;
    text-align: center;
  }
  .homecontent{
    font-size: clamp(1rem, 1vw, 1.5rem);
    line-height: 2rem;
    text-align: center;
  }
  .button-container{
    display: flex;
    align-items: center;
    justify-content: center;
    .single-button{
      margin-right: 1rem;
    }
  }
  .image-container{
    margin-top: 2rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 75%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    grid-gap: 1rem;
    margin: 6rem auto;
    .home-content{
      width: 100%;
    }
    .image-container{
      width: 100%;
      height: 350px;
      .image{
        width: 100%;
        height: 100%;
      }
    }
    .button-container{
      width: 100%;
      margin-top: 1rem;
      .single-button{
        margin-right: 1rem;
      }
    }
    .heading{
      text-align: left;
    }
    .homecontent{
      text-align: left;
      line-height: 2.5rem;
    }
    .button-container{
      justify-content: flex-start;
      .single-button{
        margin-right: 1rem;
      }
    }
  }
`

export const SearchContainer = styled.section`
  width: 100%;
  position: relative;
  .searchresults {
    width: 100%;
    background: white;
    padding: .6rem;
    max-height: 40vh;
    overflow-y: scroll;
    position: absolute;
    top: 4.5rem;
    box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
    z-index: 100;
    border-radius: 5px;
    ul{
      width: 100%;
    }
  }
`