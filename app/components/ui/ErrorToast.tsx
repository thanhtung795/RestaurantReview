"use client";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface ErrorToastProps {
  message: string;
  desc: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message, desc }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  console.log(visible);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
      <AlertCircle className="w-6 h-6" />
      <div>
        <strong>{message}</strong>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ErrorToast;
