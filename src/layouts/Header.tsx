import { CircleUser, Menu } from "lucide-react";
import React from "react";
import { Form, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import NavMenu from "./NavMenu";
import { getAccessToken } from "./../utils/_helpers";
import { useJwt } from "react-jwt";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const Header = () => {
  type jwtDecoded = { sub: string; iat: number; exp: number };
  const tokens = getAccessToken();
  const { decodedToken, isExpired } = useJwt<jwtDecoded>(tokens);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <NavMenu />
        </SheetContent>
      </Sheet>

      <div className="ml-auto">
        {tokens && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                {/* <CircleUser className="h-5 w-5" /> */}
                <Avatar className="size-12">
                  <AvatarFallback className="uppercase">{`${decodedToken?.sub?.charAt(
                    0
                  )} ${decodedToken?.sub?.charAt(1)}`}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {!tokens && <Link to={"/auth/login"}>Connexion</Link>}
      </div>
    </header>
  );
};

export default Header;
