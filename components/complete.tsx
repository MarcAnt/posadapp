"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { completeSchema } from "@/lib/validations/auth"; // Ajusta la ruta
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

export function CompleteForm() {
  const form = useForm({
    resolver: zodResolver(completeSchema()),
    defaultValues: {
      address: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof completeSchema>) {
    console.log(`Datos enviados para completar:`, values);
    // Aquí conectarías con tu API o Auth.js / Clerk / Supabase
  }

  return (
    <Card className="min-w-[320px]">
      <CardHeader>
        <CardTitle>Completar registro</CardTitle>
        <CardDescription>
          Información sobre el alojamiento y dirección
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input placeholder="Calle 123, Barrio 456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input type="phone" placeholder="123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Completar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
