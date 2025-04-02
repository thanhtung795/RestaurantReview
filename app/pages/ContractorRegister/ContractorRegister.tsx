import { Banner } from "@/app/components/banner";
import { ContractorForm } from "@/app/components/contractor-form";

function ContractorRegister() {
  return (
    <main className="min-h-screen bg-background ">
      <div className="relative  w-full h-fit flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-8 opacity-80"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        ></div>

        <div className="relative  container mx-auto px-4 -mt-3 py-8">
          <div className="title-contractor flex flex-col items-center space-y-2 mb-6">
            <h1 className="text-3xl font-semibold text-black bg-gray-100 filter opacity-80 w-fit ">
              ĐĂNG KÝ TÀI KHOẢN NHÀ THẦU
            </h1>
            <h3>
              (Lưu ý: Các trường có dấu <span className="text-red-500">*</span>{" "}
              là trường bắt buộc điền thông tin)
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContractorForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContractorRegister;
