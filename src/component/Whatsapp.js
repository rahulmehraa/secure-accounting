import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const Whatsapp = () => {
    return (
        <Wraper>
            <a href="https://wa.me/917368037520" class="top-btn" target="_blank" >
                <img src='assets/img/watsapp/whatsapp.png' class="top-btn" />
            </a>
        </Wraper>
    )
};


const Wraper = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    

   
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    left:0px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default Whatsapp;