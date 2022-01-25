import axios from "axios"
import UsersService from "../services/UsersService"

// constants
const dataInitial = {
  array: [],
}


// types
const GET_USER = 'GET_USER'
const CREATE_USER = 'CREATE_USER'
const EDIT_USER = 'EDIT_USER'
const DELETE_USER = 'DELETE_USER'

// reducers
export default function usersReducer(state = dataInitial, action){
  switch(action.type){
    case GET_USER:
      return {...state, array: action.payload}
    case CREATE_USER:
      return {...state, array: action.payload}
    case EDIT_USER:
      return {...state, array: action.payload}
    case DELETE_USER:
      return {...state, array: action.payload}
    default:
      return state
  }
}


// actions

export const getUsersAction = (params) => async (dispatch, getState) => {
  try {
    const res = await UsersService.getAll()
    dispatch({
      type: GET_USER,
      payload: res.data.response
    })
  } catch (error) {
    console.log(error)
  }
}

export const createUsersAction = (params) => async (dispatch, getState) => {
  try {
    const res = await UsersService.postUsers(params)
    const userCreated = res.data.response
    const currentUsers = getState().users
    const users = [userCreated, ...currentUsers.array]
    console.log(getState().users, userCreated, users)
    dispatch({
      type: CREATE_USER,
      payload: users
    })
  }catch(error) {
    console.log(error)
  }
}

export const editUsersAction = (params) => async (dispatch, getState) => {
  try {
    const res = await UsersService.putUsers(params)
    const userUpdated = res.data.response
    const currentUsers = getState().users
    const users = currentUsers.array.reduce((acc, el) => {
      return [...acc, (el.id == userUpdated.id) ? userUpdated : el]
    }, [])
    console.log(getState().users, userUpdated, users)
    dispatch({
      type: EDIT_USER,
      payload: users
    })
  }catch(error) {
    console.log(error)
  }
}

export const deleteUsersAction = (params) => async (dispatch, getState) => {
  try {
    await UsersService.deleteUsers(params)
    const currentUsers = getState().users
    const users = currentUsers.array.filter(user => user.id != params.id)
    console.log(getState().users, params, users)
    dispatch({
      type: DELETE_USER,
      payload: users
    })
  }catch(error) {
    console.log(error)
  }
}