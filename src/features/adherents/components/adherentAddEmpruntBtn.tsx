import { Button } from "@/src/components/ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

const AdherentAddEmpruntBtn = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" className="ml-auto gap-1">
          Ajouter
          <Plus className="size-4" />
        </Button>
      </SheetTrigger>
      {/* J'ai dû modifier le component */}
      <SheetContent className="w-[90vw] md:w-[min(900px,80%)]">
        <SheetHeader>
          <SheetTitle>Emprunt</SheetTitle>
          <SheetDescription>
            Ajouter un nouvel emprunt 
          </SheetDescription>
        </SheetHeader>
        <div className=""></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AdherentAddEmpruntBtn;
