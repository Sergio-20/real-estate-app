import React from 'react';
import ReactDOM from 'react-dom';

import RealEstate from './components/RealEstate.js';

function App() {
  return (
    <RealEstate />
  );
}

ReactDOM.render( <App />, document.getElementById('root') );

export default App;
