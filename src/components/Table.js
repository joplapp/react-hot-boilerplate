import React, { Component } from 'react'
import Cell from './Cell'
import Row from './Row'
import Total from './Total'


export default class Table extends Component {
  constructor(props){
    super()

    var data = [];
    for (var r=0; r<props.rows; r++){
      data[r] = [];
      for(var c=0; c<props.columns; c++){
        data[r][c] = 0
      }
    }

    this.state = {
      data: data
    }
  }
  onCellChange(row, column, value){
    this.state.data[row][column] = value
    this.setState({data: this.state.data})
  }

  render() {
    /*
      render each row, using Cells
      append Totals at the end
     */

    return (
      <table><tbody>
      {this.state.data.map((row, rowInd) =>

        <Row key={rowInd}>
          {row.map((value, cInd) =>
            <Cell value={value} onChange={this.onCellChange.bind(this, rowInd, cInd)} key={cInd}/>
          )}
          <Total value={row.reduce((a,b) => a+b)} />
        </Row>
      )}

      <Row>
        {this.state.data[0].map((v, cInd) =>
          <Total value={columnSum(this.state.data, cInd)} key={cInd} />
        )}
        <Total value={totalSum(this.state.data)} />
      </Row>
      </tbody></table>
    );
  }
}


var columnSum = function(data, index){
  var sum = 0
  for(var i = 0; i<data.length; i++){
    sum += data[i][index]
  }
  return sum
}

var totalSum = data =>
  data[0].map((v, index) => columnSum(data, index))
      .reduce((a,b) => a+b)
