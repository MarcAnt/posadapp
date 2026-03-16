import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tags from "@/components/tags";
import {
  foodServicesData,
  generalServicesData,
  roomServicesData,
} from "@/lib/services";
import { FormValues } from "@/app/(auth)/register/_components/authform";

const CategoryAndServicesData = () => {
  const form = useFormContext<FormValues>();

  return (
    <div>
      <FormField
        control={form.control}
        name="sector"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sector</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un sector" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="playa">Playa</SelectItem>
                <SelectItem value="montaña">Montaña</SelectItem>
                <SelectItem value="pueblo">Pueblo</SelectItem>
                <SelectItem value="selva">Selva</SelectItem>
                <SelectItem value="ciudad">Ciudad</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-2">
        <p className="font-medium text-sm">Servicios Generales</p>

        {generalServicesData.map((service) => (
          <FormField
            key={service.id}
            control={form.control}
            name="services"
            render={({ field }) => (
              <Tags
                isChecked={field.value.some((value) => value.id === service.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    field.onChange([
                      ...field.value,
                      {
                        id: service.id,
                        name: service.text,
                        category: service.category,
                      },
                    ]);
                  } else {
                    field.onChange(
                      field.value?.filter((value) => value.id !== service.id),
                    );
                  }
                  return checked;
                }}
              >
                <FormLabel>{service.text}</FormLabel>
              </Tags>
            )}
          />
        ))}

        <p className="font-medium text-sm">Servicios de comida</p>
        <div className="grid grid-cols-2 gap-2">
          {foodServicesData.map((service) => (
            <FormField
              key={service.id}
              control={form.control}
              name="services"
              render={({ field }) => (
                <Tags
                  isChecked={field.value.some(
                    (value) => value.id === service.id,
                  )}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([
                        ...field.value,
                        {
                          id: service.id,
                          name: service.text,
                          category: service.category,
                        },
                      ]);
                    } else {
                      field.onChange(
                        field.value?.filter((value) => value.id !== service.id),
                      );
                    }
                    return checked;
                  }}
                >
                  <FormLabel>{service.text}</FormLabel>
                </Tags>
              )}
            />
          ))}
        </div>

        <p className="font-medium text-sm">Servicios de habitaciones</p>
        <div className="grid grid-cols-2 gap-2">
          {roomServicesData.map((service) => (
            <FormField
              key={service.id}
              control={form.control}
              name="services"
              render={({ field }) => (
                <Tags
                  isChecked={field.value.some(
                    (value) => value.id === service.id,
                  )}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([
                        ...field.value,
                        {
                          id: service.id,
                          name: service.text,
                          category: service.category,
                        },
                      ]);
                    } else {
                      field.onChange(
                        field.value?.filter((value) => value.id !== service.id),
                      );
                    }
                    return checked;
                  }}
                >
                  <FormLabel>{service.text}</FormLabel>
                </Tags>
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryAndServicesData;
