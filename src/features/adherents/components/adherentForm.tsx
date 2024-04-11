import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { useCreateForm } from "@/src/hooks";
import { toast } from "sonner";
import { adherentSchema } from "../schema";
import { PhoneInput } from "@/src/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { addNewAdherent, toogleSheet } from "@/src/store/slices/adherent.slice";
import { useCreateAdherentMutation } from "../services";
export function AdherentForm() {
  const form = useCreateForm(adherentSchema, {
    nom: "",
    pseudo: "",
    prenoms: "",
    adresse: {
      rue: "",
      ville: "",
      codePostal: "",
      numeroTelephone: "",
    },
    genre: "MASCULIN",
    dateInscription: new Date(),
  });

  const dispatch = useDispatch();

  // const {
  //   isLoading: isCreating,
  //   handleMutation: createAdherent
  // } = useMutation();

  const [createAdherent, { isLoading }] = useCreateAdherentMutation();


  const onSubmit = (data: any) => {

    createAdherent(data);
    dispatch(toogleSheet());
    toast("Succès", {
      description: `Vous avez créer avec succès l'adhérent ${data.nom} ${data.prenoms}`
    });
  };

  const onSuccess = (adherentCreated: Adherent) => {
    // setAdherent((oldData: Adherent[]) => {
    //   return [...oldData, adherentCreated];
    // });

    // dispatch({ type: "addAdherent", payload: { ...data, id: "new-adherent" } });

    dispatch(addNewAdherent(adherentCreated))
    dispatch(toogleSheet())
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prenoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Prénoms</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pseudo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Pseudo</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-3"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="MASCULIN" />
                      </FormControl>
                      <FormLabel className="font-normal">Masculin</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="FEMININ" />
                      </FormControl>
                      <FormLabel className="font-normal">Féminin</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="INCONNU" />
                      </FormControl>
                      <FormLabel className="font-normal">Inconnu</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.ville"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">
                  Ville de résidence
                </FormLabel>
                <FormControl>
                  <Input placeholder="Cotonou ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.rue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Rue</FormLabel>
                <FormControl>
                  <Input placeholder="Champs d'oiseaux ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.codePostal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Code postal</FormLabel>
                <FormControl>
                  <Input placeholder="05BP 229 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.numeroTelephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">
                  Numéro de téléphone
                </FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry="BJ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-4 w-full"
            type="submit"
            disabled={!form.formState?.isValid}
          >
            {isLoading && <Loader />}
            Créer
          </Button>
        </form>
      </Form>
    </>
  );
}
