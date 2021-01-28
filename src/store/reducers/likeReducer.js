const initialState = {
  likers: []
}



const likeReducer = (state = initialState,action) =>{
 
  switch (action.type) {
    case 'LIKE':
      return {...state, likers: state.likers.concat(action.payload.team)}
    case 'DISLIKE':
      return {...state, likers: state.likers.filter(team => team.idTeam !== action.payload.idTeam)}
      default:
      return state
  }

}

export default likeReducer