
import {Link} from 'react-router-dom'
import Facebook from '../../icons/facebook';
import Google from '../../icons/google';




function Login() {
  
  return (
    <>
      
      <div className="container">
      <div className="wrapper-box ">
        
        <div className="row">
          <div className="column">
            <div className="column-box">
              <h1 className="text-center font-semibold text-lg mb-lg">Sign in</h1>
              <form action="/">

                <div className="form-control">
                  <input className="form-input" type="text" placeholder="Username" />
                </div>
                <div className="form-control mb-1">
                  <input className="form-input" type="password" placeholder="Password" />
                </div>
                <div className="form-control text-left">
                  <input type="checkbox" id="rememberme" />
                  <label htmlFor="rememberme">Remember Me</label>
                </div>
                <div className="form-control mb-1">
                  <button className="text-center font-semibold text-lg mb-lg primary-btn">Sign in</button>
                </div>
                <div className="form-control text-left">
                  <a className="text-white" href="#">Forgot Password?</a>
                </div>
              </form>
              <div className="social-links">
                <div className="line"><span className="line-text">Or</span></div>
                <div className="social-row">
                  <div className="social-column">
                   <a href="#">
                   <Google width="42" height="42" />
                   </a>
                  
                  </div>
                  <div className="social-column">
                  <a href="#">
                    
                    <Facebook width="42" height="42" />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-bg rounded-right">
            <div className="column-box">
              <h2 className="large-text font-bold mb-lg text-lg">GET STARTED NOW</h2>
              <p className="text-md mb-lg">Enter your personal details and start your journey with us.</p>
              <Link className="btn light-btn" to="/dashboard/signup">Sign up</Link>
              
              
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Login;
