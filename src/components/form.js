
import Formsy from 'formsy-react'
import SomeInput from './input'
import React from 'react'


var SomeForm = React.createClass({
  getInitialState: function () {
    return {
      canSubmit: false
    }
  },
  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },
  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },
  submit: function (model,reset, invalidate) {

    invalidate({email: "email already taken"})
  },
  render: function () {
    return (
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <SomeInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy.Form>
    );
  }
});

export default SomeForm