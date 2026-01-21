import "@/styles/globals.css";
import AppShell from "@/components/AppShell";
import RoleGate from "@/components/RoleGate";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGate minRoleLevel={10}>
      <AppShell>{children}</AppShell>
    </RoleGate>
  );
}