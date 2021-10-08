import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteTimerAction, resetTimerAction, toggleTimerAction, updateTimerAction } from "../redux/actions/timerActions";

const TimerElement = styled.li`
  padding: 10px 15px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 5px;
  border: 2px solid #d6d6d6;
  background: #f1f1f1;
`;
const Name = styled.h5`
  font-size: 18px;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 3px 10px;
  border: 2px solid #d6d6d6;
  background: #ffffff;
  @media screen and (max-width: 520px){
    &{
      font-size: 14px;
    }
  }
`;

function Timer ({timer, toggleTimer, updateTimer, resetTimer, deleteTimer}) {
  useEffect(() => {
    if(timer.isStarted){
      const interval = setInterval(() => {
        updateTimer(timer.id);
        clearInterval(interval);
      }, 50);
    }
  }, [timer, updateTimer]);

  const resetTime = () => {
    toggleTimer(timer.id, false);
    resetTimer(timer.id);
  }

  return(
    <TimerElement>
      <Name>{timer.name}</Name>
      <div>{Math.floor(timer.time * 10) / 10}s</div>
      <div>
        <Button onClick={() => toggleTimer(timer.id)}>{timer.isStarted ? "Пауза" : "Старт"}</Button>
      </div>
      <div>
        <Button onClick={resetTime}>Очистить</Button>
        <Button onClick={() => deleteTimer(timer.id)}>Удалить</Button>
      </div>
    </TimerElement>
  );
}

const dispatchToProps = {
  toggleTimer: toggleTimerAction,
  updateTimer: updateTimerAction,
  resetTimer: resetTimerAction,
  deleteTimer: deleteTimerAction
}

export default connect(null, dispatchToProps)(Timer);