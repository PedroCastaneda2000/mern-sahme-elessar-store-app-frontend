import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useAuth0 } from "@auth0/auth0-react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  addressLine1: z.string().min(1, "addressLine1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonPlaceholder?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = `User Profile`,
  buttonPlaceholder = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),

    defaultValues: currentUser,
  });

  const { user } = useAuth0();
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="bg-main-lighter border-main-outline flex flex-col gap-4 rounded-sm border-[1px] border-opacity-10 px-4 py-12 md:px-12 md:py-12"
      >
        <div className="text-color-dark flex flex-col items-center gap-2 text-center md:items-start md:text-start">
          <h1 className="text-28md xl:text-40lg font-serif">
            {user?.email?.trim().toLowerCase() ===
            ADMIN_EMAIL.trim().toLowerCase()
              ? "Admin Profile"
              : `${title}`}
          </h1>
          <FormDescription className="font-inter text-14sm xl:text-16sm font-light">
            Review and update your profile information.
          </FormDescription>
        </div>

        <Separator />

        <div className="text-color-dark flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-14sm xl:text-16sm font-inter font-normal uppercase">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled
                    className="text-14sm xl:text-16sm font-inter rounded-none bg-white font-normal italic"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-14sm xl:text-16sm font-inter text-color-dark font-normal uppercase">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-14sm xl:text-16sm font-inter rounded-none bg-white font-normal italic"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-14sm xl:text-16sm font-inter font-normal uppercase">
                  Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-14sm xl:text-16sm font-inter rounded-none bg-white font-normal italic"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-14sm xl:text-16sm font-inter font-normal uppercase">
                  City
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-14sm xl:text-16sm font-inter rounded-none bg-white font-normal italic"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-14sm xl:text-16sm font-inter font-normal uppercase">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="text-14sm xl:text-16sm font-inter rounded-none bg-white font-normal italic"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4 flex w-full justify-center md:justify-start">
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button
              type="submit"
              className="text-14sm xl:text-16sm bg-button-primary hover:bg-button-primary-hover h-11 w-full rounded-sm text-center font-serif font-medium md:max-w-[240px]"
            >
              {buttonPlaceholder}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default UserProfileForm;
