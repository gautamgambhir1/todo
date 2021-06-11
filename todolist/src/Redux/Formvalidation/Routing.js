import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import Alltodos from './Alltodos'
import Completed from './Completed'

import Formvalid from './Formvalid'
import Incomplete from './Incomplete'
import reducer from './reducer'
import Todo from './Todoapp'

const List = {
    details:[],
    Parentstate:[]
}
const store = createStore(reducer,List)
export default function Routing(props) {
    return (
        <div>
            <Provider store = {store}>
            <BrowserRouter>
            <Switch>
                <Route exact path = '/' render = {(rote) => <Formvalid {...rote}  />}></Route>
                <Route path = '/todo' render = {(rote) => <Todo {...rote}  />}></Route>
                <Route path = '/check' component = {Completed}></Route>
                <Route path = '/uncheck' component = {Incomplete}></Route>
                <Route path = '/all' component = {Alltodos}></Route>
         
            </Switch>
            </BrowserRouter>
            </Provider>
        </div>
    )
    
}