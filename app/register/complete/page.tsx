import { CompleteForm } from "@/components/complete";

export default function CompleteRegisterPage() {
  return (
    <main className="flex justify-center flex-col items-center min-h-screen">
      <h2 className="text-primary scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        PosadApp
      </h2>
      <CompleteForm />
    </main>
  );
}
