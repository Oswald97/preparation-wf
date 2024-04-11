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
import { PasswordInput } from "@/src/components/ui/input-password";
import { useCreateForm } from "@/src/hooks";
import { LS_TOKEN_KEY } from "@/src/utils/_constants";
import { BookOpenText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { loginSchema } from "../schema";
import { useLoginMutation } from "../services";

export function Login() {
  const form = useCreateForm(loginSchema, {
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const [logUser, { isLoading }] = useLoginMutation();

  const onSubmit = (credentials: z.infer<typeof loginSchema>) => {
    logUser(credentials).then((response: any) => {
      if (response.error) {
        // Traiter l'erreur

        return;
      }

      localStorage.setItem(LS_TOKEN_KEY, JSON.stringify(response?.data));
      navigate("/adherents")
    });
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center mb-8">
            <div className="flex gap-3 items-center justify-center">
              <BookOpenText className="size-8" />
              <span className="text-3xl font-bold">Biblio WF</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">
                      Adresse mail
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="john@wf.bj" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">
                      Mot de passe
                    </FormLabel>
                    <FormControl className="mb-3">
                      <PasswordInput
                        {...field}
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={!form.formState?.isValid}
              >
                Se connecter
              </Button>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="#" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://cdn.pixabay.com/photo/2018/10/09/01/19/books-3733892_1280.jpg"
          alt="Image"
          className="h-full w-full max-h-screen object-cover"
        />
      </div>
    </div>
  );
}
