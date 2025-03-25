"use client";

import { useState } from "react";
import { Steps, Button, Typography, Card } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RatingQuestion } from "@/app/components/rating-question";
import { TextQuestion } from "@/app/components/text-question";

const { Step } = Steps;

export function ReviewForm() {
  type QuestionType = {
    id: number;
    type: "rating" | "text";
    question: string;
    options?: {
      left?: string;
      right?: string;
      values?: string[];
    };
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [error, setError] = useState("");

  const questions: QuestionType[] = [
    {
      id: 1,
      type: "rating",
      question:
        "Câu hỏi 1: Anh/Chị có hài lòng với định lượng suất ăn của nhà hàng không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "KHÔNG Phong phú",
        right: "RẤT Phong phú",
      },
    },
    {
      id: 2,
      type: "rating",
      question:
        "Câu hỏi 2: Anh/Chị có cảm giác ngon miệng khi thưởng thức món ăn không?",
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
        "Câu hỏi 3: Anh/Chị có hài lòng với dụng cụ phục vụ suất ăn có đảm bảo vệ sinh không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "RẤT KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 4,
      type: "rating",
      question:
        "Câu hỏi 4: Khi thưởng thức món ăn, Anh/Chị có hài lòng với thái độ phuc vụ của nhân viên nhà thầu không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "RẤT KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 5,
      type: "rating",
      question:
        "Câu hỏi 5: Anh/Chị có hài lòng với điều kiện vệ sinh/ thiết bị phục vụ ở nhà ăn không?",
      options: {
        values: ["1", "2", "3", "4", "5"],
        left: "RẤT KHÔNG Hài lòng",
        right: "RẤT Hài lòng",
      },
    },
    {
      id: 6,
      type: "rating",
      question:
        "Câu hỏi 6: Thực đơn, vị món ăn và thái độ phục vụ của Nhà Thầu trong ngày có khiến Anh/Chị hài lòng không?",
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
        "Câu hỏi 7: Anh/Chị có muốn Nhà thầu thay đổi thực đơn, cách chế biến món ăn, đề xuất món ăn nào không?",
    },
  ];

  const totalSteps = questions.length;

  const handleNext = () => {
    if (
      questions[currentStep].type === "rating" &&
      !answers[questions[currentStep].id]
    ) {
      setError("Vui lòng chọn một câu trả lời trước khi tiếp tục.");
      return;
    }
    setError("");
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setError("");
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto p-4 bg-gray-100 rounded-xl shadow-lg">
      {error && (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Typography className="text-red-500 font-bold text-sm text-center bg-amber-400 p-2 w-fit mx-auto rounded-lg">
            {error}
          </Typography>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="border-2 p-4">
            {questions[currentStep].type === "rating" && (
              <RatingQuestion
                question={questions[currentStep].question}
                leftLabel={questions[currentStep].options?.left}
                rightLabel={questions[currentStep].options?.right}
                value={answers[questions[currentStep].id] || null}
                onChange={handleAnswer}
              />
            )}
            {questions[currentStep].type === "text" && (
              <TextQuestion
                question={questions[currentStep].question}
                value={answers[questions[currentStep].id] || ""}
                onChange={handleAnswer}
              />
            )}
          </Card>
        </motion.div>
        <Steps
          rootClassName={"justify-center mx-auto"}
          current={currentStep}
          className="mb-4"
        >
          {questions.map((q, index) => (
            <Step key={index} />
          ))}
        </Steps>
      </AnimatePresence>

      <div className="flex justify-between">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            icon={<ChevronLeft />}
          >
            Quay lại
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button onClick={handleNext} type="primary" icon={<ChevronRight />}>
            {currentStep === totalSteps - 1 ? "Hoàn thành" : "Tiếp tục"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
