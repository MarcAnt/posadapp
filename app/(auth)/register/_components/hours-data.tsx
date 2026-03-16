import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";
import { formatTime } from "@/lib/utils";

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const HoursData = () => {
  const form = useFormContext();
  const [allDays, setAllDays] = useState(false);

  const handleAllDays = (checked: boolean): void => {
    if (checked) {
      form.setValue("officeDays", days);
      form.trigger("officeDays");
      setAllDays(true);
    } else {
      form.setValue("officeDays", []);
      form.trigger("officeDays");
      setAllDays(false);
    }
  };

  console.log(form.getValues("openOffice"), form.getValues("closeOffice"));

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <FormField
          control={form.control}
          name="openOffice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apertura</FormLabel>
              <FormControl>
                <TimeInput
                  className="border-2 border-primary text-md rounded-md min-w-auto"
                  inputsContainerClassName="min-w-auto"
                  disableFocusOnIcon
                  name={field.name}
                  id={field.name}
                  value={field.value}
                  onChange={(value) => {
                    const time = formatTime(value);
                    field.onChange(time);
                  }}
                  hour12
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="closeOffice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cierre</FormLabel>
              <FormControl>
                <TimeInput
                  className="border-2 border-primary text-md rounded-md min-w-auto"
                  inputsContainerClassName="min-w-auto"
                  disableFocusOnIcon
                  name={field.name}
                  id={field.name}
                  value={field.value}
                  onChange={(value) => {
                    const time = formatTime(value);
                    field.onChange(time);
                  }}
                  hour12
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox
            checked={allDays}
            onCheckedChange={(checked: boolean) => {
              handleAllDays(checked);

              return checked;
            }}
          />
        </FormControl>
        <div className="space-y-1 leading-none">
          <FormLabel className="text-sm font-medium leading-none">
            Todos los días
          </FormLabel>
        </div>
        <FormMessage />
      </FormItem>

      <div className="space-y-2 grid grid-cols-2 gap-2">
        {days.map((day) => (
          <FormField
            key={day}
            control={form.control}
            name="officeDays"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes(day)}
                    onCheckedChange={(checked) => {
                      setAllDays(false);

                      return checked
                        ? field.onChange([...field.value, day])
                        : field.onChange(
                            field.value?.filter(
                              (value: string) => value !== day,
                            ),
                          );
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium leading-none">
                    {day}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>
    </>
  );
};

export default HoursData;
