import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigation from './src/navigation/rootNavigation';


const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}


export default App;
