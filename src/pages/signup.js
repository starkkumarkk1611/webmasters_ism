import React from "react";
import "./signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../src/pages/assets/plugins/global/plugins.bundle.css"


var options = ["IIT DHANBAD", "Chandigarh University","IIT BOMBAY","IIT KANPUR"];

export default function Signup() {
    return (
      
     
       
    //  <div  classNameName="bg-body">
		
	// 	<div className="d-flex flex-column flex-root">
			
	// 		<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				
	// 			<div className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style={{backgroundColor: "F2C98A"}}>
				
	// 				<div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
					
	// 					<div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
							
	// 						<a href="../../demo16/dist/index.html" className="py-9 mb-5">
	// 							<img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-60px" />
	// 						</a>
							
	// 						<h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{color: "#986923"}}>Welcome to Metronic</h1>
							
	// 						<p className="fw-bold fs-2" style={{color:"#986923"}}>Discover Amazing Metronic
	// 						<br />with great build tools</p>
							
	// 					</div>
					
	// 					<div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style={{backgroundImage: "url(assets/media/illustrations/sketchy-1/13.png)"
    //                 }}>
    //                         <img src="https://assets.telegraphindia.com/abped/2020/Sep/1600357230_aicte.jpg"/>
    //                     </div>
				
	// 				</div>
					
	// 			</div>
			
	// 			<div className="d-flex flex-column flex-lg-row-fluid py-10">
				
	// 				<div className="d-flex flex-center flex-column flex-column-fluid">
					
	// 					<div className="w-lg-600px p-10 p-lg-15 mx-auto">
							
	// 						<form className="form w-100" novalidate="novalidate" id="kt_sign_up_form">
							
	// 							<div className="mb-10 text-center">
									
	// 								<h1 className="text-dark mb-3">Create an Account</h1>
									
	// 								<div className="text-gray-400 fw-bold fs-4">Already have an account?
	// 								<a href="../../demo16/dist/authentication/layouts/aside/sign-in.html" className="link-primary fw-bolder">Sign in here</a></div>
								
	// 							</div>
							
	// 							<button type="button" className="btn btn-light-primary fw-bolder w-100 mb-10">
	// 							<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Sign in with Google</button>
							
	// 							<div className="d-flex align-items-center mb-10">
	// 								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
	// 								<span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
	// 								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
	// 							</div>
								
	// 							{/* <div className="row fv-row mb-7">
								
	// 								<div className="col-xl-6">
	// 									<label className="form-label fw-bolder text-dark fs-6">First Name</label>
	// 									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" />
	// 								</div>
									
	// 								<div className="col-xl-6">
	// 									<label className="form-label fw-bolder text-dark fs-6">Last Name</label>
	// 									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
	// 								</div>
									
	// 							</div> */}
    //                             <div className="fv-row mb-7">
	// 								<label className="form-label fw-bolder text-dark fs-6">Username</label>
	// 								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
	// 							</div>
								
	// 							<div className="fv-row mb-7">
	// 								<label className="form-label fw-bolder text-dark fs-6">Email</label>
	// 								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
	// 							</div>
    //                             <div className="fv-row mb-7">
	// 								<label className="form-label fw-bolder text-dark fs-6">Institue Name</label>
	// 								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
	// 							</div>
    //                             <div className="row fv-row mb-7">
								
	// 								<div className="col-xl-6">
	// 									<label className="form-label fw-bolder text-dark fs-6">Institute Code</label>
	// 									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" />
	// 								</div>
									
	// 								<div className="col-xl-6">
	// 									<label className="form-label fw-bolder text-dark fs-6">State</label>
	// 									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
	// 								</div>
									
	// 							</div>
							
	// 							<div className="mb-10 fv-row" data-kt-password-meter="true">
									
	// 								<div className="mb-1">
										
	// 									<label className="form-label fw-bolder text-dark fs-6">Password</label>
										
	// 									<div className="position-relative mb-3">
	// 										<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
	// 										<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
	// 											<i className="bi bi-eye-slash fs-2"></i>
	// 											<i className="bi bi-eye fs-2 d-none"></i>
	// 										</span>
	// 									</div>
									
	// 									<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
	// 										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
	// 										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
	// 										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
	// 										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
	// 									</div>
									
	// 								</div>
									
	// 								<div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
								
	// 							</div>
							
	// 							<div className="fv-row mb-5">
	// 								<label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
	// 								<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autocomplete="off" />
	// 							</div>
								
	// 							<div className="fv-row mb-10">
	// 								<label className="form-check form-check-custom form-check-solid form-check-inline">
	// 									<input className="form-check-input" type="checkbox" name="toc" value="1" />
	// 									<span className="form-check-label fw-bold text-gray-700 fs-6">I Agree
	// 									<a href="https://yourblogcoach.com/how-to-import-bootstrap-in-react-js/" className="ms-1 link-primary">Terms and conditions</a>.</span>
	// 								</label>
	// 							</div>
								
	// 							<div className="text-center">
	// 								<button type="button" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
	// 									<span className="indicator-label">Submit</span>
	// 									<span className="indicator-progress">Please wait...
	// 									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
	// 								</button>
	// 							</div>
								
	// 						</form>
							
	// 					</div>
						
	// 				</div>
    //                 </div>
                   
    //                 </div>
    //                 </div>
    //                 </div>
    <body class="login-page page-hero">
  <div class="prewiev-hero">
    <img src="https://assets.telegraphindia.com/abped/2020/Sep/1600357230_aicte.jpg" alt="Prewiev" />
  </div>

  <div class="login-form form-hero">
    <div class="form-head">
      <span class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M62.6963 71.5477H68.988C81.5714 71.5477 91.9046 61.256 91.9046 48.6309C91.9046 36.0477 81.6131 25.7143 68.988 25.7143H62.6963" stroke="#F5F5F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M37.738 25.7143H31.488C18.8631 25.7143 8.57143 36.006 8.57143 48.6309C8.57143 61.2143 18.8631 71.5477 31.488 71.5477H37.738" stroke="#F5F5F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33.5714 48.6309H66.9049" stroke="#F5F5F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <h1 class="login-title">Create An Account</h1>
    </div>

    <form onsubmit="return false" class="form">
      <label class="input-hero" for="email">
        <input type="email" name="email" id="email" required />
        <span class="input-name"> Username </span>
        
        <span class="input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
      <label class="input-hero" for="email">
        <input type="email" name="email" id="email" required />
        <span class="input-name"> Email </span>
        
        <span class="input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
      <label class="input-hero password-input" for="password">
        <input type="password" name="password" id="password" required />
        <span class="input-name"> Password</span>
        <span class="input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
      <label class="input-hero" for="email">
        <input type="email" name="email" id="email" required />
        <span class="input-name"> Institute Code </span>
        
        <span class="input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
      <label class="input-hero" for="email">
        <input type="email" name="email" id="email" required />
        <span class="input-name"> State</span>
        
        <span class="input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
      <label for="Institute" ></label>
      <select className="input-hero" name="Inst" id="Institute">
        <option value="" selected>Select Institue</option>
        {
            options.map((inst, ind) => (
                <option value={inst}>{inst}</option>
            ) )
        }
</select>
      <label for="remember" class="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span class="checkbox-cover"></span>
        <span class="checkbox-name"> Remember Me </span>
      </label>

      <button type="submit" class="submit-btn btn">Login</button>

      <div class="form-bottom">
        Don't have account yet?
        <a href="#">Sign Up</a>
      </div>
    </form>
  </div>
</body>
        
        
                  
    );
  }