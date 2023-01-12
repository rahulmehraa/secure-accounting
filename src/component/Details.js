import React from 'react'
import Header2 from './Header2'

const Details = (props) => {
    console.log(props);
  return (
    <>
        <Header2/>
        <div className='mt-5 pt-5'>
    
            <div className="container-xxl py-6" id="about">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-5">
                                <div className="years flex-shrink-0 text-center me-4">
                                    <h1 className="display-1 mb-0">{props.name1}{props.name2}{props.name3}</h1>
                                    <h5 className="mb-0 text-primary">{props.title1}{props.title2}{props.title3}</h5>
                                </div>
                                <h3 className="lh-base mb-0 text-primary">Helps businesses create professional invoices in just a few clicks</h3>
                            </div>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <p className="mb-3"><i className="bi bi-bag-check text-primary me-3"></i>Afordable Prices</p>
                            <p className="mb-3"><i className="bi bi-bag-check text-primary me-3"></i>High Quality Product</p>
                            <p className="mb-3"><i className="bi bi-bag-check far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                            <button type="button" class="btn btn-outline-primary text-white mt-3 px-5 py-2 bg-button">ViewMore</button>
                    
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-3 mb-4">
                                <div className="col-sm-6">
                                    <img className="img-fluid rounded" src={props.img1}{...props.img1} alt=""/>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid rounded" src={props.img2} alt=""/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h5 className="border-end pe-3 me-3 mb-0 text-primary"> 8+ GST invoicing formats</h5>
                                <h2 className=" fw-bold mb-0 text-primary d-none" data-toggle="counter-up">1234</h2>
                            </div>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                            <div className="d-flex align-items-center mb-3">
                                <h5 className="border-end pe-3 me-3 mb-0 text-primary">100% safe and secure</h5>
                                <h2 className="text-primary fw-bold mb-0 d-none" data-toggle="counter-up">1234</h2>
                            </div>
                            <p className="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* About End */}


        </div>
    </>
    
  )
}

export default Details