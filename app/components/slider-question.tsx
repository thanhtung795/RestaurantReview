"use client"

import { Slider } from "@/app/components/ui/slider"

interface SliderQuestionProps {
  question: string
  leftLabel?: string
  rightLabel?: string
  value: number
  onChange: (value: number) => void
}

export function SliderQuestion({ question, leftLabel, rightLabel, value, onChange }: SliderQuestionProps) {
  const handleChange = (newValue: number[]) => {
    onChange(newValue[0])
  }

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-medium text-center text-primary">{question}</h3>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">{leftLabel || "0"}</span>
          <span className="text-sm font-medium text-muted-foreground">{rightLabel || "5"}</span>
        </div>

        <Slider defaultValue={[value]} max={5} step={0.5} onValueChange={handleChange} className="py-4" />

        <div className="text-center">
          <span className="text-lg font-medium">{value} điểm</span>
        </div>
      </div>
    </div>
  )
}

