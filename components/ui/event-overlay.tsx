import React, { useEffect, useState } from "react"
import { Image, View, Pressable } from "react-native"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/firebaseConfig"

import AppText from "@/components/layout/app-text"

export default function EventOverlay() {
    const [loading, setLoading] = useState(true)
    const [eventOver, setEventOver] = useState(false)
    const [message, setMessage] = useState("")
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "events", "currentEvent"), (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data()
                setEventOver(!!data.eventOver)
                setMessage(data.message || "")
                setDismissed(false)
            }
            setLoading(false)
        })
        return () => unsub()
    }, [])

    if (loading) return null
    if (!eventOver || dismissed) return null

    return (
        <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-999 bg-white/80">
            <View className="flex-col items-center gap-5 py-14 px-2 rounded-3xl bg-black/95 mx-5 border border-[#2e2e2e]">
                <Image source={{ uri: "https://res.cloudinary.com/defh2c1db/image/upload/v1761570529/86b5dd5a2966454f8aaa_fan9rb.png" }} className="w-24 h-24 mb-5" />
                <AppText className="text-green-300 text-2xl font-bold">Congratulations!</AppText>
                <AppText className="text-white text-md text-center leading-normal">{message}</AppText>

                <Pressable
                    onPress={() => setDismissed(true)}
                    className="border border-[#2e2e2e] rounded-xl py-3 px-5 mt-5 active:opacity-80"
                >
                    <AppText className="text-white font-semibold">Thank you</AppText>
                </Pressable>
            </View>
        </View>
    )
}
