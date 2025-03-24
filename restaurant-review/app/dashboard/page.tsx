import { Banner } from "@/components/banner"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardCharts } from "@/components/dashboard-charts"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Thống Kê Đánh Giá Nhà Hàng</h1>
        <div className="grid gap-6">
          <DashboardStats />
          <DashboardCharts />
        </div>
      </div>
    </main>
  )
}

