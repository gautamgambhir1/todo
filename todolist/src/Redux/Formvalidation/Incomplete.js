import React from 'react'
import { connect } from 'react-redux'


const Incomplete = (props) =>{
    const {check} = props
    const handlecom = () =>{
        props.history.push('/check')
    }
   const handleincom = () =>{
        props.history.push('/all')
    }
    return (
        <div>
            <h1 style = {{textAlign:'center',fontFamily:'cursive',color:'red',marginBottom:'50px',fontSize:'40px'}}>Incompleted Tasks</h1>
            <button style = {{backgroundColor:'red',color:'white',textAlign:'center',fontFamily:'cursive',fontWeight:'bolder'}} onClick = {() =>handlecom()}>Go to Completed</button>
            <button style = {{float:'right',backgroundColor:'red',color:'white',textAlign:'center',fontFamily:'cursive',fontWeight:'bolder'}} onClick = {() =>handleincom()}>Go to All</button>
            {check.filter(item => item.payloadtwo == false).map(item => <li style = {{textAlign:'center',fontSize:'1.5rem',fontFamily:'fantasy',marginTop:'100px',backgroundColor:'Highlight'}}>Task = {`${item.temp}  :: Description = ${item.temptwo}  :: Date = ${item.date}`}</li>)}
        </div>
    
    )
}
    
const mapstatetoprops = (state) => {
    return {
       
        check:state.details ? state.details: []
    }
}

export default connect(mapstatetoprops)(Incomplete)