"use client"

import { Download, MoveRight } from "lucide-react"
import Threads from "@/app/components/ui/threads"
import Button from "@/app/components/ui/button"

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">

      <div className="absolute inset-0 z-0 opacity-40">
        <Threads amplitude={1} distance={0.3} enableMouseInteraction={true} />
      </div>


      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-5 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 text-sm sm:text-base">
          <p className="text-text-primary rounded-xl font-medium border border-border px-3 py-1">Version 1.0</p>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <p>What's new in the latest version</p>
            <MoveRight className="w-4 h-4" />
          </div>
        </div>

        <h1 className="text-white font-bold text-3xl sm:text-4xl max-w-3xl">
          A campus-wide digital treasure hunt that challenges your logic, speed, and curiosity.
        </h1>

        <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
          Download the app to take part in an interactive challenge where every clue, code, and discovery brings you closer to the ultimate reward.
        </p>

        <div className="mt-4">
          <Button
            icon={<Download size={18} />}
            text="Download APK"
            onClick={() => console.log("Downloading...")}
            className="px-6 py-3 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  )
}
