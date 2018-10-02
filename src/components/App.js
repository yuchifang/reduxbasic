import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
          <p className="text-center">
              <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
              <button onClick={this.props.onDecrement}className="btn btn-danger my-2">Decrease</button>
          </p>
          <br/>
          </div>
         
       </div>
    );
  }
}
App.propTypes={
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  
}

export default App;
