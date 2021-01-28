import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardDetail from './CardDetail'
import '../styles/custom.css'

const DetailComp = () => {
  const [dataTeam, setData] = useState(null)
  const param = useParams()

  const getTeamById = useCallback(() => {
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${param.id}`)
      .then(res => {
        setData(res.data.teams[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [param.id])

  useEffect(() => {
    getTeamById()
  }, [getTeamById])

  return (
    <Container style={{
      marginTop: '10vh'
    }}>
      {dataTeam && <h1>{dataTeam.strTeam}</h1>}
      <Row>
        {dataTeam &&
          <>
            <Col sm={3}>
              <div>
              <img
                className="logoTeam shadow p-3 mb-5 bg-white rounded"
                src={dataTeam.strTeamBadge} alt=""
                />
                </div>
            </Col>
            <Col sm={9} className="detailTeam">
              <p>{dataTeam.strDescriptionEN}</p>
              <hr />
              <p>Formed Year: {dataTeam.intFormedYear}</p>
              <hr />
              <p>Country: {dataTeam.strCountry}</p>
              <hr />
                <CardDetail dataTeam={dataTeam} />
            </Col>
          </>
        }
      </Row>
    </Container>
  )
}

export default DetailComp