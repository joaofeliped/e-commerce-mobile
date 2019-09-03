import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes ref={ navigationRef => NavigationService.setNavigator(navigationRef) } />
    </>
  );
};



export default App;
