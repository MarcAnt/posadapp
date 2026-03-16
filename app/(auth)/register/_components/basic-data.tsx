import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

const BasicData = () => {
  const [rifType, setRifType] = useState("nit");
  const form = useFormContext();

  return (
    <>
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

      <FormField
        control={form.control}
        name="passwordConfirmation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirmar Contraseña</FormLabel>
            <FormControl>
              <Input type="password" placeholder="******" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between items-start gap-4 w-full">
        <FormField
          control={form.control}
          name={rifType}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{rifType.toUpperCase()}</FormLabel>
              <FormControl>
                <Input placeholder="J-12345678-9" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Select
          defaultValue={rifType}
          onValueChange={(value) => {
            setRifType(value);
            form.trigger(rifType);
          }}
        >
          <SelectTrigger className={"mt-6"}>
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rif">RIF</SelectItem>
            <SelectItem value="nit">NIT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default BasicData;
