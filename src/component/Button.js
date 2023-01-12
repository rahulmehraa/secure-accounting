import React, { useEffect, useState} from 'react'
import styled from "styled-components";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { isVisible } from '@testing-library/user-event/dist/utils';

const Button = () => {
  const [isVisible ,setIsVisible] = useState(false);
  
  const goToBtn = () => {
  window.scrollTo({top:0, left:0 , behaviour: "smooth"});
  };

  const ListenToScroll = () =>{
   
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll > heightToHidden){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll' , ListenToScroll);
    return () => window.removeEventListener("scroll" ,ListenToScroll);
  }, [])
  
  return (
    <Wraper>
      {isVisible && (
      <div className='top-btn' onClick ={goToBtn}>
        <FaArrowAltCircleUp className= "top-btn--icon" />
      </div>
      )}
    </Wraper>
  )};


const Wraper = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #ee3287;
   
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  
    }
  }
`;

export default Button