import React from 'react'
import { useDispatch } from 'react-redux'
import { disLikeAction } from '../store/actions'
import { Card, Col, Row, Button } from 'react-bootstrap'


function CardFavorites(props) {
  let data = props.data
  const dispatch = useDispatch()

  return (
    <Card className="mt-4 mx-2">
      <Card.Header as="h5">{data.strTeam}</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={4}>
            <img src={data.strTeamJersey} alt="" />
          </Col>
          <Col sm={5}>
            <Card.Title>Tour : {data.strLeague}</Card.Title>
            <Card.Title
            data-testid="countryName"
            >Country : {data.strCountry}</Card.Title>
          </Col>
          <Col sm={3}>
            <Button 
            data-testid="remove-test"
            variant="danger" onClick={() => dispatch(disLikeAction(data.idTeam))} >Remove</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardFavorites