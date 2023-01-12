import React from 'react'
import Header2 from './Header2'
import { NavLink } from 'react-router-dom'
const Feature = () => {
  return (
    <>
      <Header2/>
      <div className='mt-5 pt-2'>
          
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Our Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><img src="assets/img/icons/idea (1).png" height="90px" alt="/"></img></div>
              <h4><NavLink to="/gst-billing">Create And Share GST Invoice E-WayBills & Customer</NavLink></h4>
              <p className='d-none'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><img src="assets/img/icons/bill.png" height="90px" alt="/"></img></div>
              <h4><NavLink to="/inventory-details">Manage And Check Our Inventory Instantly</NavLink></h4>
              <p className='d-none'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><img src ="assets/img/icons/features.png" height="90px" alt="/"></img></div>
              <h4><a href="/purchase-details">Manage And Crack Purchase,Expenses And Ledgers</a></h4>
              <p className='d-none'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><img src ="assets/img/icons/debit-card.png" height="90px" alt="/"></img></div>
              <h4><a href="/gst-billing">Send Gentle Payment Remainder To Customer</a></h4>
              <p className='d-none'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

        <div class="row mt-4">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><img src= "assets/img/icons/invoice.png" height="90px" alt="/"></img></div>
              <h4><a href="/gst-billing">Keep A Live Track of Bussiness Report</a></h4>
              <p className='d-none'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><img src="assets/img/icons/key-features.png" height="90px" alt="/"></img></div>
              <h4><a href="/gst-billing">Make Your GST Filling Simpler And Faster</a></h4>
              <p className='d-none'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><img src="assets/img/icons/pay.png" height="90px" alt="/"></img></div>
              <h4><a href="/gst-billing">Multiple Language Support</a></h4>
              <p className='d-none'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><img src="assets/img/icons/taxes.png" height="90px" alt="/"></img></div>
              <h4><a href="/gst-billing">Easy Data Transfer</a></h4>
              <p className='d-none'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
      </div>
    </>
  )
}

export default Feature