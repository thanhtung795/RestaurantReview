"use client";
import ErrorToast from "@/app/components/ui/ErrorToast";
import { notification } from "antd";
import axios from "axios";

type Environment = "development" | "production";

const ENV: Record<Environment, { API_URL: string; TIMEOUT: number }> = {
  development: {
    API_URL: "http://14.241.235.252:8585/tvs_api/api/Dso/exec", // URL DEV
    TIMEOUT: 30000,
  },
  production: {
    API_URL: "", // URL của API
    TIMEOUT: 30000,
  },
};
const config = ENV[(process.env.NODE_ENV as Environment) || "development"];
// instance axios
const axiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: config.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// interceptor request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// );

// interceptor response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response) {
      switch (response.status) {
        case 400:
          return {
            status: 400,
            noti: (
              <ErrorToast
                message="Lỗi dữ liệu"
                desc={response.data.message || "Dữ liệu không hợp lệ"}
              />
            ),
          };

        case 401:
          // localStorage.removeItem("token");
          // window.location.href = "/login";
          return {
            status: 401,
            noti: {
              message: "Phiên đăng nhập hết hạn",
              desc: "Vui lòng đăng nhập lại",
            },
          };
        // chuyển hướng đến trang login

        case 403:
          return {
            status: 403,
            noti: {
              message: "Không có quyền truy cập",
              desc: response.data.message || "Bạn không có quyền truy cập",
            },
          };

        case 404:
          return {
            status: 404,
            noti: {
              message: "Không tìm thấy",
              desc: response.data.message || "Tài nguyên không tồn tại",
            },
          };

        case 500:
          return {
            status: 500,
            noti: {
              message: "Lỗi hệ thống",
              desc: response.data.message || "Đã có lỗi xảy ra",
            },
          };

        default:
          return (
            <ErrorToast
              message="Có lỗi xảy ra"
              desc={response.data.message || "Vui lòng thử lại"}
            />
          );
      }
    } else {
      // lỗi mạng
      <ErrorToast
        message="Lỗi kết nối"
        desc={response.data.message || "Vui lòng kiểm tra lại kết nối mạng"}
      />;
    }

    return Promise.reject(error);
  }
);

// API methods
const api = {
  get: (url: string, config = {}) => axiosInstance.get(url, config),
  post: (url: string, data?: any, config = {}) =>
    axiosInstance.post(url, data, config),
  put: (url: string, data?: any, config = {}) =>
    axiosInstance.put(url, data, config),
  delete: (url: string, config = {}) => axiosInstance.delete(url, config),
  patch: (url: string, data?: any, config = {}) =>
    axiosInstance.patch(url, data, config),
};

// cách sử dụng
// import api from './api/axiosConfig';
// const fetchData = async () => {
//     try {
//       const response = await api.get('/users'); (hoặc post, put, delete, patch)
//       console.log(response);
//     } catch (error) {
//
//       console.log(error);
//     }
//   };

export default api;
