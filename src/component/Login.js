import React from 'react'
import Header2 from './Header2'

const Login = () => {
    
    return (
        
        <div>
             <div class="fixed-top">
      <header class="navbar bg-light py-2 border-bottom">
        <div class="container">
            <div class="navbar-header">
                <img src="assets/img/logo-secure.png" alt="Secure Accounting" style={{width:"190px"}}/>
            </div>
            <div class="menu">
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                  <a class="nav-link font-weight-bold" href="https://secureaccounting.in/#contact" style ={{color: "#007bff", textDecoration: "none",backgroundColor: "transparent"}}>Contact Us</a>
                </li>
              </ul>
            </div>
        </div>
      </header>
    </div>
            <div class="container abhi py-0 py-md-5" style={{marginTop:"130px", display:"block"}}>
                <div class="row" style={{flexWrap: "wrap" , marginRight: -"15px", marginLeft: "-15px", alignitems:"center"}}>
                    <div class="col-md-5 ml-auto">
                        <h4 style={{ color: ' #377FB7' }}>A Cloud Based GST Billing, Accounting and Inventory Management Software</h4>
                        <h5 style={{ fontWeight: '500', color: '#F91F97', marginTop: '15px', marginBottom: '15px' }}>Login to Smart | Simple | Secure IMS</h5>
                        <form class="col-md-8 col-sm-8 col-xs-12" style={{ padding: "15px 0" }}>
                            <input type="hidden" name="_token" value="XyQ4LxJ91teOaEIL11Z2pkWroGKAgE86IWW7hs3x" />          <div class="form-group">
                                <input style={{ boxShadow: "", marginBottom:"1rem"}} type="email" class="form-control " name="email" value="" required autocomplete="email" placeholder="Username" id="username" autofocus />
                            </div>
                            <div class="form-group">
                                <input style={{ boxShadow: 'none', marginBottom:"1rem"}} type="password" class="form-control " name="password" required autocomplete="current-password"
                                    placeholder="Password" id="password" />
                            </div>
                            <button type="submit" value="Sign in using our secure server" class="btn btn-primary btn-block text-capitalize">Sign in using our secure server</button>
                        </form>
                        <div class="col-md-8 col-sm-8 col-xs-12">
                            <a href="https://www.secureaccounting.in/password/reset" style={{ color: "#F91F97" }}> Forgot Password?</a>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header p-2">
                                        <h6 class="modal-title" id="exampleModalLabel">Reset Password</h6>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                                            </div>
                                            <button type="submit" class="btn btn-block mt-3" style={{ backgroundColor: "#F91F97", color: "#fff" }}>Send Password Reset Link</button>
                                            <button type="submit" class="btn btn-primary float-right btn-sm mt-3">Click For Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br clear="both" />
                        <a class="btn btn-block text-white" style={{ backgroundColor: "#F91F97", textDecoration: "none", color: "#fff", display:"block", width:"100%"}} href="https://www.secureaccounting.in/#pricing"> Register a new membership </a>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0 text-center ml-auto" style={{ borderLeft: "1px solid #eee" }}>
                        <a href="https://www.secureaccounting.in/#pricing" target="_blank">
                            <img src="https://www.secureaccounting.in/web/img/secureaccounting-banner.jpg" class="img-fluid" style={{ height: "auto", maxHeight: "450px" }} />
                        </a>
                    </div>
                </div>
            </div>
            

{/* <div class="container-fluid p-0 text-center fixed-bottom border-top py-3 bg-light" style={{paddingBottom: "1rem!important",paddingTop: "1rem!important" , marginTop:"1rem"}}>

  <ul class="footer-links">
      <li><a href="#" target="_blank" style={{color: "#333"}}>About Secure Accounting</a></li>
      <li class="muted" style={{color: "#333"}}>.</li>
      <li><a href="#" target="_blank" style={{color: "#333"}}>Terms & Conditions</a></li>
      <li class='muted' style={{color: "#333"}}>.</li>
      <li><a href="#" target='_blank' style={{color: "#333"}}>Privacy Policy</a></li>
      <li class="muted" style={{color: "#333"}}>.</li>
      <li><a href="#" target='_blank' style={{color: "#333"}}>Contact Us</a></li>
      <li class="muted" style={{color: "#333"}}>.</li>
      <li style={{color: "#333"}}>&copy 2022 Secure Accounting</li>
  </ul>
</div> */}
        </div>
    )
}
export default Login