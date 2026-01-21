import { z } from "zod";

export const DocumentSchema = z.object({
  title: z.string().min(2),
  sectionId: z.string().min(1),
  tags: z.array(z.string()).default([]),
  minRoleLevel: z.number().int(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  version: z.string().default("v1"),
  filePath: z.string().optional(),
  fileUrl: z.string().optional()
});

export const PageSchema = z.object({
  title: z.string().min(2),
  sectionId: z.string().min(1),
  minRoleLevel: z.number().int(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  body: z.string().min(1)
});