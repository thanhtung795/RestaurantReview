import { Banner } from "@/components/banner"
import { ReviewForm } from "@/components/review-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Đánh Giá Chất Lượng Nhà Hàng</h1>
        <div className="max-w-4xl mx-auto">
          <ReviewForm />
        </div>
      </div>
    </main>
  )
}

