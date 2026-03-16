import { AuthForm } from "@/app/(auth)/register/_components/authform";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PosadApp - Registro",
  description: "Regístrate para gestionar tus reservas",
  keywords: ["PosadApp", "Registro", "Reservas", "Posadas", "Alojamientos"],
  openGraph: {
    title: "PosadApp - Registro",
    description: "Regístrate para gestionar tus reservas",
    type: "website",
    locale: "es-ES",
    siteName: "PosadApp",
  },
  twitter: {
    title: "PosadApp - Registro",
    description: "Regístrate para gestionar tus reservas",
    card: "summary_large_image",
    site: "@PosadApp",
  },
};

import registerImage from "@/public/register.webp";

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 relative overflow-hidden">
        <div className="w-60 h-60 rounded-full absolute -bottom-30 left-0 bg-linear-to-br from-primary-50 to-primary z-10 opacity-50 blur-2xl"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AuthForm />
            {/* <div className="w-60 h-60 rounded-full absolute -bottom-30 left-0 bg-linear-to-br from-primary-50 to-primary z-10 opacity-50 blur-2xl"></div> */}
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={registerImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
