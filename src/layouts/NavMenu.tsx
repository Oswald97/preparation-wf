import {
  ArrowUpFromDot,
  Book,
  BookOpenText,
  LucideIcon,
  Timer,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

type NavProps = {
  id: string;
  name: string;
  to: string;
  icon: LucideIcon;
};

const NavMenu = () => {
  const menus: NavProps[] = [
    {
      id: "adherents",
      name: "Adhérents",
      to: "/adherents",
      icon: User,
    },
    {
      id: "oeuvres",
      name: "Oeuvres",
      to: "/oeuvres",
      icon: Book,
    },
    {
      id: "emprunts",
      name: "Emprunts",
      to: "/",
      icon: ArrowUpFromDot,
    },
    {
      id: "reservation",
      name: "Réservation",
      to: "/",
      icon: Timer,
    },
  ];
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <BookOpenText className="h-6 w-6" />
          <span className="">Biblio WF</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {menus.map((menu) => (
            <NavigationLink navProps={menu} key={menu.id} />
          ))}
        </nav>
      </div>
    </div>
  );
};

const NavigationLink = ({ navProps }: { navProps: NavProps }) => {
  return (
    <NavLink
      to={navProps.to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary",
        ({ isActive }: { isActive: boolean }) =>
          isActive ? "bg-muted text-primary" : ""
      )}
    >
      <navProps.icon className="h-4 w-4" />
      {navProps.name}
    </NavLink>
  );
};

export default NavMenu;
