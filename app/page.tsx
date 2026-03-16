import CardTypes from "@/components/card-types";
import Header from "@/components/layout/header";
import PopularInns from "@/components/porpular-inns";
import Search from "@/components/ui/search";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <section className="flex flex-col items-center justify-center w-full bg-[url('../public/hero.webp')] min-h-[50vh] rounded-b-3xl bg-cover bg-center">
          <h1 className="text-white text-center text-2xl lg:text-5xl mb-5 font-semibold tracking-tight first:mt-0">
            Busca tu posada perfecta
          </h1>
          <div className="w-full flex items-center justify-center px-5">
            <Search />
          </div>
        </section>

        <h2 className="text-primary text-4xl font-bold my-4">Mas Populares</h2>
        <PopularInns />

        <h2 className="text-primary text-4xl font-bold my-4">
          Tipos de Posadas
        </h2>
        <CardTypes />
      </main>
    </>
  );
}
