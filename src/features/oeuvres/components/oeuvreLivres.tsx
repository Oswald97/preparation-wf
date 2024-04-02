import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { CheckCircle, CircleDashed, Ellipsis } from "lucide-react";

const oeuvreLivres = () => {
  const livres: Livre<string>[] = [
    {
      etatLivre: false,
      numeroInventaire: "1",
      oeuvre: "",
    },
    {
      etatLivre: true,
      numeroInventaire: "2",
      oeuvre: "",
    },
  ];

  return (
    <>
      <Table className="border border-slate-200 rounded-2xl">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Numero inventaire</TableHead>
            <TableHead className="font-semibold">Etat</TableHead>
            <TableHead className="font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {livres.map((livre, index) => (
            <TableRow key={index}>
              <TableCell>{livre.numeroInventaire}</TableCell>
              <TableCell>
                <div className="flex w-[100px] items-center">
                  {livre.etatLivre ? (
                    <CheckCircle className="mr-2 size-4 text-muted-foreground" />
                  ) : (
                    <CircleDashed className="mr-2 size-4 text-muted-foreground" />
                  )}

                  <span>{livre.etatLivre ? "Disponible" : "Emprunté"}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                  <Ellipsis className="size-4" />
                  <span className="sr-only">Menu</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default oeuvreLivres;
