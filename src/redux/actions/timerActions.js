import { ADD_TIMER, TOGGLE_TIMER, SELECT_TIMER, UPDATE_TIMER, DELETE_TIMER, RESET_TIMER } from "../types";

export function addTimerAction(name){
  return {type: ADD_TIMER, payload: name};
}
export function toggleTimerAction(id, value){
  return {type: TOGGLE_TIMER, payload: {id, value}};
}
export function selectTimerAction(id){
  return {type: SELECT_TIMER, payload: id};
}
export function updateTimerAction(id){
  return {type: UPDATE_TIMER, payload: id};
}
export function resetTimerAction(id){
  return {type: RESET_TIMER, payload: id};
}
export function deleteTimerAction(id){
  return {type: DELETE_TIMER, payload: id};
}