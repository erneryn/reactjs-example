import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardFavorites from './CardFavorites'
import { useSelector } from 'react-redux'



function FavoritesComp() {
  const likeFrom = useSelector( state => state.likeReducer.likers)

  const checkLiked = (likeFrom) =>{
    if(likeFrom.length == 0){
      return(
        <h2>no teams added to favorites</h2>
      ) 
    }else {
      return(
        <>
       { likeFrom.map(liked => <CardFavorites key={liked.idTeam} data={liked} />)}
       </>
      )
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <h1 style={{
          marginTop: '5vh'
        }}>My Favorites Team</h1>
      </Row>
      <Row>
        <Col>
          {checkLiked(likeFrom)}
        </Col>
        
      </Row>
    </Container>
  )

}

export default FavoritesComp