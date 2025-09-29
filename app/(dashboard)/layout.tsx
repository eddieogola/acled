import Link from "next/link";
import {
  House,
  ChartNoAxesCombined,
  NotebookText,
  ShieldAlert,
  SatelliteDish,
  Earth,
} from "lucide-react";

const dashboardRoutes = [
  {
    name: "Dashboard",
    path: "/home",
    icon: <House />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <ChartNoAxesCombined />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <NotebookText />,
  },
  {
    name: "EWS",
    path: "ews",
    icon: <ShieldAlert />,
  },
  {
    name: "Risk Intelligence",
    path: "risk",
    icon: <ShieldAlert />,
  },
  {
    name: "Media Intelligence",
    path: "media",
    icon: <SatelliteDish />,
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Side Navbar */}
      <aside className="border-r-gray-100 border-2 w-64 min-h-screen p-4">
        <div className="mt-8 ml-8 mb-20">
          <div className="flex items-center">
            <span className="inline-block mr-2 animate-spin [animation-duration:3s]">
              <Earth />
            </span>
            <h1 className="text-2xl font-bold">ACLED</h1>
          </div>
          <p className="text-gray-500 text-sm">Clarity in crisis</p>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            {dashboardRoutes.map((route) => (
              <Link href={route.path} key={route.path}>
                <li className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 text-gray-400 gap-4">
                  {route.icon}
                  {route.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
