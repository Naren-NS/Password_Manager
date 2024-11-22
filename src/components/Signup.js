import React, {Component} from 'react';
export default class Signup extends Component{


    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            cpassword:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {name,email,password,cpassword} = this.state;
        console.log(name,email,password,cpassword);
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                name,
                email,
                password,
                cpassword
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
        })
    

   
  };

    render() {
  return (
    
        <form onSubmit={this.handleSubmit}>
        <div>
            <section>
                <div className="imgBx">
                    {/* <img src="For Login Page.jpg"> */}
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2><br/><br/>Sign Up</h2>
                        
                            <div className="inputBx">
                                <span>Email Address</span>
                                <input type="text" name=""
                                onChange={(e)=>this.setState({email:e.target.value})} />
                            </div>
                            <div className="inputBx">
                                <span>Username</span>
                                <input type="text" name=""
                                onChange={(e)=>this.setState({name:e.target.value})}/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Password</span>
                                <input type="password" name=""
                                onChange={(e)=>this.setState({password:e.target.value})}/>
                            </div>
                            <div className="inputBx">
                                <span><br/>Confirm Password</span>
                                <input type="password" name=""
                                onChange={(e)=>this.setState({cpassword:e.target.value})}/>
                            </div>
                            <div className="remember">
                                <br/><br/>
                                <label><input type="checkbox" name=""/> I have read and agreed to the terms and conditions</label>
                            </div>
                            <div className="inputBx">
                                <button type="submit" className="c">
                                    Sign Up
                                </button>
                            </div>
                            <div className="inputBx">
                                <p>Have an account already? <CustomLink href='/Login'>Sign In</CustomLink></p>
                            </div>
                        
                    </div>
                </div>
            </section>
        </div>
        </form>

  )
}
}

function CustomLink({ href,children, ...props }) {
    const path = window.location.pathname
    return(
        <div className={path === href ? "active":""}>
            <a href={href} {...props}>{children}</a>
        </div>
    )
}