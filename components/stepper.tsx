"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";

type Props = {
  currentStep: number;
};

const steps = [
  { value: 1, label: "Datos básicos" },
  { value: 2, label: "Datos de contacto" },
  { value: 3, label: "Categoría y tipo de posada" },
  { value: 4, label: "Servicios" },
  { value: 5, label: "Horarios" },
];

const Stepper = ({ currentStep }: Props) => {
  const progress = (currentStep * 100) / steps.length;

  return (
    <div className="flex min-w-[320px] flex-col gap-2 mb-6">
      <div className="flex justify-between gap-2">
        <p className="text-center font-bold text-md text-primary">
          {currentStep} de {steps.length}
        </p>
        <p className="text-center font-semibold text-sm text-primary">
          {steps[currentStep - 1].label}
        </p>
      </div>

      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default Stepper;
