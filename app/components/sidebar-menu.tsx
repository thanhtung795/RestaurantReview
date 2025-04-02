"use client";
import {
  Home,
  MenuIcon,
  Star,
  Settings,
  User,
  ShoppingCart,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SidebarMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SidebarMenu({ isOpen, onToggle }: SidebarMenuProps) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Track scroll position and window height
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial values
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { icon: Home, label: "Trang chủ", active: false },
    { icon: Star, label: "Đánh giá", active: true },
    { icon: ShoppingCart, label: "Đơn hàng", active: false },
    { icon: User, label: "Tài khoản", active: false },
    { icon: Settings, label: "Cài đặt", active: false },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed left-0 top-[201px] z-50 flex flex-col bg-white shadow-lg"
        style={{
          height: "100vh",
          position: "fixed",
        }}
        initial={{ width: isOpen ? "240px" : "0px", x: isOpen ? 0 : "-100%" }}
        animate={{ width: isOpen ? "240px" : "0px", x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="font-bold text-lg">
            {!isOpen ? (
              ""
            ) : (
              <div className="ml-3">
                <p className="font-medium">Khách hàng</p>
                <p className="text-xs text-gray-500">khachhang@gmail.com</p>
              </div>
            )}
          </div>
          <button
            onClick={onToggle}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : ""}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-3 hover:bg-gray-100 transition-colors ${
                    item.active ? "bg-green-50 text-green-600 font-medium" : ""
                  }`}
                >
                  <item.icon
                    size={20}
                    className={item.active ? "text-green-600" : "text-gray-500"}
                  />
                  <span className="ml-3">{item.label}</span>
                  {item.active && (
                    <ChevronRight
                      size={16}
                      className="ml-auto text-green-600"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Toggle button for mobile - follows scroll */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-30 md:hidden bg-white p-2 rounded-full shadow-md"
      >
        <MenuIcon size={20} />
      </button>
    </>
  );
}
