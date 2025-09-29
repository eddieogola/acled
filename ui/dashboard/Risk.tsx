"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  alertsData,
  incidentTypeData,
  riskData,
  timeSeriesData,
} from "@/lib/data";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const chartConfig = {
  incidents: {
    label: "Incidents",
    color: "#0088FE",
  },
  riskScore: {
    label: "Risk Score",
    color: "#00C49F",
  },
  fatalities: {
    label: "Fatalities",
    color: "#FF8042",
  },
};

const Risk = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Risk Intelligence</h1>
        <p className="mt-2 text-gray-400">
          Offers risk assessment tools and real-time alerts for conflict zones.
        </p>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/4">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="eastern">Eastern Africa</SelectItem>
              <SelectItem value="western">Western Africa</SelectItem>
              <SelectItem value="northern">Northern Africa</SelectItem>
              <SelectItem value="central">Central Africa</SelectItem>
              <SelectItem value="southern">Southern Africa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/4">
          <Select
            value={selectedTimeframe}
            onValueChange={setSelectedTimeframe}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Risk Overview</CardTitle>
            <CardDescription>Regional risk scores and severity</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart data={riskData}>
                <XAxis dataKey="region" />
                <YAxis />
                <Bar dataKey="riskScore" name="Risk Score" fill="#00C49F" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incident Trends</CardTitle>
            <CardDescription>Monthly incident tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart data={timeSeriesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line
                  type="monotone"
                  dataKey="incidents"
                  stroke="#0088FE"
                  strokeWidth={2}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incident Types</CardTitle>
            <CardDescription>Distribution by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <PieChart>
                <Pie
                  data={incidentTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }: any) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {incidentTypeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend
                  content={<ChartLegendContent payload={incidentTypeData} />}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Risk Alerts</CardTitle>
          <CardDescription>
            Critical security alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Region</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alertsData.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.region}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        alert.severity === "Critical"
                          ? "bg-red-100 text-red-800"
                          : alert.severity === "High"
                          ? "bg-orange-100 text-orange-800"
                          : alert.severity === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </TableCell>
                  <TableCell>{alert.description}</TableCell>
                  <TableCell>{alert.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-gray-500">Showing latest 5 alerts</p>
          <button className="text-blue-500 hover:text-blue-700 text-sm">
            View all alerts
          </button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Risk Analysis</CardTitle>
          <CardDescription>Comprehensive breakdown by region</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Region</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Incidents</TableHead>
                <TableHead>Fatalities</TableHead>
                <TableHead>Primary Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riskData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.region}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">{item.riskScore}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded">
                        <div
                          className={`h-full rounded ${
                            item.riskScore > 80
                              ? "bg-red-500"
                              : item.riskScore > 60
                              ? "bg-orange-500"
                              : item.riskScore > 40
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${item.riskScore}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.incidents}</TableCell>
                  <TableCell>{item.fatalities}</TableCell>
                  <TableCell>{item.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Risk;
