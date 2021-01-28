const initialState = {
  teams: [],
  search: ''
}

const teamReducer = (state = initialState, action) => {


  switch (action.type) {
    case 'ADDALLTEAM':
      return { ...state, teams: action.payload.team }
    case 'SEARCH':
      return { ...state, search: action.payload.query }
    default:
      return state
  }
}

export default teamReducer