import React from 'react'
import './App.css';
import HomePage from './Pages/HomePage/Homepage'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
 
    return (
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
       

      </Container>
    );

}

export default App;

const Container = styled.div`
`