"use client";
import BarChart from "@/components/dashboard/analytics/BarChart";
import React from "react";

const Analytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="mt-4 mb-4 text-gray-400">
        Provides advanced data visualization and analytics tools for conflict
        data.
      </p>
      <BarChart />
    </div>
  );
};

export default Analytics;
