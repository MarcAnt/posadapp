import { Button } from "../ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Languages } from "lucide-react";

function Header() {
  return (
    <header className="flex min-h-16 w-full shrink-0 items-center gap-2 bg-primary text-primary-foreground">
      <nav className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <h1 className="text-base font-medium">PosadApp</h1>
        </div>
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Languages />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-40">
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">
                  Español
                </Button>
                <Button variant="outline" size="sm">
                  English
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Link href="/register">
            <Button>Registrarse</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" className="text-primary">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
