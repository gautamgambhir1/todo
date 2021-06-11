import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { connect } from 'react-redux'



 function Formvalid(props){
     const{user} = props
    const[state,setstate] = useState({})
    const {register,errors,handleSubmit} = useForm()
    const onsubmission = (val) =>{
        console.log(val)
    }
    const add  =() =>{
        user(state)
        props.history.push('/todo')
       
    }
    const handlechange = (evt) =>{
        setstate({...state, [evt.target.name]: evt.target.value})
    }
    
    return(
        <div style = {{backgroundColor:'lightsalmon'}}>
        <div style = {{backgroundColor: 'lightgrey',
        width: '300px',
        lineHeight:'80px',
        border: '15px solid blue',
        padding: '100px',
        marginLeft: '450px'}}>
        
            <form onSubmit = {handleSubmit(onsubmission)}>
                
                <h1 style = {{textAlign:'center',fontFamily:'cursive',color:'black'}}>Login form</h1>
            <label style = {{fontFamily:'cursive'}}>First Name: </label>
            <input style = {{lineHeight:'2rem'}} type = 'text'  onChange = {handlechange} name = "fname" /><br></br>
            <label style = {{fontFamily:'cursive'}}>Last Name :</label>
            <input type = 'text' style = {{lineHeight:'2rem'}} onChange = {handlechange} name = "lname" /><br></br>
            <label style = {{fontFamily:'cursive'}}>Phone no. : </label>
            <input type = 'number' style = {{lineHeight:'2rem'}}  onChange = {handlechange} name = "num"/><br></br>
            <label style = {{fontFamily:'cursive'}}> Password : </label>
            <input type = 'password' style = {{lineHeight:'2rem'}}  name = "psword" /><br></br>
            <button style = {{fontSize:'1.2rem',marginLeft:'80px'}}  type = 'submit' onClick = {() => add()}>Login</button><br></br>
         
            </form>
        </div>
        </div>
    )
}
const mapdispatchtoprops = (dispatch) =>{
     return{
         user:(val) =>{dispatch({type:'ADD',payload:val})}
     }
}
export default connect(null,mapdispatchtoprops)(Formvalid)