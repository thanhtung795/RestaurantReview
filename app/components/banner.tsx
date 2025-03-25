"use client"

import Image from "next/image"
import { useState } from "react"

// Props cho component Banner
interface BannerProps {
  title?: string
  logoText?: string
}

export function Banner({ title = "Hòa Hợp Cùng Phát Triển", logoText = "LOGO" }: BannerProps) {
  // State để kiểm tra xem ảnh có tồn tại không
  const [bannerError, setBannerError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden bg-primary/10">
      {/* Banner Image */}
      {!bannerError ? (
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/banner.png"
            alt={title}
            fill
            priority
            className="object-cover"
            onError={() => setBannerError(true)}
          />
        </div>
      ) : (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-2xl font-bold text-primary">{title}</div>
        </div>
      )}

      {/* Logo */}
      <div className="absolute bottom-0 left-0 z-20 p-4">
        {!logoError ? (
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={60}
            className="object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="bg-white p-2 rounded-md">
            <div className="w-[120px] h-[60px] flex items-center justify-center bg-primary/20 text-primary font-bold">
              {logoText}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

