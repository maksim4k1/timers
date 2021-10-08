import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Timer from "./Timer";

const List = styled.ul`
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

function ListTimers ({timers}) {
  return(
    <List>
      {
        timers.map(item => {
          return <Timer key={item.id} timer={item}/>
        })
      }
    </List>
  );
}

const stateToProps = (state) => ({
  timers: state.timers
});

export default connect(stateToProps)(ListTimers);