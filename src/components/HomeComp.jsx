import React, { useState, useEffect } from 'react'
import Loading from './LoadingComp'
import CardComp from './CardComp'
import EventComp from './EventComp'
import Carousel from './CarouselComp'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataApi, fetchEvent } from '../store/actions';


function Home() {
  const dispatch = useDispatch()
  const { teams, search } = useSelector(state => state.teamReducer)
  useEffect(() => {
    dispatch(fetchDataApi())
  }, [])
  console.log(teams)


  const ifTeams = () => {
    return (
      <>
        {teams.length > 0 &&
          search
          ? teams.filter(el => el.strTeam.toLowerCase().includes(search.toLowerCase())).map(team => <CardComp key={team.idTeam} team={team} />)
          : teams.map(team => <CardComp key={team.idTeam} team={team} />)
        }
      </>
    )
  }

  return (
    <Container style={{
      maxWidth: '100%'
    }}>
      {teams.length < 1 ?
        <Loading />
        :
        <Row>
          <Col sm={9}>
            <Row className="mt-2">
              <Carousel />
            </Row>
            <Row className="d-flex justify-content-center titleRow">
              <h1>List All Team</h1>
            </Row>
            <Row className="d-flex justify-content-center">
              {ifTeams()}
            </Row>
          </Col>
          <Col sm={3} className="position-fixed" id="sticky-sidebar" style={{
            backgroundColor: 'black',
            height: '100%',
            right: 0
          }}>
            <EventComp/>
          </Col>
        </Row>
      }
    </Container>

  )
}


export default Home