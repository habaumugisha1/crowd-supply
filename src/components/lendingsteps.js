import React from "react"


const Lendingsteps = () => {
  return (
      <div>

        <form action="https://formspree.io/f/xoqpkebj" method="POST">
      <section id="studio-header">
         
          <div className="container">
            <div className="row min-vh-70 align-items-center">
              <div className="col-6 offset-2">
              
                <p className="lead mb-0 font-weight-bolder">
                How much to you want to invest in this product? </p>
                <div className="mt-2">
                  <div class="form-group">
                  <div class="input-group input-group-xl border-0">
                  <div class="input-group-prepend">
                   <span class="input-group-text" id="validationTooltipUsernamePrepend">$</span>
                   </div>
                  <input type="text" name="Amount" class="form-control form-control-xl" />
                  </div>
                  </div>
  
                      <a href="#step2" class="btn p-2 btn-purple">Next</a>
                      </div>
              </div>
            </div>
          </div>
        </section>



    <section id="step2">
       
        <div className="container">

          <div className="row min-vh-50 align-items-center">
            <div className="col-12 pb-0  mb-2"> 
              <h1 className=" font-weight-bolder">
              Before you invest, it’s important that you read and understand the information below. </h1>
              </div>
            <div className="col-6">
            <div className="mb-4">
            <p className="lead mb-2 font-weight-bolder">
              Investing is risky </p>
              <p>Investing in early stage companies is risky business. You should be in a financial condition where you can comfortably afford to lose your entire investment. You should always be aware of your personal investment limits.</p>
    
            </div>
            <div className="mb-4">
            <p className="lead mb-2 font-weight-bolder">
              Investing is risky </p>
              <p>Investing in early stage companies is risky business. You should be in a financial condition where you can comfortably afford to lose your entire investment. You should always be aware of your personal investment limits.</p>
    
            </div>
            <div className="mb-4">
            <p className="lead mb-2 font-weight-bolder">
              Investing is risky </p>
              <p>Investing in early stage companies is risky business. You should be in a financial condition where you can comfortably afford to lose your entire investment. You should always be aware of your personal investment limits.</p>
    
            </div>
              
            </div>
            <div className="col-6">
            
            <div className="mb-4">

              <p className="lead mb-2 font-weight-bolder">
              Reselling your investment in Deuce Drone </p> 
              <p>It may be difficult to resell your membership units of Deuce Drone. You may not transfer these securities until one year after they are issued, except under very specific circumstances. Even after the one year holding period, these securities may be difficult to resell.</p>
            </div>

            <div className="mb-4">

              <p className="lead mb-2 font-weight-bolder">
              Reselling your investment in Deuce Drone </p> 
              <p>It may be difficult to resell your membership units of Deuce Drone. You may not transfer these securities until one year after they are issued, except under very specific circumstances. Even after the one year holding period, these securities may be difficult to resell.</p>
            </div>

            <div className="mb-4">

              <p className="lead mb-2 font-weight-bolder">
              Reselling your investment in Deuce Drone </p> 
              <p>It may be difficult to resell your membership units of Deuce Drone. You may not transfer these securities until one year after they are issued, except under very specific circumstances. Even after the one year holding period, these securities may be difficult to resell.</p>
            </div>
            </div>
          </div>
          
          <a href="#step3" class="btn p-2 btn-purple">I understand</a>


        </div>
      </section>

        <section id="step3">
        
        <div className="container">

          <div className="row min-vh-50 justify-content-center align-items-center">
              <div className="col-8 pb-0  mb-2"> 
              <h1 className=" font-weight-bolder">
              How can we contact you? </h1>
              </div>
        <div className="col-8">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">First Name</label>
      <input type="text" className="form-control" name="FirstName" placeholder="First Name" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputLastname4">Last Name</label>
      <input type="text" className="form-control" name="LastName" placeholder="Last Name" />
    </div>
  </div>
  <div className="form-group">
  <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" name="inputEmail4" placeholder="Email" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Phone number</label>
    <input type="text" className="form-control" name="inputAddress2" placeholder="Phone number" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label htmlFor="inputAddress2">Address</label>
    <input type="text" className="form-control" name="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div>
    <div className="form-group col-md-4">
    <label htmlFor="inputAddress2">City</label>
    <input type="text" className="form-control" name="City" placeholder="City" />
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Country</label>
      <input type="text" className="form-control" name="Country" placeholder="Country" />
    </div>
  </div>
  <button type="submit"  value="Send" className="btn btn-primary">Submit</button>


        </div>
</div>
</div>
        </section>
        </form>
      </div>
  
      )
}

export default Lendingsteps