"use client";

import { ReactNode, useEffect, useState } from "react";
import { watchAuth, getUserProfile, UserProfile } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function RoleGate({
  minRoleLevel = 10,
  children
}: {
  minRoleLevel?: number;
  children: ReactNode;
}) {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = watchAuth(async (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }
      const p = await getUserProfile(user.uid);
      if (!p || p.status !== "active") {
        router.replace("/access-pending");
        return;
      }
      if (p.roleLevel < minRoleLevel) {
        router.replace("/");
        return;
      }
      setProfile(p);
      setLoading(false);
    });
    return () => unsub();
  }, [router, minRoleLevel]);

  if (loading) return <div className="p-6 text-bah-muted">Loading…</div>;
  if (!profile) return null;
  return <>{children}</>;
}