"use client";

import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function SidebarToggleButton({
  isOpen,
  onToggle,
  className = "",
}: SidebarToggleButtonProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={`fixed z-30 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <MenuIcon size={20} />
    </motion.button>
  );
}
