"use client"

import { Textarea } from "@/app/components/ui/textarea"

interface TextQuestionProps {
  question: string
  value: string
  onChange: (value: string) => void
}

export function TextQuestion({ question, value, onChange }: TextQuestionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-medium text-center text-blue-900 tracking-tight">{question}</h3>

      <Textarea
        placeholder="Vui lòng nhập tại đây..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px]"
      />
    </div>
  )
}

