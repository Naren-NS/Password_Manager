import React from 'react'
import {useNavigate} from "react-router-dom"
export default function Login() {

    const navigate = useNavigate();
    const navigateToSignup = () => {
    navigate('/signup');
  };


  const nav = useNavigate();
  const navToHomepage = () => {
  nav('/homepage');
};


  return (
    <>

        <div>
            <section>
                <div className="imgBx">
                    {/* <img src="For Login Page.jpg"> */}
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2>Login</h2>
                        <form>
                            <div className="inputBx">
                                <span>Username</span>
                                <input type="text" name=""/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Password</span>
                                <input type="password" name=""/>
                            </div>
                            <div className="remember">
                                <label><input type="checkbox" name=""/> Remember me</label>
                            </div>
                            <div className="inputBx">
                                <button type="submit" className="c" onClick={navToHomepage}>
                                    Log In
                                </button>
                            </div>
                            <div class="inputBx">
                        <p><br/>Dont't have an account? <a onClick={navigateToSignup}>Sign up</a></p>
                    </div>
                        </form>
                    </div>
                </div>
            </section>  
        </div>    
    </>
  )
}
