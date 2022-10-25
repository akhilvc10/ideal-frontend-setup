import React from 'react';

import './App.css';
import Stepper from './component/Stepper';

function App() {
  const throwErrorFn = () => {
    throw Error('This is an Error');
  };
  return <Stepper onClickIncrement={throwErrorFn} />;
}

export default App;
