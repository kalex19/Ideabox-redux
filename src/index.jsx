import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import thunks from 'redux-thunks';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
