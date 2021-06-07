import React from "react";
import styled from 'styled-components'
import {About} from '../styles'
import Toggle from "./Toggle";
const FaqSection = () => {
  return (
    <Faq> 
      <h2>
        Any Question <span>FAQ</span>{" "}
      </h2>
      <Toggle title="How Do I start?">
      <div className="question">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
        
      </div>
      </Toggle>

    <Toggle title="What Products do you offer?">
      <div className="question">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
        
      </div>
      </Toggle>
      <Toggle title="Diferrent Payment Methods">
      <div className="question">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </div>
      </Toggle>

  <Toggle title="Daily Schedule">
<div className="question">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </div>
      </Toggle>
    </Faq>
  );
};
const Faq = styled(About)`
display:block;
span{
  display:block;
}
h2{
  padding-bottom:2rem;
  font-weight:lighter;
  
}
.faq-line{
  background:#cccccc;
  height: 0.2rem;
  margin:2rem 0rem;
  width:100%;
}
.answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
`;
export default FaqSection;
