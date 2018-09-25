// 5) HERE WE ARE CREATING OUR STORE.
// Dependencies
import React from 'react';

// Import render from react-dom.
import { render } from 'react-dom';

// For the router
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

// Import Provider from react-redux.
import { Provider } from 'react-redux';

// styles.
import './index.css';

// importing our configureStore method for create we store.
import configureStore from './shared/redux/configureStore';

// passing the initialState to our configureStore method - this receive a initial state.
const store = configureStore(window.initialState); // as window object now have true or false window.initialState = { device: { isMobile: false } }

// Obtaining the div that have the root id.
const rootElement = document.getElementById('root');

// App wrapper - in one const im saving an arrow funtcion that receive a Component.
const renderApp = Component => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootElement
  );
};

renderApp(AppRoutes);
