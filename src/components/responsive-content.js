import React, { Component, PropTypes } from 'react'
import {IsPageLarge } from './is-page-large'


class ResponsiveContent extends Component {

  render() {
    if(this.props.pageIsLarge){
      var data = new Array(100).fill('Lots of complex text here, we have a large screen.')

      return <div>
        {data.join(" ")}
      </div>
    } else {
      return <div>
        Small screen, less content
      </div>
    }
  }
}

export default IsPageLarge(ResponsiveContent)
