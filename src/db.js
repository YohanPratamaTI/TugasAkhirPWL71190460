// Conveniently import this file anywhere to use db

import  { firestore , initializeApp} from 'firebase/app'
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyCkYvDTVrXa43CjFyUL4D8D9V2sFYAgfFU",
  authDomain: "pwltugasakhir.firebaseapp.com",
  projectId: "pwltugasakhir",
  storageBucket: "pwltugasakhir.appspot.com",
  messagingSenderId: "699657008680",
  appId: "1:699657008680:web:cfa6347cd9f910dd24a71d",
  measurementId: "G-J0ELL60Z72"

  }

    const app = initializeApp(firebaseConfig);
      export const db = firestore(app);


