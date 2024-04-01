import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import { Link } from "react-router-dom";

const adherentCard = () => {
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
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default adherentCard;
