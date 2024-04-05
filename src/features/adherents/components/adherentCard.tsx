import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import { Link } from "react-router-dom";

const adherentCard = ({adherent} : {adherent: Adherent}) => {
  return (
    <Link to={'1'} >
      <Card className="shadow-sm max-w-lg cursor-pointer hover:scale-105">
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="hidden size-12 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{`${adherent.nom} ${adherent.prenoms}`}</p>
              <p className="text-sm text-muted-foreground">
                {adherent.pseudo}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default adherentCard;
