import {useState} from "react";
import {icons} from "../config/WebConfig";
import api from "../config/axiosConfig/AxiosConfig";

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
    //

    return (
        <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-center text-blue-800 tracking-tight">
                {question}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 px-4">
                {ratingOptions.map((option) => {
                    const isSelected = value === option.label;
                    const isHovered = hoverValue === option.label;

                    return (
                        <button
                            key={option.label}
                            onClick={() => onChange(option.label)}
                            onMouseEnter={() => setHoverValue(option.label)}
                            onMouseLeave={() => setHoverValue(null)}
                            className={`
                flex flex-col items-center p-5 rounded-2xl 
                w-[160px] min-w-[160px] 
                transform transition-all duration-300 ease-in-out
                ${
                                isSelected
                                    ? "bg-blue-800 shadow-lg scale-105"
                                    : "bg-white shadow-md hover:shadow-xl hover:scale-102"
                            }
                ${
                                isHovered && !isSelected
                                    ? "bg-gray-50 scale-102"
                                    : ""
                            }
              `}
                        >
                            <div className="relative">
                                <img
                                    src={option.image}
                                    alt={option.label}
                                    className={`
                    w-24 h-24 object-contain transition-transform duration-200
                    ${isSelected ? "scale-110" : ""}
                    ${isHovered ? "scale-105" : ""}
                  `}
                                />
                                {isSelected && (
                                    <div
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <span
                                className={`
                  mt-3 text-lg font-medium text-center transition-colors duration-200
                  ${isSelected ? "text-white" : "text-gray-700"}
                  ${isHovered && !isSelected ? "text-gray-900" : ""}
                `}
                            >
                {option.label}
              </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}