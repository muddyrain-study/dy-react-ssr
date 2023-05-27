import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { fetchMovies } from './actions/movies';
let store;

if (global.document) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}

if (global.document) {
  window.store = store;
  window.fetchMovies = fetchMovies;
}

export default store;
