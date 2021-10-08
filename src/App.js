import styled from 'styled-components';
import ListTimers from './components/ListTimers';
import NewTimer from './components/NewTimer';
import './styles/App.css';

const Title = styled.h1`
  margin: 0 0 30px;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

function App() {
  return (
    <div className="App container">
      <Title>Timers App</Title>
      <NewTimer/>
      <ListTimers/>
    </div>
  );
}

export default App;
