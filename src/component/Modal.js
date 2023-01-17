import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
//import { FaArrowAltCircleUp } from "react-icons/fa";
import { isVisible } from '@testing-library/user-event/dist/utils';
import emailjs, { sendForm } from 'emailjs-com';
const Modal = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    reply_to_phone: ''
  });

  let count = true;

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(toSend));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs.sendForm('service_e0q0xua', 'template_25aquoj', e.target, 'fQSwbm1iuqLKREy1G')
      .then((response) => {
        alert("Success");
      })
      .catch(err => {
        alert(err);
      })
    }
    
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(toSend);
    }
  }, [formErrors]);

  const validate = (vlaues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!vlaues.from_name) {
      errors.from_name = "Name is required!";
    }
    else if (vlaues.from_name.length < 3) {
      errors.from_name = "Enter a valid name!"
    }
    else if (vlaues.from_name.length > 20) {
      errors.from_name = "Enter a valid name!"
    }
    if (!vlaues.reply_to) {
      errors.reply_to = "Email address is required!"
    }
    else if (!regex.test(vlaues.reply_to)) {
      errors.reply_to = "This is not a valid email format!";
    }

    if (!vlaues.reply_to_phone) {
      errors.reply_to_phone = "Phone number is required!"
    }
    else if (vlaues.reply_to_phone.length < 10) {
      errors.reply_to_phone = "Enter a valid phone number!"
    }
    else if (vlaues.reply_to_phone.length > 15) {
      errors.reply_to_phone = "Enter a valid phone number!"
    }
    return errors;
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const setOpenModal = () => {
    setIsVisible(false);
  };

  const ListenToScroll = () => {

    let heightToHidden = 700;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;


    if (count) {
      if (winScroll > heightToHidden) {
        count = false;
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', ListenToScroll);
    return () => window.removeEventListener("scroll", ListenToScroll);
  }, [])

  return (
    <Wraper1>
      {isVisible && (
        <>
          <div className='container1 d-none d-md-block'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success" style = {{color:"#28a745"}}>Message sent successfully !!</div>
            ) : (
              <div className="ui message success"></div>
            )
            }

            <h3 className=' text-center mb-0 mt-2'>Get Free Live Demo</h3>
            <div className='row'>

              <div className='col-md-6'>
                <img src="assets/img/modal-img.webp" height="300px" alt="/" />
              </div>
              <div className='col-md-6'>
                <form className='p-2' onSubmit={onSubmit}>
                  <div class="">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name here" name="from_name" value={toSend.from_name} onChange={handleChange} />
                    <h6 style={{ color: "red" }} className="">{formErrors.from_name}</h6>
                  </div>
                 
                  <div class="">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="reply_to" value={toSend.reply_to} onChange={handleChange} />
                    <h6 style={{ color: "red" }} className="">{formErrors.reply_to}</h6>
                  </div>
                 
                  <div class="">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number" name="reply_to_phone" value={toSend.reply_to_phone} onChange={handleChange} />
                    <h6 style={{ color: "red" }} className="">{formErrors.reply_to_phone}</h6>

                  </div>
                  
                  <button type="submit" className='btn btn-secondary rounded ms-3 mb-4 ms-md-1 p-md-2 ps-md-3 pe-md-3' style={{ backgroundColor: "#ee3287" }}>Send Message</button>
                  <button type="button" class="btn btn-primary ms-3 mb-4" data-dismiss="modal" id="cancelBtn" onClick={() => {
                    setOpenModal()
                  }}>Close</button>
                </form>
              </div>
            </div>

          </div>
        </>
      )}

    </Wraper1>

  )
};

const slideAnim = (top, left) => keyframes`
  100% {
    top: ${top};
    left: ${left};
  }  
`;
const Wraper1 = styled.section`
  .container1 {
    font-size: 1.2rem;
    height:425px;
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
    top:20%;
    left:20%;
    cursor: pointer;
    background: linear-gradient(to bottom, #ace8fc 0%, #f3aed0 100%);
    &.slide {
      animation: ${slideAnim('20px', '30px')} 0.4s ease-in-out forwards;
  
      @media (max-width: ${600}px) {
        .container1{
          height:200px;
          width:300px;
        }
      }  
   }
  
  }
  
    }
  }
  
`;

export default Modal
