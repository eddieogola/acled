"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import {
  Calendar,
  Filter,
  Download,
  ArrowUpDown,
  FileText,
} from "lucide-react";
import { riskFactorData, riskLevels } from "@/lib/data";

const chartConfig = {
  veryHigh: { label: "Very High", color: "#ef4444" },
  high: { label: "High", color: "#f97316" },
  medium: { label: "Medium", color: "#eab308" },
  low: { label: "Low", color: "#22c55e" },
};

export default function EWS() {
  const [timeFrame, setTimeFrame] = useState("month");
  const [region, setRegion] = useState("all");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Early Warning System</h1>
          <p className="mt-4 text-gray-400">
            Provides predictive conflict forecasting and automated response
            triggers.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger>
                <SelectValue placeholder="Time frame" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="week">Last week</SelectItem>
                  <SelectItem value="month">Last month</SelectItem>
                  <SelectItem value="quarter">Last quarter</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All regions</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="middle_east">Middle East</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="col-span-3 md:col-span-1">
          <CardHeader>
            <CardTitle>Risk Overview</CardTitle>
            <CardDescription>Current risk distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Very High Risk</span>
                </div>
                <span className="font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <span>High Risk</span>
                </div>
                <span className="font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span>Medium Risk</span>
                </div>
                <span className="font-medium">5</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Low Risk</span>
                </div>
                <span className="font-medium">1</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total Countries Monitored</span>
                <span>10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 md:col-span-2">
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
            <CardDescription>Breakdown by risk category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={riskFactorData} barGap={2}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(label) => `${label} Factors`}
                    />
                  }
                />
                <Bar
                  dataKey="veryHigh"
                  name="Very High"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="high"
                  name="High"
                  fill="#f97316"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="medium"
                  name="Medium"
                  fill="#eab308"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="low"
                  name="Low"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                />
                <ChartLegend
                  content={
                    <ChartLegendContent
                      verticalAlign="bottom"
                      payload={undefined}
                    />
                  }
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Countries at Risk</CardTitle>
          <CardDescription>
            Current risk assessment of monitored countries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Risk Level
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Risk Score
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Report</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riskLevels.map((risk) => (
                <TableRow key={risk.id}>
                  <TableCell className="font-medium">{risk.country}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          risk.risk === "Very High"
                            ? "bg-red-500"
                            : risk.risk === "High"
                            ? "bg-orange-500"
                            : risk.risk === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                      {risk.risk}
                    </div>
                  </TableCell>
                  <TableCell>{risk.score}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 ${
                          risk.trend === "up"
                            ? "text-red-500"
                            : risk.trend === "down"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {risk.trend === "up"
                          ? "↑"
                          : risk.trend === "down"
                          ? "↓"
                          : "→"}
                      </div>
                      {risk.trend.charAt(0).toUpperCase() + risk.trend.slice(1)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(risk.lastUpdate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <button className="flex items-center gap-1 text-sm text-blue-500">
                      <FileText className="h-4 w-4" /> View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
