"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Ajusta la ruta
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { authSchema } from "@/lib/validations/auth";

interface AuthFormProps {
  mode: "login" | "register";
}

export function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(authSchema(mode)),
    defaultValues: {
      email: "",
      password: "",
      ...(isRegister && { name: "", rifnit: "" }),
    },
  });

  async function onSubmit(values: z.infer<typeof authSchema>) {
    console.log(`Datos enviados para ${mode}:`, values);

    if (isRegister) {
      // Aquí conectarías con tu API o Auth.js / Clerk / Supabase
      router.push("/register/complete");
      return;
    }
  }

  return (
    <Card className="min-w-[320px]">
      <CardHeader>
        <CardTitle>{isRegister ? "Crear cuenta" : "Iniciar sesión"}</CardTitle>
        <CardDescription>
          {isRegister
            ? "Ingresa tus datos básicos para registrarte y completar tu perfil."
            : "Introduce tus credenciales para acceder"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {isRegister && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la posada o alojamiento</FormLabel>
                    <FormControl>
                      <Input placeholder="Posada del Sol" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="correo@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isRegister && (
              <FormField
                control={form.control}
                name="rifnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RIF/NIT</FormLabel>
                    <FormControl>
                      <Input placeholder="J-12345678-9" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" className="w-full">
              {isRegister ? "Registrarse" : "Entrar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
