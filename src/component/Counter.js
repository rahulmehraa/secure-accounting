import React, { useEffect } from 'react'

const Counter = () => {
  useEffect(() => {
    getCount();
  }, []);

  const getCount = () => {
    const counters = document.querySelectorAll(".count");
    console.log(counters);
    const speed = 200;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);


        const increment = Math.trunc(target / speed);


        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 10);
        }
        else {
          count.innerText = target;
        }
      }
      updateCount();

    });
  }

  // const updated = () => {
  //   var count = document.getElementById("counters_total_business");
  //   count.innerHTML = ++upto;
  //   if (upto === 138) {
  //     clearInterval(counters);
  //   }
  // }
  // let counters = setInterval(updated, 120);
  // let upto = 100;

  return (
    <>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <img src="assets/img/icons/invoice.png" height="80px" className='me-3' alt="/"></img>
                <div>
                  <span data-target="232" class="count" id="counters_total_business">0</span>
                  <p>Total Bussines</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <img src="assets/img/icons/debit-card.png" height="80px" className='me-2'></img>
                <div>
                  <span data-target="531" className="count">0</span>
                  <p>Invoice Created</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <img src="assets/img/icons/pay.png" height="80px" className='me-2'></img>
                <div>
                  <span data-target="1453" className="count">0</span>
                  <p>Cities & Towns </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <img src="assets/img/icons/bag.png" height="80px" className='me-2'></img>
                <div>
                  <span data-target="1234" className="count">0</span>
                  <p>Success Stories</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Counter