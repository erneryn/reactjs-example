import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../store/actions'


function EventComp() {
  const event = useSelector(state => state.eventReducer.events)

  return (
    <div 
    style={{
      color: 'white',
    }}>
      <div style={{
        marginTop: '10vh',
        borderBottom: '1px solid grey'
      }}>
        <h2 
        data-testid="event-test"
        className="mt-5"> Upcoming Event </h2>
    <Card style={{ width: '18rem', backgroundColor:'black' }}>
        {/* <ListGroup variant="flush">
          {
          event.slice(0,10).map(el =>  <ListGroup.Item key={el.idEvent}>{el.strFilename} , {el.dateEvent}</ListGroup.Item> )
          }
        </ListGroup> */}
    </Card>
    </div>
    </div >
  )
}

export default EventComp