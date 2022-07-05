import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import Todolist from './Todolist';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Todolist></Todolist>
  </Provider>
);

