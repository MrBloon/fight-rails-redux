import React from 'react';

import ClassList from '../containers/class_list'
import Hero from '../containers/hero'

const App = (props) => {
  return (
    <div className="app">
      <ClassList />
      <Hero />
    </div>
  );
};

export default App;
