import { AuthForm } from "@/components/authform";

export default function RegisterPage() {
  return (
    <main className="flex justify-center flex-col items-center min-h-screen">
      <h2 className="text-primary scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        PosadApp
      </h2>
      <AuthForm mode="register" />
    </main>
  );
}
