import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

import AppNavigator from './src/navigators';

const composeStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={composeStoreWithMiddleware(reducers)}>
        <AppNavigator/>
      </Provider>
    );
  }
}