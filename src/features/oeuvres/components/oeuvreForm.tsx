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
import { oeuvreSchema } from "../schema";
import { toast } from "sonner";

export function OeuvreForm() {
  const form = useCreateForm(oeuvreSchema, {
    isbn: "",
    titre: "",
    auteur: ""
    
  });

  const onSubmit = (data: any) => {
    console.log("submitted", data);

    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data)}</code>
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
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Titre</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="auteur"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Auteur</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
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
