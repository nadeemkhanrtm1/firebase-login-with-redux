import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "tailwindcss/dist/tailwind.min.css";
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducer/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './firebase';
import firebase from 'firebase/app';

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), reduxFirestore(fbConfig),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App/>
    </ReactReduxFirebaseProvider>
  </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
