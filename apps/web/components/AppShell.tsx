"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bah-bg">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="px-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}