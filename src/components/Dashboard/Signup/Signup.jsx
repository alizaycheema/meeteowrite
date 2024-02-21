import {Link } from 'react-router-dom'
import Facebook from '../../icons/facebook';
import Google from '../../icons/google';

function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
     
      <div className="container">
        <div className="wrapper-box ">

          <div className="row">
            <div className="column column-bg rounded-left">
              <div className="column-box">
                <h2 className="large-text font-bold mb-lg text-lg">WELCOME BACK</h2>
                <p className="text-md mb-lg">To keep connected with us please login with your personal information.</p>
                <Link className="btn light-btn" to='/dashboard/login'>Sign in</Link>
              </div>
            </div>
            <div className="column">
              <div className="column-box">
                <h1 className="text-center font-semibold text-lg mb-lg">Create Account</h1>
                <form action="/" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <input className="form-input" type="email" placeholder="Email" />
                  </div>
                  <div className="form-control">
                    <input className="form-input" type="text" placeholder="Username" />
                  </div>
                  <div className="form-control mb-1">
                    <input className="form-input" type="password" placeholder="Password" />
                  </div>
                  
                  <div className="form-control mb-1">
                    <button className="btn primary-btn" type="submit">Signup</button>
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

          </div>
        </div>
      </div>

    </>
  )
}

export default Signup;
