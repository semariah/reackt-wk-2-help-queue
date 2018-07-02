import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Ticket(props){
  let ticketStyle = {
    backgroundColor: 'green',
    color: 'white',
  }
  return (
    <div style={ticketStyle}>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} </h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  )
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
}

export default Ticket
