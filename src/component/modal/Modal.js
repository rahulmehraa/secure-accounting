import React from "react";
import "./modal.css";
import styled from "styled-components";

const Modal = ({ setOpenModal }) => {
    return (
        <Wraper1>
            <>
        <div className='container1 '>
        <button type="button" class="btn btn-primary ms-3 mb-4" data-dismiss="modal" id="cancelBtn" onClick={() => { setOpenModal(false) }}>X</button>
        <h3 className=' text-center mb-0'>Get Free Live Demo</h3>
        <div className='row'>
    
            <div className='col-md-6'>
                <img src="assets/img/modal-img.webp" height="300px" alt="/" />
            </div>
            <div className='col-md-6'>
                <form className='p-2'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name here" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number" />
                    </div>
                    <button type="button" class="btn btn-warning mb-4">Contact</button>
                    <button type="button" class="btn btn-primary ms-3 mb-4" data-dismiss="modal" id="cancelBtn" onClick={() => {
                        setOpenModal(false)
                    }}>Close</button>
                </form>
            </div>
        </div>
    
    </div>
    </>
    </Wraper1>
    );
};

const Wraper1 = styled.section`

  .container1 {
    font-size: 1.2rem;
    height:400px;
    width:650px;
    font-weight:700;
    border:7px solid deeppink;
    color: black;
    position: fixed;
    bottom: 10rem;
    right: 30rem;
    z-index: 999;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(to bottom, #ace8fc 0%, #f3aed0 100%);
    
    }
    
  }
  
    }
  }
  @media only screen and (max-width: 500px) {
    .container1{
      font-size: 1.2rem;
      height:400px;
      width:500px;
      bottom:50px;
  }
`;


export default Modal;


