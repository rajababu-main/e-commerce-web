import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./../components/Header.css";
//import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, Link } from "react-router-dom";
function SignUp() {
  const [mobile, setMobile] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  useEffect(()=>{
    const auth= localStorage.getItem('user');
    if(auth){
      nav('/')
    }
    else{
      nav('/signup')
    }
  })

  const signup = async() =>{
    let result = await fetch("http://localhost:6006/users",{
      method: 'post',
      body:JSON.stringify({
        mobile,
        password,
        email,
        fullName,
      }),
      headers:{
        'Content-Type':"application/json"
      }
    })
    result = await result.json()
    console.log("result", result)
    localStorage.setItem("user",JSON.stringify(result));
    nav('/')
    // if(result){
    //   nav("/")
    // }
  }

  return (
    <Card
      style={{
        width: "480px",
        height: "auto",
        margin: "auto",
        marginTop: "120px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Notes</h1>
        <br></br>

        <TextField
          fullWidth
          id="fullname"
          label="Fullname"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
        />

        <br></br>
        <TextField
          fullWidth
          id="mobile"
          label="Mobile"
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br></br>
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <br></br>

        <Button
          style={{ width: "100%", backgroundColor: "black", color: "white" }}
          variant="contained"
          onClick={signup}
        >
          signUp
        </Button>
        {msg && <p style={{ color: "green" }}>{msg}</p>}
        <Link to="/">login</Link>
      </CardContent>
    </Card>
  );
}

export default SignUp;
