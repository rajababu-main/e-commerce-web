import React,{useState} from "react";
import axios from 'axios'
//import './login.css'
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useNavigate,Link} from 'react-router-dom'
function Login(){
   
    const [mobile,setMobile]=useState('');
    const [password,setPass]=useState('');
    const [msg,setMsg]=useState('');
    const nav=useNavigate()

    const login = async() =>{
        let result = await fetch("http://localhost:6006/user/login",{
          method: 'post',
          body:JSON.stringify({
            mobile,
            password
          }),
          headers:{
            'Content-Type':"application/json"
          }
        })
        result = await result.json()
        console.log("result", result)
        //localStorage.setItem("user",JSON.stringify(result));
        if(result.name){
        
        }
        else{
            alert("please enter correct details");
        }
      }


    // async function login(){

    // }
    // const login=async (e)=>{
    //    e.preventDefault();
    //     try{
            
    //         const response=await axios.post('http://localhost:6006/user/login',{
    //             mobile,
    //             password
    //         })
    //         if(response.data.message==='login successed'){
    //             setMsg("Welcome!")
    //             setTimeout(()=>{
    //                 const token=response.data.token;
    //                 localStorage.setItem('token',token);
    //                 nav('/dashboard');
    //             },2000)
              
    //         }
    //         else if(response.data.message==='Password is incorrect'){
    //             setMsg("Password is incorrect")
    //         }
    //         else{
    //             setMsg('User Not Found with this phone number or email')
    //         }
            
    //     }catch(error){
    //         console.log("login failed",error)
    //      }
    // }
    return(
        <Card style={{ width: '480px', height:'auto', margin: 'auto', marginTop: '120px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Notes</h1>
                <br></br>
                <TextField fullWidth  id="mobile" label="Mobile" variant="outlined" value={mobile} onChange={(e) => setMobile(e.target.value)} />
               <br></br>
                <TextField  fullWidth  id="password" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPass(e.target.value)} />
                <br></br>
                <Button style={{ width: '100%', backgroundColor: 'black', color: 'white' }} variant="contained" onClick={login}>Login</Button>
                {msg && <p style={{ color: "green" }}>{msg}</p>}
                <Link to="/signup">Signup</Link>
            </CardContent>
        </Card>
    )
}

export default Login