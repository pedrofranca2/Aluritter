import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import App from './App';
import store from './redux/store';

const firebaseConfig = {
  apiKey: 'AIzaSyCtzWjH3SFAmXnYMLEjuLSNZ8UbIMfvLro',
  authDomain: 'aluritter-alura.firebaseapp.com',
  projectId: 'aluritter-alura',
  storageBucket: 'aluritter-alura.appspot.com',
  messagingSenderId: '503334714540',
  appId: '1:503334714540:web:feb9fc3a60b102bf5ff309',
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(auth, 'pedrom.franca@hotmail.com', 'Pedro1537').then((user) => console.log(user)).catch((error) => console.log('error', error));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
