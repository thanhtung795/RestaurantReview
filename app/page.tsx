import { Banner } from "@/app/components/banner";
import { ReviewForm } from "@/app/components/review-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner component */}
      <Banner />

      <div className="container mx-auto px-4 py-8">
        {/* Tiêu đề trang */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Đánh Giá Chất Lượng Nhà Hàng
        </h1>

        {/* Form đánh giá */}
        <div className="max-w-4xl mx-auto">
          <ReviewForm />
        </div>
      </div>
    </main>
  );
}
