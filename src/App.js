import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import ToiletInfo from './Components/ToiletInfo';
import Location from './Components/Location';
import {data} from './data';
import './App.css';

class App extends Component {
  render() {
   
    return (
      <HashRouter>
        <Switch>
          <div className="App">
          <Navigation />
          <Route 
            exact path='/' 
            render={(props) => <Landing {...props} data={data} />}
            />
            <Route 
            exact path='/ToiletInfo' 
            render={(props) => <ToiletInfo {...props} data={data} />}
            />
            <Route 
            exact path='/Location' 
            render={(props) => <Location {...props} data={data} />}
            />
            {/* // <Landing data={data}/> */}
          </div>
        </Switch>
      </HashRouter>
    );
  }
}


export default App;
