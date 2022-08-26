import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './index.css';
import App from './App';
import AicteChatBot from './componenets/chatbot/AicteChatBot';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);
render(<AicteChatBot />, document.getElementById('chatbot'));

reportWebVitals();
