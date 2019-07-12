import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from './firebase-config.js'

export const db = firebase.initializeApp(firebaseConfig)