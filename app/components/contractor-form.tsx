"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { cn } from "@/app/lib/utils";
import { CalendarIcon, PlusCircle, Trash2, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export function ContractorForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [authorizedPersons, setAuthorizedPersons] = useState([
    { name: "", position: "", idNumber: "", scope: "", contact: "" },
  ]);

  const form = useForm({
    defaultValues: {
      taxCode: "",
      departmentId: "",
      contractorName: "",
      businessPartner: "",
      customer: "",
      vendor: "",
      contractNumber: "",
      address: "",
      contractorLevel: "",
      representativeName: "",
      position: "",
      idType: "",
      nationality: "",
      idNumber: "",
      issueDate: undefined,
      phone: "",
      email: "",
      commitmentFile: "",
      securityFile: "",
      hasAuthorization: false,
      authorizedPersons: [
        { name: "", position: "", idNumber: "", scope: "", contact: "" },
      ],
      authorizationStartDate: undefined,
      authorizationEndDate: undefined,
    },
  });

  function onSubmit(values: any) {
    console.log(values);
    // Submit form data
  }

  const addAuthorizedPerson = () => {
    setAuthorizedPersons([
      ...authorizedPersons,
      { name: "", position: "", idNumber: "", scope: "", contact: "" },
    ]);
  };

  const removeAuthorizedPerson = (index: number) => {
    const newPersons = [...authorizedPersons];
    newPersons.splice(index, 1);
    setAuthorizedPersons(newPersons);
    form.setValue("authorizedPersons", newPersons);
  };

  const updatePerson = (index: number, field: string, value: string) => {
    const newPersons = [...authorizedPersons];
    newPersons[index] = { ...newPersons[index], [field]: value };
    setAuthorizedPersons(newPersons);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6 flex  justify-end space-x-4">
        <div className="w-48 flex items-end space-x-2 mr-8">
          <div className="flex-1 ">
            <h2 className="text-lg p-1 font-medium">Ngày: </h2>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left  font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd/MM/yyyy") : <span>Chọn ngày</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={vi}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <p className="mb-6 text-gray-600">
        Chúng tôi đề nghị Hòa Phát mở tài khoản nhà thầu kèm theo với các nội
        dung sau:
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Section A: General Information */}
          <div className="rounded-md overflow-hidden">
            <div className="bg-blue-800 text-white p-3 font-medium">
              PHẦN A. THÔNG TIN CHUNG ĐƠN VỊ NHÀ THẦU
            </div>
            <div className="border border-gray-200 p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="taxCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Mã số thuế <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập mã số thuế" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="departmentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Bộ phận quản lý <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập bộ phận quản lý" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="contractorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Tên nhà thầu <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên nhà thầu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="businessPartner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Business partner <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập business partner" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Customer <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập customer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="vendor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Vendor
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập vendor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contractNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Số hợp đồng <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập số hợp đồng" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Địa chỉ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập địa chỉ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contractorLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Hạng mục nhà thầu <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="--Lựa chọn--" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="level1">Hạng mục 1</SelectItem>
                        <SelectItem value="level2">Hạng mục 2</SelectItem>
                        <SelectItem value="level3">Hạng mục 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section B: Legal Representative */}
          <div className="rounded-md overflow-hidden">
            <div className="bg-blue-800 text-white p-3 font-medium">
              PHẦN B. THÔNG TIN NGƯỜI ĐẠI DIỆN PHÁP LUẬT
            </div>
            <div className="border border-gray-200 p-4 space-y-4">
              <FormField
                control={form.control}
                name="representativeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Họ và tên <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập họ và tên" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Chức vụ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập chức vụ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="idType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Loại chứng thực <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="--Lựa chọn--" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cmnd">CMND</SelectItem>
                          <SelectItem value="cccd">CCCD</SelectItem>
                          <SelectItem value="passport">Hộ chiếu</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Quốc tịch <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="--Lựa chọn--" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="vietnam">Việt Nam</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="idNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Số chứng thực <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập số chứng thực" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="issueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-sm font-medium">
                        Ngày cấp <span className="text-red-500">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy")
                              ) : (
                                <span>--Lựa chọn--</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Điện thoại <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập số điện thoại" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập email"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Section C: Attachments */}
          <div className="rounded-md overflow-hidden">
            <div className="bg-blue-800 text-white p-3 font-medium">
              PHẦN C. HỒ SƠ ĐÍNH KÈM
            </div>
            <div className="border border-gray-200 p-4 space-y-4">
              <p className="text-sm text-gray-600">
                Vui lòng đính kèm các tệp hồ sơ đầy đủ thông tin bắt buộc theo
                yêu cầu <span className="text-red-500">*</span> (Tải mẫu hồ sơ{" "}
                <a href="#" className="text-blue-600 underline">
                  TẠI ĐÂY
                </a>
                )
              </p>

              <FormField
                control={form.control}
                name="commitmentFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Bản cam kết tuân thủ quy định{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <label className="flex items-center border rounded-md p-2 cursor-pointer">
                        <Upload className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-500 text-sm">
                          {field.value || "Chọn tệp đính kèm"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="securityFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Biện pháp an toàn thi công
                    </FormLabel>
                    <FormControl>
                      <label className="flex items-center border rounded-md p-2 cursor-pointer">
                        <Upload className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-500 text-sm">
                          {field.value || "Chọn tệp đính kèm"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasAuthorization"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <div className="font-medium">
                          Giấy ủy quyền <span className="text-red-500">*</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="authorization"
                              value="no"
                              checked={!field.value}
                              onChange={() =>
                                form.setValue("hasAuthorization", false)
                              }
                              className="h-4 w-4"
                            />
                            <span>Không</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="authorization"
                              value="yes"
                              checked={field.value}
                              onChange={() =>
                                form.setValue("hasAuthorization", true)
                              }
                              className="h-4 w-4"
                            />
                            <span>Có</span>
                          </label>
                        </div>
                      </div>
                    </FormControl>
                    {field.value && (
                      <FormControl>
                        <label className="flex items-center border rounded-md p-2 cursor-pointer">
                          <Upload className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-gray-500 text-sm">
                            {field.value || "Chọn tệp đính kèm"}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                          />
                        </label>
                      </FormControl>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section D: Authorization Info (conditional) */}
          {form.watch("hasAuthorization") && (
            <div className="rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-3 font-medium">
                PHẦN D. THÔNG TIN NGƯỜI ỦY QUYỀN
              </div>
              <div className="border border-gray-200 p-4 space-y-4">
                <p className="text-sm text-gray-600">
                  Nếu có ủy quyền, vui lòng nhập thông tin người được ủy quyền.
                  Trường hợp không có, bỏ qua bước này.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="authorizationStartDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium">
                          Thời gian ủy quyền từ
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy")
                                ) : (
                                  <span>--Lựa chọn--</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="authorizationEndDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium">~</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy")
                                ) : (
                                  <span>--Lựa chọn--</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border rounded-md overflow-hidden">
                  {/* Hiển thị dạng bảng khi màn hình lớn */}
                  <div className="hidden md:block">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            TT
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Họ và tên
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Chức vụ
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CCCD
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nội dung ủy quyền
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Số điện thoại/email liên hệ
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Xóa
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {authorizedPersons.map((person, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 text-sm text-gray-500">
                              {index + 1}
                            </td>
                            <td className="px-3 py-2">
                              <Input
                                className="w-full text-sm"
                                value={person.name}
                                onChange={(e) =>
                                  updatePerson(index, "name", e.target.value)
                                }
                              />
                            </td>
                            <td className="px-3 py-2">
                              <Input
                                className="w-full text-sm"
                                value={person.position}
                                onChange={(e) =>
                                  updatePerson(
                                    index,
                                    "position",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="px-3 py-2">
                              <Input
                                className="w-full text-sm"
                                value={person.idNumber}
                                onChange={(e) =>
                                  updatePerson(
                                    index,
                                    "idNumber",
                                    e.target.value
                                  )
                                }
                              />
                            </td>
                            <td className="px-3 py-2">
                              <Input
                                className="w-full text-sm"
                                value={person.scope}
                                onChange={(e) =>
                                  updatePerson(index, "scope", e.target.value)
                                }
                              />
                            </td>
                            <td className="px-3 py-2">
                              <Input
                                className="w-full text-sm"
                                value={person.contact}
                                onChange={(e) =>
                                  updatePerson(index, "contact", e.target.value)
                                }
                              />
                            </td>
                            <td className="px-3 py-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeAuthorizedPerson(index)}
                                disabled={authorizedPersons.length === 1}
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Hiển thị dạng card khi màn hình nhỏ */}
                  <div className="md:hidden">
                    {authorizedPersons.map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 border-b rounded-md shadow-sm mb-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">
                            TT: {index + 1}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAuthorizedPerson(index)}
                            disabled={authorizedPersons.length === 1}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        <div className="mt-2 space-y-2">
                          <div>
                            <span className="text-xs text-gray-500">
                              Họ và tên
                            </span>
                            <Input
                              className="w-full text-sm"
                              value={person.name}
                              onChange={(e) =>
                                updatePerson(index, "name", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">
                              Chức vụ
                            </span>
                            <Input
                              className="w-full text-sm"
                              value={person.position}
                              onChange={(e) =>
                                updatePerson(index, "position", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">CCCD</span>
                            <Input
                              className="w-full text-sm"
                              value={person.idNumber}
                              onChange={(e) =>
                                updatePerson(index, "idNumber", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">
                              Nội dung ủy quyền
                            </span>
                            <Input
                              className="w-full text-sm"
                              value={person.scope}
                              onChange={(e) =>
                                updatePerson(index, "scope", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">
                              Số điện thoại/email
                            </span>
                            <Input
                              className="w-full text-sm"
                              value={person.contact}
                              onChange={(e) =>
                                updatePerson(index, "contact", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="flex items-center text-blue-500 border-blue-500 border-dashed"
                  onClick={addAuthorizedPerson}
                >
                  <PlusCircle className="h-4 w-4 mr-1" /> Thêm mới
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button type="submit" className="bg-blue-800 hover:bg-blue-900">
              <span className=" text-white">Gửi hồ sơ</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
