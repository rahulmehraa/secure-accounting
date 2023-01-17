import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCrosel = () => {
  return (
    <div className='carol'>
      <div id="carouselExampleControls" className="carousel slide h-25 carol" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" id="hero">
            <img src="assets/img/banner/banner.png" className="d-md-block w-100 img-fluid d-none" alt="..."/>
            <div className='container-carol animate__animated animate__backInUp'>
        
              <h1 className='text-primary'>Secure Accounting</h1>
                <h2 className='text-dark mb-md-5'>A Cloud Based GST Billing, Accounting and Inventory Management Software</h2>
                <Link to="/signup">
                  <button type="button" class="btn btn-lg mt-3 mt-md-none cr-btn" >Create Your Free Acount <i class="bi bi-arrow-right-circle ms-3"></i></button>
                </Link>

                <div class="input-group d-none">
                  <div class="input-group-prepend">
                    <a href="/"><span class="input-group-text text-white bg-button p-3" id="inputGroup-sizing-default ">Get Started</span></a>
                  </div>
                  <input type="text" class="form-control p-3 border border-dark d-none" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Enter Mobile Number'/>
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
          <div className="carousel-item" id="hero">
            <img src="assets/img/banner/banner.png" className="d-md-block w-100 img-fluid d-none" alt="..."/>
            <div className='container-carol animate__animated animate__backInUp'>
        
              <h1 className='text-primary'>Secure Accounting</h1>
                <h2 className='text-dark mb-md-5'>A Cloud Based GST Billing, Accounting and Inventory Management Software</h2>
                
                <button type="button" class="btn cr-btn btn-lg mt-3 mt-md-none">Create Your Free Acount <i class="bi bi-arrow-right-circle ms-3"></i></button>
                <div class="input-group d-none">
                  <div class="input-group-prepend">
                    <a href="/"><span class="input-group-text text-white bg-button p-3" id="inputGroup-sizing-default ">Get Started</span></a>
                  </div>
                  <input type="text" class="form-control p-3 border border-dark d-none" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Enter Mobile Number'/>
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
          <div className="carousel-item" id="hero">
            <img src="assets/img/banner/banner.png" className="d-md-block w-100 img-fluid d-none" alt="..."/>
            <div className='container-carol animate__animated animate__backInUp'>
        
              <h1 className='text-primary'>Secure Accounting</h1>
                <h2 className='text-dark mb-md-5'>A Cloud Based GST Billing, Accounting and Inventory Management Software</h2>
                <button type="button" class="btn cr-btn btn-lg mt-3 mt-md-none">Create Your Free Acount <i class="bi bi-arrow-right-circle ms-3"></i></button>
                <div class="input-group d-none">
                  <div class="input-group-prepend">
                    <a href="/"><span class="input-group-text text-white bg-button p-3" id="inputGroup-sizing-default ">Get Started</span></a>
                  </div>
                  <input type="text" class="form-control p-3 border border-dark d-none" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Enter Mobile Number'/>
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
     
    </div>
  )
}

export default HeaderCrosel
