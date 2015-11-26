import React from 'react'
import { Router, Route } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App'
import NumbersList from './numbers-list'
import NumberEditor from './number-editor'


export default class RoutedApp extends React.Component {
  render(){

    return <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <Route path="numbers" component={NumbersList}>
          <Route path=":id" component={NumberEditor}/>
        </Route>
      </Route>
    </Router>
  }
}