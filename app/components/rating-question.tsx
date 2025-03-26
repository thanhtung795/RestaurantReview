import { useState } from "react";
import { icons } from "../config/WebConfig";

interface RatingQuestionProps {
  question: string;
  value: string | null;
  onChange: (value: string) => void;
}

export function RatingQuestion({
  question,
  value,
  onChange,
}: RatingQuestionProps) {
  const [hoverValue, setHoverValue] = useState<string | null>(null);

  const ratingOptions = [
    {
      label: "Rất không hài lòng",
      image: icons.ratkhonghailong,
    },
    {
      label: "Không hài lòng",
      image: icons.khonghailong,
    },
    {
      label: "Bình thường",
      image: icons.binhthuong,
    },
    {
      label: "Hài lòng",
      image: icons.hailong,
    },
    {
      label: "Rất hài lòng",
      image: icons.rathailong,
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-4xl font-medium text-center text-primary">
        {question}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {ratingOptions.map((option) => (
          <button
            key={option.label}
            onClick={() => onChange(option.label)}
            onMouseEnter={() => setHoverValue(option.label)}
            onMouseLeave={() => setHoverValue(null)}
            className={`flex flex-col items-center p-4 rounded-xl transition-colors duration-200
              w-[150px] md:w-[120px] flex-1 min-w-[150px] md:min-w-[120px]
              ${
                value === option.label
                  ? "bg-green-600 hover:bg-green-700"
                  : "hover:bg-gray-100"
              }
              ${value === option.label ? "text-white" : "text-gray-700"}`}
          >
            <img
              src={option.image}
              alt={option.label}
              className="w-40 h-40 md:w-16 md:h-16 object-contain"
            />
            <span
              className={`mt-2 text-xl font-medium text-center
              ${value === option.label ? "text-white" : "text-gray-700"}`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
