"use client";

import {useState} from "react";
import {Steps, Button, Typography, Card} from "antd";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronLeft, ChevronRight, LucideCheck} from "lucide-react";
import {RatingQuestion} from "@/components/rating-question";
import {TextQuestion} from "@/components/text-question";
import Alert from "@mui/joy/Alert";

const {Step} = Steps;

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
    const [completed, setCompleted] = useState(false);

    const questions: QuestionType[] = [
        {
            id: 1,
            type: "rating",
            question: "Câu hỏi 1: Anh/Chị có hài lòng với định lượng suất ăn của nhà hàng không?",
            options: {
                values: ["1", "2", "3", "4", "5"],
                left: "KHÔNG Phong phú",
                right: "RẤT Phong phú",
            },
        },
        {
            id: 2,
            type: "rating",
            question: "Câu hỏi 2: Anh/Chị có cảm giác ngon miệng khi thưởng thức món ăn không?",
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
            question: "Câu hỏi 4: Khi thưởng thức món ăn, Anh/Chị có hài lòng với thái độ phuc vụ của nhân viên nhà thầu không?",
            options: {
                values: ["1", "2", "3", "4", "5"],
                left: "RẤT KHÔNG Hài lòng",
                right: "RẤT Hài lòng",
            },
        },
        {
            id: 5,
            type: "rating",
            question: "Câu hỏi 5: Anh/Chị có hài lòng với điều kiện vệ sinh/ thiết bị phục vụ ở nhà ăn không?",
            options: {
                values: ["1", "2", "3", "4", "5"],
                left: "RẤT KHÔNG Hài lòng",
                right: "RẤT Hài lòng",
            },
        },
        {
            id: 6,
            type: "rating",
            question: "Câu hỏi 6: Thực đơn, vị món ăn và thái độ phục vụ của Nhà Thầu trong ngày có khiến Anh/Chị hài lòng không?",
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
    ]


    const totalSteps = questions.length;

    const handleNext = () => {
        if (questions[currentStep].type === "rating" && !answers[questions[currentStep].id]) {
            setError("Vui lòng chọn một câu trả lời trước khi tiếp tục.");
            return;
        }
        setError("");
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log(answers);
            setCompleted(true);
        }
    };

    const handlePrevious = () => {
        setError("");
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleAnswer = (value: any) => {
        setAnswers({...answers, [questions[currentStep].id]: value});
    };

    // @ts-ignore
    return (
        <div className="space-y-6 max-w-xl mx-auto p-4 bg-gray-100 rounded-xl shadow-lg">
            {completed ?
                (
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        className="bg-green-100 p-6 rounded-lg text-center shadow-md"
                    >
                        <LucideCheck size={50} className="text-green-600 mx-auto"/>
                        <h2 className="text-xl font-bold text-green-800 mt-2">Cảm ơn bạn đã hoàn thành khảo sát!</h2>
                        <p className="text-gray-700">Phản hồi của bạn rất quan trọng để chúng tôi cải thiện dịch vụ.</p>
                    </motion.div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -50}}
                            transition={{duration: 0.4}}>

                            {error && (
                                <Alert className="mb-4 justify-center w-fit flex mx-auto"
                                       color={'danger'}>
                                    {error}
                                </Alert>
                            )}


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
                        <Steps rootClassName={"justify-center mx-auto"} current={currentStep} className="mb-4">
                            {questions.map((q, index) => (
                                <Step key={index}/>
                            ))}
                        </Steps>
                    </AnimatePresence>
                )}

            <div className="flex justify-center">
                <div className="flex gap-4">
                    <motion.div whileTap={{scale: 0.9}}>
                        <Button onClick={handlePrevious} className={"rounded-full"} disabled={currentStep === 0}>
                            <ChevronLeft/>
                        </Button>
                    </motion.div>
                    <motion.div whileTap={{scale: 0.9}}>
                        <Button onClick={handleNext} className={"rounded-full bg-green-500"}>
                            {currentStep === totalSteps - 1 ? <LucideCheck/> : <ChevronRight/>}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
