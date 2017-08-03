import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux'
import App from './containers/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
