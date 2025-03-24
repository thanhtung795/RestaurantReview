import { Banner } from "@/components/banner"
import { ReviewForm } from "@/components/review-form"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner component */}
      <Banner />

      <div className="container mx-auto px-4 py-8">
        {/* Tiêu đề trang */}
        <h1 className="text-3xl font-bold text-center mb-8">Đánh Giá Chất Lượng Nhà Hàng</h1>

        {/* Navigation menu */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/" className="px-4 py-2 bg-primary text-white rounded-md">
            Đánh Giá
          </Link>
          <Link
            href="/results"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
          >
            Kết Quả
          </Link>
        </div>

        {/* Form đánh giá */}
        <div className="max-w-4xl mx-auto">
          <ReviewForm />
        </div>
      </div>
    </main>
  )
}

