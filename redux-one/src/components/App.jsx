
import React from 'react';
import { element } from 'prop-types';

const App = props => (
  <div className="App">
      {props.children}
  </div>
);

App.propTypes = {
  children: element
};

export default App;
