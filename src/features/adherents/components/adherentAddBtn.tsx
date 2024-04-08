import { Button } from "@/src/components/ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { AdherentForm } from "./adherentForm";
import { useDispatch, useSelector } from "react-redux";
import { toogleSheet } from "@/src/store/slices/adherent.slice";

const AdherentAddBtn = () => {
  const dispatch = useDispatch();
  const { sheetState } = useSelector((state: any) => state.adherent);

  const toogle = () => {
    dispatch(toogleSheet());
  };
  return (
    <Sheet open={sheetState} onOpenChange={toogle}>
      <SheetTrigger asChild>
        <Button size="sm" className="ml-auto gap-1">
          Ajouter
          <Plus className="size-4 " />
        </Button>
      </SheetTrigger>
      {/* J'ai dû modifier le component sheet pour la responsivité */}
      <SheetContent className="w-[90vw] md:w-[min(600px,80%)]">
        <SheetHeader>
          <SheetTitle>Ajouter un Adhérent</SheetTitle>
        </SheetHeader>

        <AdherentForm />
      </SheetContent>
    </Sheet>
  );
};

export default AdherentAddBtn;
