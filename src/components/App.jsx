import React from 'react'
import TicketList from './TicketList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewTicketForm from './NewTicketForm'
import MySampleComponent from './MySampleComponent'
import Error404 from './Error404'

function App(){
  let appStyle = {
    backgroundColor: 'salmon',
    border: '5px solid green'
  }
  return (
    <div style={appStyle}>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList}/>
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
      <MySampleComponent/>
    </div>
  )
}

export default App
