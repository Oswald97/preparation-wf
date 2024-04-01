import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import AdherentAddEmpruntBtn from "./adherentAddEmpruntBtn";

const MAX_ALLOWED_LOANS: number = 5

const AdherentEmprunt = ({ emprunts }: { emprunts: Emprunt[] }) => {
  return (
    <Card>
      <CardHeader className="block sm:flex gap-4 flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Emprunts en cours</CardTitle>
          <CardDescription>
            Liste des livres empruntés et n'ayant pas encore été retournés
          </CardDescription>
        </div>
        <>
          {emprunts.length < MAX_ALLOWED_LOANS && (
            <AdherentAddEmpruntBtn />
          )}
        </>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Oeuvre</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emprunts.map((emprunt) => (
              <TableRow key={emprunt.id}>
                <TableCell>
                  <div className="font-medium">{emprunt.livre?.titre}</div>
                </TableCell>
                <TableCell className="">
                  {emprunt.dateRetourTheorique}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdherentEmprunt;
