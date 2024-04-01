import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { OeuvreTableRowActions } from "./oeuvre-table-row-actions";
import OeuvreAddBtn from "./oeuvreAddBtn";

export function oeuvresList() {
  const oeuvres: Oeuvre[] = [
    {
      isbn: "978-1591847489",
      auteur: "Stanley McChrystal",
      titre: "Team of Teams",
      nombreLivreLibre: 2,
    },
    {
      isbn: "978-2070518425",
      auteur: "J. K. Rowling",
      titre: "Harry Potter à l'ecole des sorciers",
      nombreLivreLibre: 2,
    },
  ];

  return (
    <>
    <div className="flex justify-end mb-4">
    <OeuvreAddBtn />
    </div>
    <Table className="border border-slate-200 rounded-2xl">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">ISBN</TableHead>
          <TableHead className="font-semibold">Titre</TableHead>
          <TableHead className="font-semibold">Auteur</TableHead>
          <TableHead className="font-semibold"># Livre disponible</TableHead>
          <TableHead className="font-semibold ">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {oeuvres.map((oeuvre) => (
          <TableRow key={oeuvre.isbn}>
            <TableCell>{oeuvre.isbn}</TableCell>
            <TableCell>{oeuvre.titre}</TableCell>
            <TableCell>{oeuvre.auteur}</TableCell>
            <TableCell>{oeuvre.nombreLivreLibre}</TableCell>
            <TableCell className="">
              <OeuvreTableRowActions row={oeuvre} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}

export default oeuvresList;
