import React from 'react'
import Header2 from './Header2'
const SignUp = () => {
  return (
    
    <div>
      <Header2/>
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-3 text-center mt-5 pt-5'>
            <img src="assets/img/why-us.png" alt="/" height="500px" width="400px"></img>
          </div>
          <div className='col-8 mt-5 pt-5 text-center'>
            <div className='section-signup'>
              <h1>Secure Accounting</h1>
              <h4 className='mt-2 cr-btn p-3'>Create Your Free Account</h4>
              <div class="input-group mb-3 mt-4 text-center">
                <span class="input-group-text" id="basic-addon1">+91</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className='d-flex justify-content-between mt-5'>
                <button type="button" class="btn btn-success p-2">  OTP  </button>
                <button type="button" class="btn btn-primary p-2">Have A/C login?</button>
              </div>
              <p className='mt-5 text-muted'>By clicking Get Started, you agree to our Terms and have read and achnowledge our Privacy Policy.</p>
              <button type="button" class="btn btn-primary p-2">Back to Secure Accounting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
