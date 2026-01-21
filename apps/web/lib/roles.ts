export type RoleName = "staff" | "senior" | "supervisor" | "manager" | "admin" | "director";

export const ROLE_LEVEL: Record<RoleName, number> = {
  staff: 10,
  senior: 20,
  supervisor: 30,
  manager: 40,
  admin: 50,
  director: 60
};

export function roleLevelToName(level: number): RoleName {
  if (level >= 60) return "director";
  if (level >= 50) return "admin";
  if (level >= 40) return "manager";
  if (level >= 30) return "supervisor";
  if (level >= 20) return "senior";
  return "staff";
}