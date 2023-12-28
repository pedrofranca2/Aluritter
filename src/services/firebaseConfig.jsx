import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCtzWjH3SFAmXnYMLEjuLSNZ8UbIMfvLro',
  authDomain: 'aluritter-alura.firebaseapp.com',
  projectId: 'aluritter-alura',
  storageBucket: 'aluritter-alura.appspot.com',
  messagingSenderId: '503334714540',
  appId: '1:503334714540:web:feb9fc3a60b102bf5ff309',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
