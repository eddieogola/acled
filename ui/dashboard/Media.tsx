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
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import {
  Calendar,
  Filter,
  Download,
  ArrowUpDown,
  FileText,
  Search,
  Globe,
  TrendingUp,
  Newspaper,
  Radio,
  Twitter,
} from "lucide-react";
import {
  mediaSources,
  mediaTypeData,
  sentimentColors,
  sentimentData,
} from "@/lib/data";

const chartConfig = {
  negative: { label: "Negative", color: "#ef4444" },
  neutral: { label: "Neutral", color: "#9ca3af" },
  positive: { label: "Positive", color: "#22c55e" },
};

const Media = () => {
  const [timeFrame, setTimeFrame] = useState("month");
  const [region, setRegion] = useState("all");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Media Intelligence Suite</h1>
          <p className="mt-4 text-gray-400">
            Provides comprehensive media monitoring and analysis tools for
            conflict zones.
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
            <Globe className="h-4 w-4" />
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
            <CardTitle>Sentiment Analysis</CardTitle>
            <CardDescription>Media sentiment distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center">
              <ChartContainer config={chartConfig} className="h-64">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.name}`}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={sentimentColors[index % sentimentColors.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        labelFormatter={(label) => `${label} Sentiment`}
                      />
                    }
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Negative</span>
                </div>
                <span className="font-medium">55%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <span>Neutral</span>
                </div>
                <span className="font-medium">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Positive</span>
                </div>
                <span className="font-medium">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 md:col-span-2">
          <CardHeader>
            <CardTitle>Media Type Analysis</CardTitle>
            <CardDescription>Sentiment by media source type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={mediaTypeData} barGap={2}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(label) => `${label} Media`}
                    />
                  }
                />
                <Bar
                  dataKey="negative"
                  name="Negative"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="neutral"
                  name="Neutral"
                  fill="#9ca3af"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="positive"
                  name="Positive"
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top Media Sources</CardTitle>
            <CardDescription>By mention frequency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-blue-400" />
                  <span>Twitter</span>
                </div>
                <span className="font-medium">125</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gray-600" />
                  <span>Facebook</span>
                </div>
                <span className="font-medium">98</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gray-600" />
                  <span>Al Jazeera</span>
                </div>
                <span className="font-medium">87</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gray-600" />
                  <span>Reuters</span>
                </div>
                <span className="font-medium">64</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gray-600" />
                  <span>BBC</span>
                </div>
                <span className="font-medium">58</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Trending Keywords</CardTitle>
            <CardDescription>Most mentioned terms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-500" />
                  <span>Armed conflict</span>
                </div>
                <span className="font-medium">245</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-500" />
                  <span>Civilian casualties</span>
                </div>
                <span className="font-medium">187</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span>Ceasefire</span>
                </div>
                <span className="font-medium">156</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span>Humanitarian aid</span>
                </div>
                <span className="font-medium">132</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-yellow-500" />
                  <span>Peace talks</span>
                </div>
                <span className="font-medium">97</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Media Categories</CardTitle>
            <CardDescription>By source type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-blue-500" />
                  <span>News Outlets</span>
                </div>
                <span className="font-medium">48%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-purple-500" />
                  <span>Social Media</span>
                </div>
                <span className="font-medium">32%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-green-500" />
                  <span>Radio</span>
                </div>
                <span className="font-medium">12%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>TV</span>
                </div>
                <span className="font-medium">8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Media Sources</CardTitle>
              <CardDescription>
                Monitored sources with sentiment analysis
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2">
              <Search className="h-4 w-4" />
              <input
                className="border-none bg-transparent outline-none"
                placeholder="Search sources..."
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source Name</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Category
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Sentiment
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Recent Mentions
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaSources.map((source) => (
                <TableRow key={source.id}>
                  <TableCell className="font-medium">{source.name}</TableCell>
                  <TableCell>{source.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          source.sentiment === "Negative"
                            ? "bg-red-500"
                            : source.sentiment === "Neutral"
                            ? "bg-gray-400"
                            : "bg-green-500"
                        }`}
                      ></div>
                      {source.sentiment}
                    </div>
                  </TableCell>
                  <TableCell>{source.recentMentions}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 ${
                          source.trend === "up"
                            ? "text-red-500"
                            : source.trend === "down"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {source.trend === "up"
                          ? "↑"
                          : source.trend === "down"
                          ? "↓"
                          : "→"}
                      </div>
                      {source.trend.charAt(0).toUpperCase() +
                        source.trend.slice(1)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(source.lastUpdate).toLocaleDateString()}
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
};

export default Media;
