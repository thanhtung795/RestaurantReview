"use client";

import { Banner } from "@/app/components/banner";
import { ReviewForm } from "@/app/components/review-form";
import WebConfig from "@/app/config/WebConfig";
import AnimatedContent from "@/app/components/ui/Animation/AnimatedContent";
import ErrorToast from "@/app/components/ui/ErrorToast";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function RestaurantReview() {
  const [result, setResult] = useState<any>(null);

  return (
    <>
      {result && <ErrorToast message={result.message} desc={result.desc}/>}
      <main className="min-h-[740px] bg-background flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md opacity-80 min-h-[740px]"
            style={{ backgroundImage: `url(${WebConfig.getBackground})` }}
          ></div>
          ;{/* Nội dung chính */}//-
          {/* Nội dung chính */}//+
          <div className="relative flex flex-col items-center mt-3 w-full">
            <h1 className="text-4xl font-semibold text-black mb-2 bg-gray-100 filter opacity-90 px-6 py-3 rounded-full text-center">
              Khảo sát chất lượng và dịch vụ nhà ăn
            </h1>
            <div className="w-[90%] max-w-[1300px] mx-auto">
              <div className="flex flex-col justify-center items-center min-h-[500px]">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <ReviewForm setResult={setResult} />
                </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
