"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "./date-range-picker";
import {
  Mountain,
  Sun,
  Building,
  Home,
  Waves,
  Wifi,
  AirVent,
  Car,
  PawPrint,
  Wine,
  Utensils,
  Accessibility,
  MapPin,
} from "lucide-react";
import Tags from "../tags";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";

const tagsCategories = [
  {
    id: 1,
    name: "Playas",
    icon: <Sun />,
  },
  {
    id: 2,
    name: "Montañas",
    icon: <Mountain />,
  },
  {
    id: 3,
    name: "Ciudades",
    icon: <Building />,
  },
  {
    id: 4,
    name: "Pueblos",
    icon: <Home />,
  },
];

const tagsServices = [
  { id: 1, name: "Piscina", icon: <Waves /> },
  { id: 2, name: "Wifi", icon: <Wifi /> },
  { id: 3, name: "Aire Acondicionado", icon: <AirVent /> },
  { id: 4, name: "Estacionamiento", icon: <Car /> },
  { id: 5, name: "Pet Friendly", icon: <PawPrint /> },
  { id: 6, name: "Restaurante", icon: <Utensils /> },
  { id: 7, name: "Bar", icon: <Wine /> },
  { id: 8, name: "Accesibilidad", icon: <Accessibility /> },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col  gap-2 bg-white p-2 rounded-md shadow w-full lg:w-1/2">
      <div className="flex items-center gap-2 w-full">
        <Field orientation="horizontal">
          <InputGroup className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0">
            <InputGroupInput
              type="search"
              className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              ref={searchRef}
            />
            <InputGroupAddon>
              <MapPin />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <DatePickerWithRange />
        <Button className="rounded-full" type="button" onClick={handleSearch}>
          Buscar
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {tagsCategories.map((tag) => (
          <Tags key={tag.id} onCheckedChange={() => {}} isChecked={false}>
            {tag.icon}
            {tag.name}
          </Tags>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tagsServices.map((tag) => (
          <Tags key={tag.id} onCheckedChange={() => {}} isChecked={false}>
            {tag.icon}
            {tag.name}
          </Tags>
        ))}
      </div>
    </div>
  );
};

export default Search;
