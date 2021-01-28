import axios from 'axios'
import {
  LIKE,
  DISLIKE,
  ADDALLTEAM,
  ADDEVENT
} from '../actionTypes'

export const likeAction = (team) =>({
  type : LIKE,
  payload: {
    team,
  }
})

export const disLikeAction = (idTeam) =>({
  type : DISLIKE,
  payload: {
    idTeam,
  }
})

export const addAllTeam = (team) => ({
  type: ADDALLTEAM,
  payload: {
    team
  }
})

export const addEvent = (event) => ({
  type: ADDEVENT,
  payload: {
    event
  }
})


export const fetchDataApi = () =>{
  return (dispatch) =>{
    const resource =[
    axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4465')
    ,axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4465')
    ]
    Promise.all(resource)
    .then(res=>{
      dispatch(addAllTeam(res[0].data.teams))
      dispatch(addEvent(res[1].data.events))

    })
    .catch((err)=>{
      console.log(err)
    })

      // axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4465')
      // .then(({data}) => {
      //   dispatch(addAllTeam(data.teams))
      //   // return data
      // })
    //   .then((resp)=>{
    //     axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4465')
    //     .then((respo) => {
    //     console.log(respo)
    //      dispatch(addEvent(data.events))
    //      })
    //     .catch((err)=>{
    //      console.log(err)
    //     })
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

}