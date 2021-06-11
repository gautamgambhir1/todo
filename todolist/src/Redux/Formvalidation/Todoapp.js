import { Button, Input } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

 class Todo extends React.Component{
          constructor(props){
              super(props)
              this.state = {
                temp:'',
                temptwo:'',
                date:''
              }
          }
          render(){
              
              const{Add,Adding,Delete,handlechange,Parent} = this.props
        return (
        <div style = {{backgroundColor:'lightsalmon'}}>
            <div>
           {Parent.map(item =>  <div  style = {{float:'right',fontSize:'1.2rem',fontFamily:'cursive',fontWeight:'bolder'}}>FIRST NAME : {item.fname}<div>LAST NAME : {item.lname}</div><div>PHONE NO. : {item.num}</div></div>)}
           </div>
            <div style = {{backgroundColor: 'darkblue',
        width: '300px',
        lineHeight:'50px',
        border: '15px solid lightgreen',
        padding: '70px',
        marginLeft: '500px'}}>
        <h1 style = {{textAlign:'center',fontFamily:'cursive',color:'red',marginBottom:'50px',fontSize:'40px'}}>Todo List</h1>
        <label></label>
            <input  style = {{width:'100%',lineHeight:'1.5rem',textAlign:'center'}} placeholder = 'Enter Task'  type = 'text' value= {this.state.temp} onChange = {(evt) => this.setState({temp:evt.target.value})}/><br></br>
            <input style = {{width:'100%',lineHeight:'1.5rem',textAlign:'center'}} placeholder = 'Enter Task Description' type = 'text' value= {this.state.temptwo} onChange = {(evt) => this.setState({temptwo:evt.target.value})}/><br></br>
            <input style = {{width:'100%',lineHeight:'1.5rem',textAlign:'center'}}  type = 'date' value= {this.state.date} onChange = {(evt) => this.setState({date:evt.target.value})}/><br></br>
            <Button style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',marginLeft:'100px',fontSize:'1rem',marginTop:'70px',backgroundColor:'red',color:'white'}}  onClick = {() =>{Adding(this.state.temp,this.state.temptwo,this.state.date)}}>Add item</Button>
            </div>

              {Add.map((item,ind )=> <li style = {{textAlign:'center',fontSize:'1.5rem',fontFamily:'fantasy',backgroundColor:'Highlight'}}><input type = 'checkbox' checked = {item.payloadtwo}  onChange = {() =>handlechange(ind)}/>Task = {`${item.temp}  // Description = ${item.temptwo}  // Date = ${item.date}`} <button style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',backgroundColor:'red',color:'white'}}  onClick = {() => Delete(ind)}>DELETE</button></li>)}
              <div style = {{marginTop:'100px',marginLeft:'550px',fontWeight:'bolder',fontSize:'1.2rem'}}>
             <Link  to = '/all'>ALL</Link>
            <Link style = {{marginLeft:'52px'}} to = '/check'>COMPLETED</Link>
            <Link  style = {{marginLeft:'52px'}}  to = '/uncheck'>INCOMPLETE</Link>
            </div>
              
        </div>
        )
}
}
const mapstatetoprops = (state) => {
    return {
        Add:state.details,
        Parent:state.Parentstate
    }
}
const mapdispatchtoprops = (dispatch) =>{
    return {
        Adding:(val,valone,valtwo) =>{dispatch({type:'ADD USER',payload:val,payloadthree:valone,payloadfour:valtwo,payloadtwo:false})},
        Delete:(val) =>{dispatch({type:'DELETE USER',payload:val})},
       handlechange:(val) =>{dispatch({type:'CHECK USER',payload:val})}
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Todo)