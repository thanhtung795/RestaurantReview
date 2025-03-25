"use client";

import { Textarea } from "@/app/components/ui/textarea";

interface TextQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextQuestion({ question, value, onChange }: TextQuestionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-center text-indigo-600">
        {question}
      </h3>

      <Textarea
        placeholder="Vui lòng nhập tại đây..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px] bg-gray-100"
      />
    </div>
  );
}
