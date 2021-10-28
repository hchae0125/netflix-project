import * as React from 'react';
import { Component } from 'react';
import AppRouter from './Components/AppRouter';
import GlobalStyles from './Components/GlobalStyles';
class App extends Component {
  render() {
    return (<>
      
      <AppRouter />
      <GlobalStyles />
    </>);
  }
}

export default App;
