import React from 'react'
import TicketList from './TicketList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewTicketForm from './NewTicketForm'
import Error404 from './Error404'
import NewTicketControl from './NewTicketControl'
import Moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: []
    }
  }
  

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  updateTicketElapsedWaitTime() {
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList})
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )

  }
}


export default App
