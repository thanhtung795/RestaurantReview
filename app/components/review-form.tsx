"use client"

import { useState } from "react"
import { Progress } from "@/app/components/ui/progress"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Question } from "@/app/components/question"

// Định nghĩa kiểu dữ liệu cho câu hỏi
type QuestionType = {
  id: number
  type: "rating" | "slider" | "text"
  question: string
  required?: boolean
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

// Danh sách câu hỏi - có thể dễ dàng tùy chỉnh
const QUESTIONS: QuestionType[] = [
  {
    id: 1,
    type: "rating",
    question: "Câu hỏi 1: Thực đơn hàng ngày đối với Anh/Chị có được thay đổi phong phú không?",
    required: true,
    options: {
      leftLabel: "KHÔNG Phong phú",
      rightLabel: "RẤT Phong phú",
    },
  },
  {
    id: 2,
    type: "rating",
    question: "Câu hỏi 2: Việc phục vụ Cơm trắng, Canh của nhà ăn như hiện tại Anh/Chị có hài lòng không?",
    required: true,
    options: {
      leftLabel: "KHÔNG Hài lòng",
      rightLabel: "RẤT Hài lòng",
    },
  },
  {
    id: 3,
    type: "rating",
    question:
      "Câu hỏi 3: Vui lòng chọn câu trả lời với mức độ HÀI LÒNG từ thấp đến cao (từ 1 đến 5) cho những câu hỏi được đưa ra",
    required: true,
    options: {
      leftLabel: "RẤT KHÔNG Hài lòng",
      rightLabel: "RẤT Hài lòng",
    },
  },
  {
    id: 4,
    type: "rating",
    question: "Câu hỏi 4: Khi làm thêm giờ, thực đơn và khẩu phần ăn hiện tại có đáp ứng đầy đủ cho Anh/Chị không?",
    required: true,
    options: {
      leftLabel: "KHÔNG ĐỦ",
      rightLabel: "RẤT ĐẦY ĐỦ",
    },
  },
  {
    id: 5,
    type: "rating",
    question: "Câu hỏi 5: Ý kiến của Anh/Chị về việc vệ sinh an toàn thực phẩm tại nhà ăn có tốt hay không?",
    required: true,
    options: {
      leftLabel: "KHÔNG TỐT",
      rightLabel: "RẤT TỐT",
    },
  },
  {
    id: 6,
    type: "rating",
    question: "Câu hỏi 6: Anh/Chị có hài lòng với cách phục vụ của nhân viên tại nhà ăn công ty hay không?",
    required: true,
    options: {
      leftLabel: "KHÔNG Hài lòng",
      rightLabel: "RẤT Hài lòng",
    },
  },
  {
    id: 7,
    type: "text",
    question:
      "Câu hỏi 7: Anh/Chị có muốn Nhà ăn công ty cắt giảm, bổ sung hay cải thiện các món ăn nào trong Thực đơn không?",
    required: false,
    options: {
      placeholder: "Vui lòng nhập ý kiến của bạn tại đây...",
    },
  },
  {
    id: 8,
    type: "slider",
    question: "Câu hỏi 8: Vui lòng đánh giá khẩu phần ăn nhà hiện tại có đáp ứng đủ cho Anh/Chị không?",
    required: true,
    options: {
      leftLabel: "0 điểm",
      rightLabel: "5 điểm",
      min: 0,
      max: 5,
      step: 0.5,
    },
  },
]

export function ReviewForm() {
  // State cho bước hiện tại và câu trả lời
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})

  // Tính toán số bước và tiến trình
  const totalSteps = QUESTIONS.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  // Câu hỏi hiện tại
  const currentQuestion = QUESTIONS[currentStep]

  // Xử lý khi nhấn nút "Tiếp tục" hoặc "Hoàn thành"
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      // Chuyển đến câu hỏi tiếp theo
      setCurrentStep(currentStep + 1)
    } else {
      // Kiểm tra các câu hỏi bắt buộc
      const requiredQuestions = QUESTIONS.filter((q) => q.required).map((q) => q.id)
      const unansweredRequired = requiredQuestions.filter((id) => !answers[id])

      if (unansweredRequired.length > 0) {
        alert("Vui lòng trả lời tất cả các câu hỏi bắt buộc trước khi gửi đánh giá.")
        return
      }

      // Gửi form
      console.log("Form submitted:", answers)

      // Trong ứng dụng thực tế, bạn sẽ gửi dữ liệu này đến server
      // Ví dụ:
      // fetch('/api/submit-review', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(answers),
      // })

      // Hiển thị thông báo thành công
      alert("Cảm ơn bạn đã hoàn thành đánh giá!")

      // Reset form để bắt đầu đánh giá mới
      setAnswers({})
      setCurrentStep(0)
    }
  }

  // Xử lý khi nhấn nút "Quay lại"
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Xử lý khi người dùng trả lời câu hỏi
  const handleAnswer = (value: any) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    })
  }

  // Giá trị mặc định cho câu hỏi hiện tại
  const getDefaultValue = () => {
    if (currentQuestion.type === "rating") return answers[currentQuestion.id] || null
    if (currentQuestion.type === "slider") return answers[currentQuestion.id] || 0
    return answers[currentQuestion.id] || ""
  }

  return (
    <div className="space-y-6">
      {/* Hiển thị tiến trình */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {currentStep + 1}/{totalSteps}
        </span>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Card chứa câu hỏi */}
      <Card className="border-2">
        <CardContent className="pt-6">
          <Question
            question={currentQuestion.question}
            type={currentQuestion.type}
            value={getDefaultValue()}
            onChange={handleAnswer}
            options={currentQuestion.options}
          />
        </CardContent>
      </Card>

      {/* Nút điều hướng */}
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

