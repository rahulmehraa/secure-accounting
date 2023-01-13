import React from 'react'
//import Header1 from './Header1'
import Header2 from './Header2'

const Contact = () => {
  return (
    <>
      <Header2/>
      {/*Contact Code Starts here*/ }
        <div className='mt-5 pt-2 mb-5'>
          <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

              <div class="section-title">
                <h2>Contact</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>

              <div class="row">
                <div class="col-lg-5 d-flex align-items-stretch">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>

                    <div class="email">
                      <i class="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>

                    <div class="phone">
                      <i class="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55s</p>
                    </div>

                    <div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.550998733925!2d85.00591379385872!3d25.6224578192687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed565f7ecb04eb%3A0xfeac56c8e4af9bc7!2sDanapur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1665389344728!5m2!1sen!2sin" width="470" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>

                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="https://formspree.io/f/mjvzoayb" method="post" role="form" class="php-email-form">
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" class="form-control" id="name" required/>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" class="form-control" name="email" id="email" required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="name">Phone</label>
                      <input type="number" class="form-control" name="phone" id="phone" required/>
                    </div>
                    <div class="form-group">
                      <label for="name">Message</label>
                      <textarea class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
                
              </div>

            </div>
          </section>
        </div>
    </>
  )
}

export default Contact