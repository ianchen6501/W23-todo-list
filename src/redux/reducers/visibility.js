import { SET_VISIBILITY_FILTER } from '../actionTypes'

const initialstate = {
  filter : 'showAll'
}

export default function visibilityReducer(state = initialstate, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER :
      return {
        filter : action.payload.visibility
      }
    
    default : { return state }
  }
}