import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { likeAction, disLikeAction } from '../store/actions'
import { useSelector } from 'react-redux'

function ContentComp(props) {
  const team = props.team
  const ifLiked = useSelector(state => state.likeReducer.likers)
  const dispatch = useDispatch()
  function checkLiked() {
    if (ifLiked.find(el => el.idTeam == team.idTeam)) {
      return (
        <Button onClick={() => dispatch(disLikeAction(team.idTeam))} 
        variant="dark">
          dislike<i 
          className="ml-1 fas fa-thumbs-down"></i></Button>
      )
    } else {
      return (
        <Button onClick={() => dispatch(likeAction(team))} 
        data-testid='like-button'
        variant="dark">
          Kudos <i className="ml-1 fas fa-thumbs-up"></i></Button>
      )
    }
  }

  return (
    <Card 
    className="cardHome"
    style={{
      backgroundColor: 'rgb(190, 190, 190)',
      width: '16rem',
      padding: '5px'
    }}
      className="m-2">
      <Card.Img variant="top" src={team.strTeamBadge} />
      <Card.Body>
        <Card.Title
        data-testid="card-test"
        >{team.strTeam}</Card.Title>
        <div 
        className="d-flex justify-content-around mx-2">
          {checkLiked()}
          <Link to={`/detail/${team.idTeam}`}>
            <Button 
            data-testid="detail-button"
            variant="light" >Detail</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )


}


export default ContentComp