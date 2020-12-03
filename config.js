import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDq40ck-iXTYEYAnlsl8FI8Q5wM71j9r78",
  authDomain: "buzzer-app-815f5.firebaseapp.com",
  databaseURL: "https://buzzer-app-815f5.firebaseio.com",
  projectId: "buzzer-app-815f5",
  storageBucket: "buzzer-app-815f5.appspot.com",
  messagingSenderId: "905192022687",
  appId: "1:905192022687:web:f991398a25ddff1362b8aa"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
