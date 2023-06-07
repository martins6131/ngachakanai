import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator.jsx';

ReactDOM.render(<Calculator />, document.getElementById('root'));

const App = () => {
  return (
    <div className="app">
      <h1>Calculator </h1>
      <Calculator />
    </div>
  );
};

export default App;
