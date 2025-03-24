"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { RatingQuestion } from "@/components/rating-question"
import { SliderQuestion } from "@/components/slider-question"
import { TextQuestion } from "@/components/text-question"

type QuestionType = {
  id: number
  type: "rating" | "slider" | "text"
  question: string
  options?: {
    left?: string
    right?: string
    values?: string[]
  }
}

export function ReviewForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})

  const questions: QuestionType[] = [
    {
      id: 1,
      type: "rating",
      question: "Câu hỏi 1: Thực đơn hàng ngày đối với Anh/Chị có được thay đổi phong phú không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG Phong phú",
        right: "RẤT Phong phú",
      },
    },
    {
      id: 2,
      type: "rating",
      question: "Câu hỏi 2: Việc phục vụ Cơm trắng, Canh của nhà ăn như hiện tại Anh/Chị có hài lòng không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 3,
      type: "rating",
      question:
        "Câu hỏi 3: Vui lòng chọn câu trả lời với mức độ HÀI LÒNG từ thấp đến cao (từ 1 đến 5) cho những câu hỏi được đưa ra",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "RẤT KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 4,
      type: "rating",
      question: "Câu hỏi 4: Khi làm thêm giờ, thực đơn và khẩu phần ăn hiện tại có đáp ứng đầy đủ cho Anh/Chị không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG ĐỦ",
        right: "RẤT ĐẦY ĐỦ",
      },
    },
    {
      id: 5,
      type: "rating",
      question: "Câu hỏi 5: Ý kiến của Anh/Chị về việc vệ sinh an toàn thực phẩm tại nhà ăn có tốt hay không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG TỐT",
        right: "RẤT TỐT",
      },
    },
    {
      id: 6,
      type: "rating",
      question: "Câu hỏi 6: Anh/Chị có hài lòng với cách phục vụ của nhân viên tại nhà ăn công ty hay không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 7,
      type: "text",
      question:
        "Câu hỏi 7: Anh/Chị có muốn Nhà ăn công ty cắt giảm, bổ sung hay cải thiện các món ăn nào trong Thực đơn không?",
    },
    {
      id: 8,
      type: "slider",
      question: "Câu hỏi 8: Vui lòng đánh giá khẩu phần ăn nhà hiện tại có đáp ứng đủ cho Anh/Chị không?",
      options: {
        left: "0 điểm",
        right: "5 điểm",
      },
    },
  ]

  const totalSteps = questions.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form
      console.log("Form submitted:", answers)
      alert("Cảm ơn bạn đã hoàn thành đánh giá!")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAnswer = (value: any) => {
    setAnswers({
      ...answers,
      [questions[currentStep].id]: value,
    })
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {currentStep + 1}/{totalSteps}
        </span>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-2">
        <CardContent className="pt-6">
          {currentQuestion.type === "rating" && (
            <RatingQuestion
              question={currentQuestion.question}
              leftLabel={currentQuestion.options?.left}
              rightLabel={currentQuestion.options?.right}
              value={answers[currentQuestion.id] || null}
              onChange={handleAnswer}
            />
          )}

          {currentQuestion.type === "slider" && (
            <SliderQuestion
              question={currentQuestion.question}
              leftLabel={currentQuestion.options?.left}
              rightLabel={currentQuestion.options?.right}
              value={answers[currentQuestion.id] || 0}
              onChange={handleAnswer}
            />
          )}

          {currentQuestion.type === "text" && (
            <TextQuestion
              question={currentQuestion.question}
              value={answers[currentQuestion.id] || ""}
              onChange={handleAnswer}
            />
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button onClick={handleNext}>
          {currentStep === totalSteps - 1 ? "Hoàn thành" : "Tiếp tục"} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

