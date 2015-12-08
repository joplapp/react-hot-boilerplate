import React, { Component } from 'react'
import ColoredButton from './colored-button'
import Table from './Table'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      country: 'Ukraine'
    }
  }

  changeCountry(){
    this.setState({
      country: 'Germany'
    })
  }

  render() {
    return (<div>
      <h1>Hello, {this.state.country}.</h1>

      <ColoredButton color="green" onClick={() => this.changeCountry()}>
        Say Hello to Germany
      </ColoredButton>

      {/*<Table rows={6} columns={5} />*/}
    </div>);
  }
}
