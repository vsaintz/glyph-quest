import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import Constants from "expo-constants"

const firebaseConfig = Constants.expoConfig?.extra?.firebase

const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const db = getFirestore(app)
