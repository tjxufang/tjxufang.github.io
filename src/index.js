import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from 'Redux/reducers';
import { SnackbarProvider } from 'notistack';
import reportWebVitals from './reportWebVitals';
import App from './App';

const reduxStore = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={reduxStore}>
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
                // TransitionComponent={Slide}
        preventDuplicate
        disableWindowBlurListener
      >
        <App />
      </SnackbarProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
