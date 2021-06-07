import styled from "styled-components";

export const About = styled.div`
  min-width: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media(max-width:1200px){
    display: block;
    padding: 2rem 2rem;
    text-align:center;
  }
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1200px) {
    padding: 5rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hiden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    img {
      width: 100%;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
