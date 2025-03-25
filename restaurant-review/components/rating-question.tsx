"use client"

import { useState } from "react"
import { Heart, Star, ThumbsUp } from "lucide-react"

interface RatingQuestionProps {
  question: string
  leftLabel?: string
  rightLabel?: string
  value: number | null
  onChange: (value: number) => void
}

export function RatingQuestion({ question, leftLabel, rightLabel, value, onChange }: RatingQuestionProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  // Randomly choose an icon type for variety
  const iconType = question.includes("hài lòng") ? "heart" : question.includes("tốt") ? "star" : "thumbs"

  const renderIcon = (index: number, filled: boolean) => {
    const size = "h-10 w-10 md:h-12 md:w-12"
    const baseClass = "transition-all duration-200 size-12 md:size-14 hover:scale-105"
    const filledClass = "text-indigo-600"
    const emptyClass = "text-muted-foreground"

    const className = `${baseClass} ${filled ? filledClass : emptyClass}`

    if (iconType === "heart") {
      return <Heart className={className} fill={filled ? "currentColor" : "none"} />
    } else if (iconType === "star") {
      return <Star className={className} fill={filled ? "currentColor" : "none"} />
    } else {
      return <ThumbsUp className={className} fill={filled ? "currentColor" : "none"} />
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-blue-700 text-center text-primary">{question}</h3>

      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-between w-full">
          {leftLabel && <span className="text-sm font-medium text-muted-foreground">{leftLabel}</span>}
          {rightLabel && <span className="text-sm font-medium text-muted-foreground">{rightLabel}</span>}
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              className="flex flex-col items-center gap-2"
              onClick={() => onChange(rating)}
              onMouseEnter={() => setHoverValue(rating)}
              onMouseLeave={() => setHoverValue(null)}
            >
              {renderIcon(rating, hoverValue !== null ? rating <= hoverValue : rating <= (value || 0))}
              <span className="text-sm">{rating}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

