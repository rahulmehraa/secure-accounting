import React from 'react'
import Header2 from './Header2'
import Client from './Client'
const About = () => {
  return (
   
    <>
      <Header2/>{/*header component call here*/ }
        <section id="about" class="about mt-5 mb-5 pt-5 pt-md-none">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>About Us</h2>
            </div>

            <div class="row content">
              <div class="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                  <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
              </div>

              <div class="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="/" class="btn-learn-more">Learn More</a>
              </div>
            </div>

          </div>
        </section>
        {/*team section code here*/ }
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
              <Client/>{/*client component call here*/ }
            </div>

          </div>
        </section>
    </>
  )
}

export default About