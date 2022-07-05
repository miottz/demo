import React from 'react';
import Header from "./common/header/index"
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header></Header>
    </div>
    </Provider>
  );
}

export default App;
