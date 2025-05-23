import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from '../src/components/App/App';
import { Provider } from 'react-redux'; 
import store from '../src/store/store'; 
import '../src/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);

