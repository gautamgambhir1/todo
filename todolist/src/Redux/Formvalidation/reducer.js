function reducer(state = {},action){
    switch(action.type){
        case'ADD USER' :{
            const newstate = {...state,details:[...state.details,{temp:action.payload,temptwo:action.payloadthree, date:action.payloadfour,payloadtwo:action.payloadtwo}]}
         return newstate
        }
        case'DELETE USER' :{
            const State = {...state,details:[...state.details.slice(0,action.payload),...state.details.slice(action.payload + 1)]}
            return State
        }
        case 'CHECK USER' :{
            const statetwo = {...state,details:[...state.details.slice(0,action.payload),{...state.details[action.payload],payloadtwo:!state.details[action.payload].payloadtwo},...state.details.slice(action.payload+1)]}
            return statetwo
        }
        case 'ADD' :{
            const statee = {...state,Parentstate:[...state.Parentstate,action.payload]}
            return statee
        }
        default :{
            return state
         }
     }
 }
 export default reducer