"use client"

import Button from "@/app/components/ui/button"
import { MoveRight, ArrowUpRight } from "lucide-react"
import Threads from "@/app/components/ui/threads"

export default function Home() {

  const handleDownload = () => {
    const apkUrl = 'https://github.com/vsaintz/glyph-quest/releases/download/v1.0.0/glyph-quest.apk'
    const link = document.createElement('a')
    link.href = apkUrl
    link.download = 'glyph-quest.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <Threads amplitude={1} distance={0.3} enableMouseInteraction={true} />
      </div>

      <div className="relative z-10 w-full max-w-full flex flex-col items-center gap-5 text-center px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 text-sm sm:text-base">
          <p className="rounded-xl font-medium border border-border px-3 py-1">Version 1.0</p>
          <div className="flex items-center gap-2">
            <p>Everything you need to navigate the event seamlessly</p>
            <MoveRight className="w-4 h-4 hidden sm:block" />
          </div>
        </div>

        <h1 className="font-bold text-2xl sm:text-4xl max-w-3xl">
          A campus-wide digital treasure hunt that challenges your logic, speed, and curiosity.
        </h1>

        <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
          Download the app to take part in an interactive challenge where every clue, code, and discovery brings you closer to the ultimate reward.
        </p>

        <div className="mt-4">
          <Button
            text="Download apk"
            icon={<ArrowUpRight size={18} />}
            onClick={handleDownload}
            className="px-6 py-3 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  )
}
