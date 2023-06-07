import React from 'react';
import StackNav from './src/navigator/StackNav';
import ContextProvider from './src/components/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <StackNav />
    </ContextProvider>
  );
};

export default App;
