import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import { StoreContext } from 'storeon/react'
import { storeon } from './storeStoreon/storeon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // {/* <Provider store={store}> */}
    <StoreContext.Provider value={storeon}>
      <App />    
    </StoreContext.Provider>
    // {/* </Provider> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
