import * as z from "zod";

export const authSchema = (mode: "login" | "register") =>
  z.object({
    email: z.email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
    // Solo requerimos el nombre si el modo es 'register'
    ...(mode === "register" && {
      name: z.string().min(2, { message: "El nombre es requerido" }),
      rifnit: z.string().min(2, { message: "El RIF/NIT es requerido" }),
    }),
  });

export const completeSchema = () =>
  z.object({
    address: z.string().min(6, { message: "Mínimo 6 caracteres" }),
    phone: z.string().min(6, { message: "Mínimo 6 caracteres" }),
  });
