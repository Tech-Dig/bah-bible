"use client";

import RoleGate from "@/components/RoleGate";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <RoleGate minRoleLevel={50}>{children}</RoleGate>;
}
