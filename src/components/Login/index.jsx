import React, { useState } from "react";
import './login.css';
import firebase from "../../config/Firebase"
import Crumb from "../utils/Crumb";
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = e =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
  }
  return (
    <section>
      <Crumb name="Login" /> 
      <div className="main-wrap">
      <form className="login-main" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" className="box1 border1" />
        <input type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)} className="box1 border2" />
        <button className="send">Login</button>
      </form>
    </div>
    </section>
  );
};

export default Login;
