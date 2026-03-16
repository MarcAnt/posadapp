import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

interface Type {
  id: number;
  name: string;
  image: string;
  description: string;
}

const types: Type[] = [
  {
    id: 1,
    name: "Playas",
    image: "/playas.webp",
    description: "Disfruta de las mejores playas",
  },
  {
    id: 2,
    name: "Montañas",
    image: "/montanas.webp",
    description: "Disfruta de las mejores montañas",
  },
  {
    id: 3,
    name: "Ciudades",
    image: "/ciudades.webp",
    description: "Disfruta de las mejores ciudades",
  },
  {
    id: 4,
    name: "Pueblos",
    image: "/pueblos.webp",
    description: "Disfruta de los mejores pueblos",
  },
];

const CardType = ({ name, image, description }: Type) => {
  return (
    <Card className="relative mx-auto w-80 max-w-md pt-0 overflow-hidden">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

const CardTypes = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-4">
      {types.map((type) => (
        <CardType key={type.id} {...type} />
      ))}
    </section>
  );
};

export default CardTypes;
