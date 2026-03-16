"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import BasicData from "@/app/(auth)/register/_components/basic-data";
import Stepper from "@/components/stepper";
import ContactData from "@/app/(auth)/register/_components/contact-data";
import CategoryAndServicesData from "@/app/(auth)/register/_components/category-services-data";
import HoursData from "@/app/(auth)/register/_components/hours-data";
import { authSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";

export type FormValues = z.infer<typeof authSchema>;

const getFieldsByStep = (step: number) => {
  switch (step) {
    case 1:
      return ["name", "email", "password", "nit", "rif"];
    case 2:
      return ["phone", "address", "coords"];
    case 3:
      return ["sector", "services"];
    case 4:
      return ["officeHours", "officeDays"];
    default:
      return [];
  }
};

const messagesByStep: Record<number, string> = {
  1: "Datos básicos de la posada/alojamiento",
  2: "Datos de contacto",
  3: "Categoría y servicios",
  4: "Horarios de atención",
};

export function AuthForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      nit: "",
      phone: "",
      address: "",
      sector: "playa",
      services: [],
      closeOffice: "00:00",
      openOffice: "00:00",
      officeDays: [],
      coords: {
        lat: 0,
        lng: 0,
      },
    },

    resolver: zodResolver(authSchema),
  });

  const nextStep = async () => {
    // Validar solo los campos del paso actual antes de avanzar

    const fields = getFieldsByStep(step);
    const isValid = await form.trigger(
      fields as unknown as (keyof FormValues)[],
    );
    if (isValid) setStep((prev) => prev + 1);
  };

  async function onSubmit(data: FormValues) {
    console.log(data);

    // if (step === 5 && form.formState.isValid) {
    //   // Aquí conectarías con tu API o Auth.js / Clerk
    //   router.push("/dashboard");
    //   return;
    // }
  }

  return (
    <>
      <Stepper currentStep={step} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && <BasicData />}
          {step === 2 && <ContactData />}
          {step === 3 && <CategoryAndServicesData />}
          {step === 4 && <HoursData />}

          {step > 4 && (
            <>
              <p className="text-center font-bold text-lg text-primary">
                ¡Gracias por registrarte!
              </p>
              <p className="text-center text-sm">
                Te enviaremos un correo electrónico para verificar tu cuenta Una
                vez verificado tu correo, podrás iniciar sesión
              </p>
              <p className="text-center text-sm">
                Si no has recibido el correo, por favor revisa tu carpeta de
                spam
              </p>
              <p className="text-center text-sm">
                Puedes terminar de completar la información de tu posada en tu
                perfil después de verificar tu correo
              </p>
            </>
          )}

          <div className="flex w-full justify-between items-center">
            {step > 1 && step < 5 && (
              <Button
                type="submit"
                variant={"ghost"}
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft /> Regresar
              </Button>
            )}

            {step < 5 ? (
              <Button
                disabled={form.formState.isValidating}
                type="submit"
                onClick={nextStep}
                className={`bg-primary ${step > 1 ? "w-auto" : "w-full"}`}
              >
                Continuar <ArrowRight />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary hover:text-white w-full"
                disabled={form.formState.isValidating}
                onClick={() => {
                  if (step === 5 && form.formState.isValid) {
                    router.push("/dashboard");
                    return;
                  }
                }}
              >
                Registrarse <Check />
              </Button>
            )}
          </div>
          {step === 1 && (
            <Button variant="outline" className="w-full" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Registrarse con Google
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}
