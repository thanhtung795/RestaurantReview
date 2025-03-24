"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const satisfactionData = [
  { month: "T1", haiLong: 65, khongHaiLong: 35 },
  { month: "T2", haiLong: 70, khongHaiLong: 30 },
  { month: "T3", haiLong: 75, khongHaiLong: 25 },
  { month: "T4", haiLong: 72, khongHaiLong: 28 },
  { month: "T5", haiLong: 78, khongHaiLong: 22 },
  { month: "T6", haiLong: 82, khongHaiLong: 18 },
  { month: "T7", haiLong: 85, khongHaiLong: 15 },
]

const criteriaData = [
  { name: "Định lượng suất ăn", value: 78 },
  { name: "Cảm giác ngon miệng", value: 82 },
  { name: "Dụng cụ phục vụ", value: 90 },
  { name: "Thái độ phục vụ", value: 85 },
  { name: "Điều kiện vệ sinh", value: 88 },
  { name: "Thực đơn đa dạng", value: 75 },
]

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Mức Độ Hài Lòng Theo Tháng</CardTitle>
          <CardDescription>Tỷ lệ người dùng hài lòng và không hài lòng</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              haiLong: {
                label: "Hài lòng",
                color: "hsl(var(--chart-1))",
              },
              khongHaiLong: {
                label: "Không hài lòng",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart accessibilityLayer data={satisfactionData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => `${value}%`} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
              <Bar dataKey="haiLong" fill="var(--color-haiLong)" radius={4} />
              <Bar dataKey="khongHaiLong" fill="var(--color-khongHaiLong)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Đánh Giá Theo Tiêu Chí</CardTitle>
          <CardDescription>Điểm số trung bình cho từng tiêu chí (%)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Điểm số",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <LineChart accessibilityLayer data={criteriaData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-value)"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

