import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addTimerAction } from "../redux/actions/timerActions";

const Content = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;
const Input = styled.input`
  padding: 5px 8px;
  border: 2px solid #d6d6d6;
`;
const Button = styled.button`
  padding: 5px 8px;
  border: 2px solid #d6d6d6;
  background: #f1f1f1;
`;

function NewTimer ({add}) {
  const [name, setName] = useState("");

  function addTimer(){
    add(name);
    setName("");
  }

  return(
    <Content>
      <Title>Add new Timer</Title>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={addTimer}>Add</Button>
      </form>
    </Content>
  );
}

const dispatchToProps = {
  add: addTimerAction
}

export default connect(null, dispatchToProps)(NewTimer);