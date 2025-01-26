import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";
import Search from "../assets/search-icon.svg";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Search query is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBarNav = ({
  onSubmit,
  onReset,
  placeHolder,
  searchQuery,
}: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`border-main-lighter flex w-full flex-row items-center justify-between gap-3 rounded-none border-b-[1px] border-t-[1px] p-0 shadow-none ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1 items-center justify-center py-3">
              <FormControl>
                <Input
                  {...field}
                  maxLength={20}
                  className="text-12sm xl:text-14sm font-none font-inter text-color-light placeholder:text-color-light/40 h-auto rounded-none border-none p-0 italic shadow-none focus-visible:ring-0"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="text-12sm xl:text-14sm font-inter hover:text-color-light rounded-none border-none bg-transparent p-0 font-light italic shadow-none hover:bg-transparent"
        >
          Reset
        </Button>

        <Button
          type="submit"
          variant="outline"
          className="h-auto w-auto rounded-none border-none bg-transparent p-0 shadow-none hover:bg-transparent"
        >
          <img className="size-4 fill-current xl:size-5" src={Search} />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBarNav;
