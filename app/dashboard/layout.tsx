import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Dashboard Header</header>
      <main>{children}</main>
      <footer>Dashboard Footer</footer>
    </div>
  );
};

export default DashboardLayout;
