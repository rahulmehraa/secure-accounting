import React from 'react'

import { NavLink } from 'react-router-dom'
//import Header1 from './Header1'
import Counter from './Counter'
import Header2 from './Header2'
import Client from './Client'
import HeaderCrosel from './HeaderCrosel'

const Home = () => {
  
  return (
    
  <>
    <HeaderCrosel/>
    <Header2/>{/*Header Component call here*/}
    
    <Counter/>{/*Counter component call here*/}
   
    
    {/*home-lower section code here*/ }
      <section id="skills" class="skills mt-md-3 mb-md-5">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">

            <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
              <img src="assets/img/slider/sec2.png" class="img-fluid " alt=""/>
            </div>

            <div class="col-lg-6 pt-4 mt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h4 class ="text-primary">SECURE ACCOUNTING IS ONE STOP DESTINATION FOR SOLUTION RELATED TO ACCOUNTING AND INVENTORY MANAGEMENT IN MSMEs.</h4>
              <div class="skills-content mt-2"><i class="bi bi-check2-circle i-class"></i>
                WE AT SECURE ACCOUNTING BUILD AND DEVELOP SOLUTIONS FOR THE RETAILERS, WHOLESALE DISTRIBUTORS AND SERVICE PROVIDERS BESIDES GUARANTEEING BUSINESS REPORTS FOR EVERYONE.
              </div>
              <div class="skills-content mt-3"><i class="bi bi-check2-circle i-class"></i>
                With the use of secure accouting software which we intend to offer you can create professional and elegant looking invoices, quotationspurchase orders, manage your inventory and create ledgers as well.
              </div>
              <div class="skills-content mt-3"><i class="bi bi-check2-circle i-class"></i>
                As more and more businesses are embracing the digital ledgers than before, why wait ?? Come join the digital revolution of accouting, we empower merchants and business houses simplify their needs and requirements !!
              </div>
              <div class="skills-content mt-3"><i class="bi bi-check2-circle i-class"></i>
                We hope you enjoy our product and its services as much as we enjoy offering them to you. If you have any queries, please don’t hesitate to contact us at support@secureaccounting.in
              </div>
            
            </div>

          </div>
        </div>
      </section>
    {/*choose-us section code here*/ }
      <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Why ChooseUs</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="row">
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><img src="assets/img/icons/bag.png" height="90px" alt=""></img></div>
                <h4><a href="/">Generate Invoice And Report</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><img src="assets/img/icons/bill.png" height="90px" alt=""></img></div>
                <h4><a href="/">Manage Inventory</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><img src ="assets/img/icons/budget.png" height="90px" alt="/"></img></div>
                <h4><a href="/">Accounting Made Easy</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
              <div class="icon-box">
                <div class="icon"><img src ="assets/img/icons/debit-card.png" height="90px" alt=""></img></div>
                <h4><a href="/">Payment Faster</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

          </div>

          <div class="row mt-4">
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><img src= "assets/img/icons/invoice.png" height="90px" alt=""></img></div>
                <h4><a href="/">Analyse Bussines Report</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><img src="assets/img/icons/money.png" height="90px" alt=""></img></div>
                <h4><a href="/">Sed ut perspici</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><img src="assets/img/icons/pay.png" height="90px" alt=""></img></div>
                <h4><a href="/">Delivery Challan</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
              <div class="icon-box">
                <div class="icon"><img src="assets/img/icons/taxes.png" height="90px" alt="/"></img></div>
                <h4><a href="/">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    {/*pricing section code here*/ }
      <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Pricing</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className=''>
            <div id="generic_price_table">   
              <section class="price-section">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="generic_content clearfix shadow">
                        <div class="generic_head_price clearfix">

                          <div class="generic_head_content clearfix">
                            <div class="head_bg"></div>
                              <div class="head">
                                <span>TRIAL</span>
                              </div>
                          </div>
                                          
                          <div class="generic_price_tag clearfix">
                              <span class="price">
                                  <span class="fs-4 fw-bold x-price">
                                  <span class="x-price-rate">₹ 8989.6 </span></span><span class="per-month" >Per Month</span> <br/>
                                  <span class="sign">₹</span>
                                  <span class="currency">99</span>
                                  <span class="cent">.99</span>
                                  <span class="month">Per Month</span>
                              </span>
                          </div>

                        </div>                            
                                      
                        <div class="generic_feature_list">
                            <ul>
                                <li><span>2GB</span> Bandwidth</li>
                                <li><span>150GB</span> Storage</li>
                                <li><span>12</span> Accounts</li>
                                <li><span>7</span> Host Domain</li>
                                <li><span>24/7</span> Support</li>
                            </ul>
                        </div>
                                      
                        <div class="generic_price_btn clearfix">
                          <a class="" href="/">View Details</a>
                        </div>

                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="generic_content clearfix shadow">
                        <div class="generic_head_price clearfix">

                          <div class="generic_head_content clearfix">
                            <div class="head_bg"></div>
                              <div class="head">
                                  <span>TRIAL</span>
                              </div>
                          </div>
                                          
                          <div class="generic_price_tag clearfix">
                              <span class="price">
                                  <span class="fs-4 fw-bold x-price">
                                  <span class="x-price-rate">₹ 8989.6 </span></span><span class="per-month" >Per Month</span> <br/>
                                  <span class="sign">₹</span>
                                  <span class="currency">99</span>
                                  <span class="cent">.99</span>
                                  <span class="month">Per Month</span>
                              </span>
                          </div>

                        </div>                            
                                      
                        <div class="generic_feature_list">
                            <ul>
                                <li><span>2GB</span> Bandwidth</li>
                                <li><span>150GB</span> Storage</li>
                                <li><span>12</span> Accounts</li>
                                <li><span>7</span> Host Domain</li>
                                <li><span>24/7</span> Support</li>
                            </ul>
                        </div>
                        
                        <div class="generic_price_btn clearfix">
                            <a class="" href="/">View Details</a>
                        </div>

                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="generic_content clearfix shadow">
                        <div class="generic_head_price clearfix">
                          <div class="generic_head_content clearfix">
                            <div class="head_bg" ></div>
                              <div class="head">
                                  <span>TRIAL</span>
                              </div>
                          </div>
                                          
                          <div class="generic_price_tag clearfix">
                            <span class="price">
                              <span class="fs-4 fw-bold x-price">
                              <span class="x-price-rate">₹ 8989.6 </span></span><span class="per-month">Per Month</span> <br/>
                              <span class="sign">₹</span>
                              <span class="currency">99</span>
                              <span class="cent">.99</span>
                              <span class="month">Per Month</span>
                            </span>
                          </div>
                        </div>                            
                                  
                        <div class="generic_feature_list">
                            <ul>
                                <li><span>2GB</span> Bandwidth</li>
                                <li><span>150GB</span> Storage</li>
                                <li><span>12</span> Accounts</li>
                                <li><span>7</span> Host Domain</li>
                                <li><span>24/7</span> Support</li>
                            </ul>
                        </div>
                    
                        <div class="generic_price_btn clearfix">
                          <a class="" href="/">View Details</a>
                        </div>
                                      
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="generic_content clearfix shadow">
                        <div class="generic_head_price clearfix">
                          <div class="generic_head_content clearfix">
                            <div class="head_bg" ></div>
                              <div class="head">
                                  <span>TRIAL</span>
                              </div>
                          </div>
                                
                          <div class="generic_price_tag clearfix">
                              <span class="price">
                                  <span class="fs-4 fw-bold x-price">
                                  <span class="x-price-rate">₹ 8989.6 </span></span><span class="per-month" >Per Month</span> <br/>
                                  <span class="sign">₹</span>
                                  <span class="currency">99</span>
                                  <span class="cent">.99</span>
                                  <span class="month">Per Month</span>
                              </span>
                          </div>
                                
                        </div>                            
                            
                        <div class="generic_feature_list">
                          <ul>
                            <li><span>2GB</span> Bandwidth</li>
                            <li><span>150GB</span> Storage</li>
                            <li><span>12</span> Accounts</li>
                            <li><span>7</span> Host Domain</li>
                            <li><span>24/7</span> Support</li>
                          </ul>
                        </div>
                            
                        <div class="generic_price_btn clearfix">
                            <a class="" href="/">View Details</a>
                        </div>
                    
                      </div>
                    </div>
                  </div>	
                </div>
              </section>
            </div>
          </div>

        </div>
      </section>
    {/*our-team section code here*/ }
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Our hard working team</h2>
            <h5>Lorem cbjd kkslk ksa kks.
            </h5>
          </div>
        
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="member">
                <div class="member-img">
                  <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>

                <div class="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="member">
                <div class="member-img">
                  <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div class="member">
                <div class="member-img">
                  <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div class="member">
                <div class="member-img">
                  <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href="/"><i class="bi bi-twitter"></i></a>
                    <a href="/"><i class="bi bi-facebook"></i></a>
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    {/*client section code here*/ }
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Our Clients</h2>
            <h5>Lorem cbjd kkslk ksa kks.
            </h5>
          </div>
          <Client/> 
        </div>
      </section>
  </>
  )
}

export default Home