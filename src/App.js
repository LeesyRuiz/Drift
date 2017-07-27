import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import hourglass from "./assets/hourglass.svg";

import { reset } from "./ducks/outing";

import CurrentOuting from "./components/CurrentOuting/CurrentOuting";
import EnterLocation from "./components/EnterLocation/EnterLocation";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";




class App extends Component {
  renderChildren() {
    const {
      error,
      loading,
      search,
      outing,
      reset
    } = this.props;
    if ( error ) {
      return <ErrorMessage reset={ reset } />
    }
    if ( loading ) {
      return (
        <img alt="loading indicator" src={ hourglass } />
      )
    }
    if ( search ) {
      return <EnterLocation />
    }
    return (
      <CurrentOuting reset={ reset } outing={ outing } />
    )
  }
  render() {
    return (


      <div className="app">
       <h1 className="app__title">OUTINGMAN</h1>
      { this.renderChildren() }
    </div>


  );
}
}

export default connect( state => state, { reset } )( App );
