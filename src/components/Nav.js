import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = () => {
    const history = useHistory();
  const activePath = history.location.pathname;
  console.log('active', activePath)
    return (
        <StyledNav>
        <Link id="logo" to="/">Profile</Link>
        <ul>
            <li><Link to="/">About us</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/' ? '50%' : '0%' }}
          />
            </li>
            <li><Link to="/work">Our work</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/work' ? '50%' : '0%' }}
          />
            </li>
            <li><Link to="/contact">Contact us</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/contact' ? '50%' : '0%' }}
          />
            </li>
        </ul>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 10rem; 
background-color:#282828;
a{
    color:white;
    text-decoration:none;
}
#logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  ul{
      display:flex;
      list-style:none;
  }
  li{
      padding-left:10rem;
      position:relative;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  

`;
export default Nav
