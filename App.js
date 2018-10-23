import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Search from './src/components/Search'

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene component={Search} title='Search' key='search' hideNavBar={1}/>
        </Scene>
      </Router>
    );
  }
}
