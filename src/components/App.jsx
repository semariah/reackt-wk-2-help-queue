import React from 'react'
import TicketList from './TicketList'
import Header from './Header'

function App(){
  let appStyle = {
    backgroundColor: 'salmon',
      border: '5px solid green'
  }
  return (
    <div style={appStyle}>
      <Header/>
      <TicketList />
    </div>
  );
}

export default App
