"use client"

import { useState } from "react"
import { Textarea } from "@/app/components/ui/textarea"
import { Slider } from "@/app/components/ui/slider"
import { Heart, Star, ThumbsUp } from "lucide-react"

// Props chung cho tất cả các loại câu hỏi
interface QuestionProps {
  question: string
  type: "rating" | "slider" | "text"
  value: any
  onChange: (value: any) => void
  options?: {
    leftLabel?: string
    rightLabel?: string
    min?: number
    max?: number
    step?: number
    placeholder?: string
    minLength?: number
    maxLength?: number
  }
}

export function Question({ question, type, value, onChange, options = {} }: QuestionProps) {
  const {
    leftLabel,
    rightLabel,
    min = 0,
    max = 5,
    step = 0.5,
    placeholder = "Vui lòng nhập tại đây...",
    minLength,
    maxLength,
  } = options

  // Render câu hỏi phù hợp với loại
  return (
    <div className="space-y-6">
      {/* Tiêu đề câu hỏi */}
      <h3 className="text-lg font-medium text-center text-primary">{question}</h3>

      {/* Nội dung câu hỏi dựa trên loại */}
      {type === "rating" && (
        <RatingContent
          value={value}
          onChange={onChange}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          question={question}
        />
      )}

      {type === "slider" && (
        <SliderContent
          value={value}
          onChange={onChange}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          min={min}
          max={max}
          step={step}
        />
      )}

      {type === "text" && (
        <TextContent
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
        />
      )}
    </div>
  )
}

// Component con cho câu hỏi Rating
function RatingContent({
  value,
  onChange,
  leftLabel,
  rightLabel,
  question,
}: {
  value: number | null
  onChange: (value: number) => void
  leftLabel?: string
  rightLabel?: string
  question: string
}) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  // Chọn loại icon dựa trên nội dung câu hỏi
  const getIconType = () => {
    if (question.toLowerCase().includes("hài lòng")) return "heart"
    if (question.toLowerCase().includes("tốt")) return "star"
    return "thumbs"
  }

  const iconType = getIconType()

  // Render icon phù hợp với trạng thái
  const renderIcon = (rating: number, filled: boolean) => {
    const size = "h-10 w-10 md:h-12 md:w-12"
    const baseClass = "transition-all duration-200"
    const filledClass = "text-primary"
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
    <div className="flex flex-col items-center space-y-8">
      {/* Nhãn trái/phải */}
      <div className="flex justify-between w-full">
        {leftLabel && <span className="text-sm font-medium text-muted-foreground">{leftLabel}</span>}
        {rightLabel && <span className="text-sm font-medium text-muted-foreground">{rightLabel}</span>}
      </div>

      {/* Các nút đánh giá */}
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
            {renderIcon(rating, hoverValue !== null ? rating <= hoverValue : value !== null && rating <= value)}
            <span className="text-sm">{rating}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Component con cho câu hỏi Slider
function SliderContent({
  value,
  onChange,
  leftLabel,
  rightLabel,
  min,
  max,
  step,
}: {
  value: number
  onChange: (value: number) => void
  leftLabel?: string
  rightLabel?: string
  min: number
  max: number
  step: number
}) {
  // Xử lý khi giá trị slider thay đổi
  const handleChange = (newValue: number[]) => {
    onChange(newValue[0])
  }

  return (
    <div className="space-y-6">
      {/* Nhãn trái/phải */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">{leftLabel || `${min} điểm`}</span>
        <span className="text-sm font-medium text-muted-foreground">{rightLabel || `${max} điểm`}</span>
      </div>

      {/* Slider */}
      <Slider defaultValue={[value]} min={min} max={max} step={step} onValueChange={handleChange} className="py-4" />

      {/* Hiển thị giá trị hiện tại */}
      <div className="text-center">
        <span className="text-lg font-medium">{value} điểm</span>
      </div>
    </div>
  )
}

// Component con cho câu hỏi Text
function TextContent({
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
  minLength?: number
  maxLength?: number
}) {
  return (
    <div className="space-y-2">
      {/* Textarea cho câu trả lời */}
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px]"
        minLength={minLength}
        maxLength={maxLength}
      />

      {/* Hiển thị số ký tự nếu có maxLength */}
      {maxLength && (
        <div className="text-right text-sm text-muted-foreground">
          {value.length}/{maxLength} ký tự
        </div>
      )}
    </div>
  )
}

