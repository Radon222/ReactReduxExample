import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import * as RoutesModule from './routes';
var routes = RoutesModule.routes;
// Create browser history to use in the Redux store
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = createBrowserHistory({ basename: baseUrl });
// Get the application-wide store instance, prepopulating with state from the server where available.
var initialState = window.initialReduxState;
var store = configureStore(history, initialState);
function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Provider, { store: store },
            React.createElement(ConnectedRouter, { history: history, children: routes }))), document.getElementById('react-app'));
}
renderApp();
// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', function () {
        routes = require('./routes').routes;
        renderApp();
    });
}
//# sourceMappingURL=boot-client.js.map