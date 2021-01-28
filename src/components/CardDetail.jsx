import React from 'react'
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'
import {
  useRouteMatch,
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'


function CardDetail(props) {
  const data = props.dataTeam
  const { path, url } = useRouteMatch()

  return (
    <Card className="mb-5">
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link as={Link} to={`${url}/social-media`}>Social Media</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={`${url}/jersey`}>Jersey</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Switch>
          <Route exact path={`${path}`}>
          </Route>
          <Route path={`${path}/jersey`}>
            <img className="shadow p-3 mb-5 bg-white rounded"
            src={data.strTeamJersey} />
          </Route>
          <Route path={`${path}/social-media`}>
            <ul>
            <li><a href={'http://' +data.strWebsite} target="_blank">Official Website</a></li>
              <li><a href={'http://' +data.strFacebook} target="_blank">Facebook</a></li>
              <li><a href={'http://' +data.strInstagram} target="_blank">Instagram</a></li>
            </ul>
          </Route>
        </Switch>
      </Card.Body>
    </Card>
  )
}

export default CardDetail