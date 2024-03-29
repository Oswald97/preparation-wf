import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/src/components/ui/table";

const AdherentPersonnalDetails = () => {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex justify-center">
          <Avatar className=" size-24 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Nom & Prénoms</div>
              </TableCell>
              <TableCell className="">John Doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Email</div>
              </TableCell>
              <TableCell className="">johndoe@wf.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Téléphone</div>
              </TableCell>
              <TableCell className="">+229 96 30 38 21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Adresse</div>
              </TableCell>
              <TableCell className="">Cadjehoun, Cotonou</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Date d'inscription</div>
              </TableCell>
              <TableCell className="">25 Mars 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdherentPersonnalDetails;
