import * as React from 'react';
import { Component } from 'react';
import AppRouter from './Components/AppRouter';
import Header from './Components/Header';
class App extends Component {
  render() {
    return (<>
      <Header />
      <AppRouter />
    </>);
  }
}

export default App;
