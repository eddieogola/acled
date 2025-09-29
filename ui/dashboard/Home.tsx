import { Calendar } from "lucide-react";
import Card from "@/components/dashboard/home/Card";
import Embed from "@/components/dashboard/home/Embed";
import { ChartAreaInteractive } from "@/components/dashboard/home/Charts";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const todaysDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex ">
      <div className="flex-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Hello</h1>
            <p className="mt-4 text-gray-400">
              Get a quick overview of the latest conflict trends and data
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-black">{todaysDate}</span>
            <Calendar className=" text-gray-400" />
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-6">
            <Card title="Total Events" value="14,234" />
            <Card title="New Locations" value="56" />
            <Card title="Affected Countries" value="12" />
          </div>
        </div>
        <Separator className="my-8" />
        <div>
          <ChartAreaInteractive />
        </div>
      </div>
      <div className="min-h-screen w-64 ml-6 pl-6 border-l-2 border-gray-100">
        <h1 className="text-2xl font-bold">Latest Trends</h1>
        <Embed />
      </div>
    </div>
  );
};

export default Home;
