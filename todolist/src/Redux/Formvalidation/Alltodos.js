import React from 'react'
import { connect } from 'react-redux'

class Alltodos extends React.Component{
    constructor(props){
        super(props)
    }
    handlecom = () =>{
        this.props.history.push('/uncheck')
    }
    handleincom = () =>{
        this.props.history.push('/check')
    }
    render(){
        const {State} = this.props
       return <div>
            <h1 style = {{textAlign:'center',fontFamily:'cursive',color:'red',marginBottom:'50px',fontSize:'40px'}}>All Task</h1>
            <button style = {{backgroundColor:'red',color:'white',textAlign:'center',fontFamily:'cursive',fontWeight:'bolder'}} onClick = {() =>this.handlecom()}>Go to Incompleted</button>
            <button style = {{float:'right',backgroundColor:'red',color:'white',textAlign:'center',fontFamily:'cursive',fontWeight:'bolder'}} onClick = {() =>this.handleincom()}>Go to Completed</button>
           {State.map(item => <li style = {{textAlign:'center',fontSize:'1.5rem',fontFamily:'fantasy',marginTop:'100px',backgroundColor:'Highlight'}}>Task = {`${item.temp}  :: Description = ${item.temptwo}  :: Date = ${item.date}`}</li>)}
       </div>
    }
}
const mapstatetoprops = (state) =>{
    return{
        State:state.details? state.details:[]
    }
}

export default connect(mapstatetoprops)(Alltodos)