export const services = [
  {
    name: "WiFi",
    category: "General",
  },
  {
    name: "Habitaciones",
    category: "Cuartos",
  },
  {
    name: "Baños",
    category: "Cuartos",
  },
  {
    name: "Desayuno",
    category: "Comida",
  },
  {
    name: "Almuerzo",
    category: "Comida",
  },
  {
    name: "Cena",
    category: "Comida",
  },
  {
    name: "Bar",
    category: "Comida",
  },
  {
    name: "Piscina",
    category: "General",
  },
  {
    name: "Estacionamiento",
    category: "General",
  },
];

export const foodServices = services.filter(
  (service) => service.category === "Comida",
);

export const foodServicesData = foodServices.map((services) => ({
  ...services,
  id: services.name,
  text: services.name,
  isChecked: false,
}));

export const generalServices = services.filter(
  (service) => service.category === "General",
);

export const generalServicesData = generalServices.map((services) => ({
  ...services,
  id: services.name,
  text: services.name,
  isChecked: false,
}));

export const roomServices = services.filter(
  (service) => service.category === "Cuartos",
);

export const roomServicesData = roomServices.map((services) => ({
  ...services,
  id: services.name,
  text: services.name,
  isChecked: false,
}));
