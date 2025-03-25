import { Banner } from "@/app/components/banner";
import { ResultsTable } from "@/app/components/results-table";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Kết Quả Đánh Giá Nhà Hàng
        </h1>
        <div className="max-w-6xl mx-auto">
          <ResultsTable />
        </div>
      </div>
    </main>
  );
}
