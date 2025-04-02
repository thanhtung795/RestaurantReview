"use client";

import { useState } from "react";
import { Factory, Eye, EyeOff, User, Lock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[400px] mt-4">
      <div className="relative mt-5  w-full h-fit flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="backdrop-blur-md bg-white/90 shadow-2xl border-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 z-0" />

            <CardHeader className="relative z-10 space-y-1 pb-6">
              <motion.div
                className="flex justify-center mb-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Factory className="h-10 w-10 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Đăng nhập
              </CardTitle>
              <CardDescription className="text-center text-gray-600 text-base">
                Nhập thông tin đăng nhập của bạn để truy cập hệ thống
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 space-y-5 px-6">
              <motion.div
                className="space-y-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Label
                  htmlFor="employeeId"
                  className="text-gray-700 font-medium"
                >
                  Mã nhân viên
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={18} />
                  </div>
                  <Input
                    id="employeeId"
                    placeholder="Nhập mã nhân viên của bạn"
                    className="h-12 pl-10 pr-4 bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-gray-700 font-medium"
                  >
                    Mật khẩu
                  </Label>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm text-blue-600 hover:text-blue-800"
                  >
                    Quên mật khẩu?
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu của bạn"
                    className="h-12 pl-10 pr-12 bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-12 w-12 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Checkbox
                  id="rememberMe"
                  className="text-blue-600 border-gray-400 rounded"
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-sm font-normal text-gray-600"
                >
                  Ghi nhớ đăng nhập
                </Label>
              </motion.div>
            </CardContent>

            <CardFooter className="relative z-10 px-6 pb-8">
              <motion.div
                className="w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/25">
                  Đăng nhập
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
