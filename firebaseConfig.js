import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import Constants from "expo-constants"

const extra =
    Constants.expoConfig?.extra || Constants.manifest?.extra || {}
const firebaseConfig = extra?.firebase

if (!firebaseConfig) {
    console.warn(
        "Firebase config not found! Check your app.config.js and .env setup."
    )
}

const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const db = getFirestore(app)
