import React from 'react'
import NavLink from 'react-router-dom'
const Theader = () => {
  return (
    <>
     
  <section id="hero" class="d-flex align-items-center">

    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <div class="row">
        <div class="col-xl-6 ">
        <h1>Secure Accounting</h1>
          <h2 className='text-dark mb-md-5'>A Cloud Based GST Billing, Accounting and Inventory Management Software</h2>
          <div class="input-group">
            <div class="input-group-prepend">
              <a href="#"><span class="input-group-text text-white bg-button p-3" id="inputGroup-sizing-default ">Get Started</span></a>
            </div>
            <input type="text" class="form-control p-3 border border-dark" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Enter Mobile Number'/>
          </div>
          <div className='container margin-auto'>
            <div className='row'>
              <div className='col-md-4'>
                <p className='text-black font-p'>Made With <i class="bi bi-heart-fill text-danger"></i> in India</p>
              </div>
              <div className='col-md-4 '>
                <p className='text-black font-p'><i class="bi bi-patch-check text-danger"></i> ISO Certified</p> 
              </div>
              <div className='col-md-4'>
                <p className='text-black font-p'><i class="bi bi-people-fill text-danger"></i>Customers' Choice</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>

  <main id="main"></main>      



    </>
  )
}

export default Theader