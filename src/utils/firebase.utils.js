// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuGx7rg-zRqejPii9B-YBQnzO_mZFJhsI',
  authDomain: 'reactecom-fb324.firebaseapp.com',
  projectId: 'reactecom-fb324',
  storageBucket: 'reactecom-fb324.appspot.com',
  messagingSenderId: '679022098315',
  appId: '1:679022098315:web:b1e4293be310074e17218e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    } catch (error) {
      console.log('error createing the user', error.message)
    }
  }

  // if user data exists
  return userDocRef

  // if user data doesn't exisits // create data

  // return userDocRef
}
