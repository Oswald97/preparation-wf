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

export function AdherentForm() {
  const form = useCreateForm(adherentSchema, {
    nom: "",
    pseudo: "",
    prenoms: "",
    adresse: {
      rue: "Rue",
      ville: "",
      codePostal: "",
      numeroTelephone: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("submitted", data);

    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

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
            Créer
          </Button>
        </form>
      </Form>
    </>
  );
}
