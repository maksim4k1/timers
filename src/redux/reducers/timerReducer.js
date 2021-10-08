import { nanoid } from "nanoid";
import { ADD_TIMER, TOGGLE_TIMER, SELECT_TIMER, UPDATE_TIMER, DELETE_TIMER, RESET_TIMER } from "../types";

class Timer {
  constructor(name){
      this.id = nanoid();
      this.name = name;
      this.time = 0;
      this.isStarted = false;
  }
}

function timerReducer(state=[], {type, payload}){
  switch(type){
    case ADD_TIMER: {
      const newTimer = payload ? payload : `Timer #${state.length}`;
      return [...state, new Timer(newTimer)];
    } case TOGGLE_TIMER: {
      const newState = state.map((item) => {
        if(item.id === payload.id){
          return {...item, isStarted: payload.value !== undefined ? payload.value : !item.isStarted};
        }
        return item;
      });
      return newState;
    } case SELECT_TIMER: {
      return state;
    } case UPDATE_TIMER: {
      const newState = state.map((item) => {
        if(item.id === payload){
          return {...item, time: item.time + 0.05};
        }
        return item;
      });
      return newState;
    } case RESET_TIMER: {
      const newState = state.map((item) => {
        if(item.id === payload){
          return {...item, time: 0};
        }
        return item;
      });
      return newState;
    } case DELETE_TIMER: {
      const newState = state.filter(item => item.id !== payload);
      return newState;
    } default: {
      return state;
    }
  }
}

export default timerReducer;