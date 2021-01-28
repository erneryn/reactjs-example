const initialState = {
  events : []
}

const eventReducer = (state=initialState,action)=>{
  switch (action.type) {
    case 'ADDEVENT':
      return {...state, events: action.payload.event}
      default:
      return state;
  }
}

export default eventReducer
