import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './assets/css/common.css';
import './styles.css';
import styled from 'styled-components';
import Autorization from './components/Autorization';
import Header from './components/Header';
import Desk from './components/Desk';
import { State } from './types';

function App() {
  const state = useSelector((state: State) => state);
  const isAuthorized = Boolean(state.username);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <Container>
      <HiddenHeader>Canban desk</HiddenHeader>
      {isAuthorized ? (
        <>
          <Header />
          <DesksContainer>
            {state.desks.map((desk) => {
              return (
                <Desk 
                  key={desk.id}
                  title={desk.title}
                  deskId={desk.id}
                />
              )
            })}
          </DesksContainer>
        </> 
      ) : (
        <Autorization /> 
      )}
    </Container>
  )
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  width: 1424px;
`

const HiddenHeader = styled.h1`
  font-size: 0;
`

const DesksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`