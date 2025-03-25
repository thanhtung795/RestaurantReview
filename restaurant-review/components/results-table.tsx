"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search, Filter, Calendar } from "lucide-react";

// Sample data based on the image
const evaluationData = [
  {
    id: 1,
    group: "Nhóm đánh giá",
    criteria: "01 - Định lượng suất ăn",
    result: "03 - Đủ",
    date: "19-01-2024",
  },
  {
    id: 2,
    group: "Nhóm đánh giá",
    criteria: "01 - Định lượng suất ăn",
    result: "04 - Không đủ",
    date: "19-01-2024",
  },
  {
    id: 3,
    group: "Nhóm đánh giá",
    criteria: "02 - Cảm giác ngon miệng khi ăn",
    result: "13 - Bình thường",
    date: "19-01-2024",
  },
  {
    id: 4,
    group: "Nhóm đánh giá",
    criteria: "02 - Cảm giác ngon miệng khi ăn",
    result: "14 - Ngon - Hình thức hấp dẫn",
    date: "19-01-2024",
  },
  {
    id: 5,
    group: "Nhóm đánh giá",
    criteria: "03 - Dụng cụ phục vụ suất ăn có đảm bảo vệ sinh",
    result: "06 - Đạt",
    date: "19-01-2024",
  },
  {
    id: 6,
    group: "Nhóm đánh giá",
    criteria: "04 - Thái độ phục vụ của nhân viên nhà thầu",
    result: "17 - Thân thiện, vui vẻ",
    date: "19-01-2024",
  },
  {
    id: 7,
    group: "Nhóm đánh giá",
    criteria: "05 - Điều kiện vệ sinh/ thiết bị phục vụ ở nhà ăn",
    result: "06 - Đạt",
    date: "19-01-2024",
  },
  {
    id: 8,
    group: "Nhóm đánh giá",
    criteria: "06 - Đề xuất thay đổi thực đơn, cách chế biến món ăn",
    result: "01 - Có",
    date: "19-01-2024",
  },
  {
    id: 9,
    group: "Nhóm đánh giá",
    criteria:
      "07 - Thực đơn, vị món ăn và thái độ phục vụ của Nhà thầu trong ngày",
    result: "10 - Hài lòng",
    date: "19-01-2024",
  },
];

export function ResultsTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = evaluationData.filter(
    (item) =>
      item.criteria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.result.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getResultColor = (result: string) => {
    if (
      result.includes("Đạt") ||
      result.includes("Đủ") ||
      result.includes("Ngon") ||
      result.includes("Hài lòng") ||
      result.includes("Thân thiện")
    ) {
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    } else if (result.includes("Không") || result.includes("Chưa")) {
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    } else {
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-4 bg-muted/30 border-b">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm tiêu chí..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Filter className="h-4 w-4" />
              <span>Lọc</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Calendar className="h-4 w-4" />
              <span>Ngày</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold">STT</TableHead>
              <TableHead className="font-bold">Nhóm tiêu chí</TableHead>
              <TableHead className="font-bold">Tiêu chí đánh giá</TableHead>
              <TableHead className="font-bold">Kết quả tiêu chí</TableHead>
              <TableHead className="font-bold">Ngày đánh giá</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.group}</TableCell>
                <TableCell>{item.criteria}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getResultColor(item.result)}
                  >
                    {item.result}
                  </Badge>
                </TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
