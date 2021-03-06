import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import './App.css';
import NoMatch from '../../components/NoMatch';
import DeckBuilder from '../../containers/DeckBuilder';
import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';

const App = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          deck builder
        </Toolbar>
      </AppBar>
      <BrowserRouter basename="/deck-builder-web/">
          <Switch>
            <Route exact path="/" component={DeckBuilder} />
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    </Box>
  )
}

export default App;