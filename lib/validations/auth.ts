import * as z from "zod";

const phoneRegex = /^\+?[(]?[0-9]{3}[)]?[- \.]?[0-9]{3}[- \.]?[0-9]{4,6}$/;

const stepOneSchema = z
  .object({
    email: z.email({ message: "Email inválido" }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
      )
      .min(6, { message: "Mínimo 6 caracteres" })
      .max(16, { message: "El password es demasiado largo" }),

    passwordConfirmation: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
      )
      .min(6, { message: "Mínimo 6 caracteres" })
      .max(16, { message: "El password es demasiado largo" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  });

// const businessSchema = z
//   .object({
//     rif: z.string().trim().toUpperCase().optional(),
//     nit: z.string().trim().optional(),
//   })
//   .refine(
//     (data) => {
//       if (!data.rif && !data.nit) {
//         return false;
//       }
//       return true;
//     },
//     {
//       message: "Debes registrar al menos un documento de identidad (RIF o NIT)",
//       path: ["rif"], // El error se marcará en el campo RIF
//     },
//   );

const stepTwoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "El nombre es requerido" })
    .max(32, { message: "El nombre es demasiado largo" }),
  rif: z
    .string()
    .trim()
    .toUpperCase()

    .refine((value) => {
      if (!value) return true;
      const rif = value.toUpperCase();
      const rifRegex = /^[JGVEP]-\d{8}-[0-9]$/i;
      return rifRegex.test(rif);
    }, "El RIF es inválido"),
  nit: z
    .string()
    .trim()
    .toUpperCase()

    .refine((value) => {
      if (!value) return true;
      const nit = value.toUpperCase();
      const nitRegex = /^[VEGJP]-\d{8}-\d$/i;
      return nitRegex.test(nit);
    }, "El NIT es inválido"),
});

const stepThreeSchema = z.object({
  phone: z
    .string()
    .min(6, { message: "Mínimo 6 caracteres" })
    .regex(phoneRegex, "El teléfono es inválido"),
  address: z.string().min(6, { message: "Mínimo 6 caracteres" }),
  coords: z.object({
    lat: z.coerce.number(),
    lng: z.coerce.number(),
  }),
});

const stepFourSchema = z.object({
  sector: z.enum(["playa", "montaña", "pueblo", "selva", "ciudad"]),
  services: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        category: z.string(),
      }),
    )
    .min(1, { message: "Debe seleccionar al menos un servicio" }),
});

const stepFiveSchema = z.object({
  openOffice: z.iso.time(),
  closeOffice: z.iso.time(),
  officeDays: z
    .array(z.string())
    .min(1, { message: "Debe seleccionar al menos un dia de oficina" }),
});

export const stepSchemas = [
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  stepFourSchema,
  stepFiveSchema,
];

export const authSchema = z
  .object({
    // Paso 1: Datos basicos y de la posada
    email: z.email({ message: "Email inválido" }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!¡%*?¿&_-])[A-Za-z\d@$!¡%*?¿&_-]{6,16}$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@,!,%,*,?,&,-,_)",
      )
      .min(6, { message: "Mínimo 6 caracteres" })
      .max(16, { message: "El password es demasiado largo" }),

    passwordConfirmation: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!¡%*?¿&_-])[A-Za-z\d@$!¡%*?¿&_-]{6,16}$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@,!,%,*,?,&,-,_)",
      )
      .min(6, { message: "Mínimo 6 caracteres" })
      .max(16, { message: "El password es demasiado largo" }),

    name: z
      .string()
      .min(2, { message: "El nombre es requerido" })
      .max(32, { message: "El nombre es demasiado largo" }),
    rif: z
      .string()
      .refine((value) => {
        if (!value) return false;
        const rif = value.toUpperCase();
        const rifRegex = /^[VEGJP]-[0-9]{8}-[0-9]$/;
        return rifRegex.test(rif);
      }, "El RIF es inválido")
      .trim()
      .optional(),
    nit: z
      .string()
      .refine((value) => {
        if (!value) return false;
        const nit = value.toUpperCase();
        const nitRegex = /^[VEGJP]-[0-9]{8}-[0-9]$/;
        return nitRegex.test(nit);
      }, "El NIT es inválido")
      .trim()
      .optional(),

    // Paso 2: Datos de contacto
    phone: z
      .string()
      .min(6, { message: "Mínimo 6 caracteres" })
      .regex(phoneRegex, "El teléfono es inválido"),
    address: z.string().min(6, { message: "Mínimo 6 caracteres" }),
    coords: z.object({
      lat: z.coerce.number(),
      lng: z.coerce.number(),
    }),

    // Paso 3: Categoria y servicios
    sector: z.enum(["playa", "montaña", "pueblo", "selva", "ciudad"]),
    services: z
      .array(
        z.object({
          name: z.string(),
          category: z.string(),
        }),
      )
      .min(1, { message: "Debe seleccionar al menos un servicio" }),

    // Paso 5: Horarios
    // checkin: z.string().min(2, { message: "El horario de check-in es requerido" }),
    // checkout: z.string().min(2, { message: "El horario de check-out es requerido" }),
    // officeHours: z
    //   .string()
    //   .min(2, { message: "El horario de oficina es requerido" }),
    openOffice: z.iso.time(),
    closeOffice: z.iso.time(),
    // officeHours: z.object({
    // }),

    officeDays: z
      .array(z.string())
      .min(1, { message: "Debe seleccionar al menos un dia de oficina" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  });
