import { z } from "zod";

export const complianceFormSchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" })
    .optional()
    .or(z.literal("")),
  reason: z
    .string()
    .min(1, { message: "Selecione um motivo" }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Descrição deve ter no mínimo 10 caracteres" })
    .max(2000, { message: "Descrição deve ter no máximo 2000 caracteres" }),
});

export const complianceFormSchemaRequired = complianceFormSchema.extend({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter no mínimo 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
});

export type ComplianceFormData = z.infer<typeof complianceFormSchema>;
