import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // https://github.com/reactjs/redux/issues/1676

import reducers from './reducers';
import Posts from './components/Posts';

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Posts />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
