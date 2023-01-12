import React from 'react'
const Footer = () => {
  return (

  <>
    <div className='container-fluid footer-color'>
      <div className="container">
        <footer className="pt-4 py-3">
          <div className="row">
          <div className="col-md-3">
             <img src="assets/img/logo-secure.png" className='img-fluid'></img>
             <h6 className='mt-2 text-dark'>We at secure accounting build and develop solutions for the retailers, wholesale distributors and service providers besides guaranting business reports for everyone.
             </h6>
            </div>
            <div className="col-md-3 mt-3 mt-md-none">
              <h5>Useful-Links</h5>
              <ul className="nav flex-column ms-4">
                <li className="nav-item mb-2"><a href="/home" className="nav-link p-0 text-dark"><i class="bi bi-caret-right-fill"></i>Home</a></li>
                <li className="nav-item mb-2"><a href="/feature" className="nav-link p-0 text-dark"><i class="bi bi-caret-right-fill"></i>About</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-dark"><i class="bi bi-caret-right-fill"></i>Pricing</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-dark"><i class="bi bi-caret-right-fill"></i>Features</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-dark"><i class="bi bi-caret-right-fill"></i>Contact</a></li>
              </ul>
            </div>

            <div className="col-md-3 mt-3 mt-md-none">
              <h5>Contact-Us</h5>
              <h6 className='text-dark'>Korawan India Multiventure Ltd - IT</h6>
              <h6 className='text-dark'>PGS More, Khagaul Rd,</h6>
              <h6 className='text-dark'>Danapur, Bihar 801503</h6>
              <p class="fw-bold">Phone :  <a href="tel:+917973577753" class="text-dark"> +91 7973577753</a> </p>
              <p class="fw-bold">Email: <a href="mailto:support@secureaccounting.in" class="text-dark">support@secureaccounting.in</a></p>
            </div>
            

            <div className="col-md-3 mt-3 mt-md-none">
              <a href="/">
                <img src="https://www.secureaccounting.in/web/img/startup-india.png" class="img-fluid w-75" alt=""/>
              </a>
              <a href="/" className=''>
              <img src="https://www.secureaccounting.in/web/img/vocal.png" class="img-fluid w-75" alt=""/>
              </a>
              
            </div>

            
          </div>
       
          <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
            <h6 className='mt-2'>© 2022 Company, Inc. All rights reserved.</h6>
            <h6 className='mt-2'>Designed And Developed by <a href="">KIMLIT</a></h6>
          </div>
       
        </footer>
      </div>
    </div>
  </>
    
  
)
}

export default Footer