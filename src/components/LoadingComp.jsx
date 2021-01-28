import React from 'react'
import { Spinner } from 'react-bootstrap'


function Loading() {

  return (

    <div style={{ 
      marginTop: '50vh',
     }} className="d-flex flex-column align-items-center ">
      <h1>l o a d i n g</h1>
      <div>
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>


  )

}

export default Loading