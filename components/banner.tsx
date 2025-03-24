import Image from "next/image"

export function Banner() {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image src="/images/banner.png" alt="Hòa Hợp Cùng Phát Triển" fill priority className="object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 z-20 p-4">
        <Image src="/images/logo.png" alt="Logo" width={120} height={60} className="object-contain" />
      </div>
    </div>
  )
}

