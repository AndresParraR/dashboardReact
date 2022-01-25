import axios from "axios"
import RolesService from "../services/RolesService"

// constants
const dataInitial = {
  array: [],
}


// types
const GET_ROLES = 'GET_ROLES'

// reducers
export default function rolesReducer(state = dataInitial, action){
  switch(action.type){
    case GET_ROLES:
      return {...state, array: action.payload}
    default:
      return state
  }
}


// actions

export const getRolesAction = (params) => async (dispatch, getState) => {
  try {
    const res = await RolesService.getAll()
    dispatch({
      type: GET_ROLES,
      payload: res.data.response
    })
  } catch (error) {
    console.log(error)
  }
}