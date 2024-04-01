import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 *
 * @param schema Le schema de l'entité que l'on veut muter. Ce champs est requis
 * @param defaultValues Valeur par défaut du formulaire. Sera plus utilisé dans le cas d'une modification.
 * @returns
 */
const useCreateForm = (schema: any, defaultValues: any = null) => {
  const form = useForm<z.infer<typeof schema>>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues,
    resolver: zodResolver(schema),
    context: undefined,
    criteriaMode: "firstError",
  });

  return form
};

export default useCreateForm;
