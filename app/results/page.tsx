import { Banner } from "@/components/banner"
import { ResultsTable } from "@/components/results-table"
import Link from "next/link"

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner component */}
      <Banner />

      <div className="container mx-auto px-4 py-8">
        {/* Tiêu đề trang */}
        <h1 className="text-3xl font-bold text-center mb-8">Kết Quả Đánh Giá Nhà Hàng</h1>

        {/* Navigation menu */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
            Đánh Giá
          </Link>
          <Link href="/results" className="px-4 py-2 bg-primary text-white rounded-md">
            Kết Quả
          </Link>
        </div>

        {/* Bảng kết quả */}
        <div className="max-w-6xl mx-auto">
          <ResultsTable />
        </div>
      </div>
    </main>
  )
}

