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
  title = "User Profile",
  buttonPlaceholder = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),

    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="bg-gray-50 flex flex-col px-4 py-12 md:px-12 md:py-12 gap-4"
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-28md md:text-40lg font-medium font-serif uppercase">
            {title}
          </h2>
          <FormDescription className="text-[#333333] text-12sm font-light font-inter uppercase">
            View and change your profile information here.
          </FormDescription>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-16sm font-normal font-inter uppercase">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled
                    className="bg-white rounded-none text-16sm font-light font-inter"
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
                <FormLabel className="text-16sm font-normal font-inter uppercase">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white rounded-none text-16sm font-light font-inter"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-16sm font-normal font-inter uppercase">
                  Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white rounded-none text-16sm font-light font-inter"
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
                <FormLabel className="text-16sm font-normal font-inter uppercase">
                  City
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white rounded-none text-16sm font-light font-inter"
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
                <FormLabel className="text-16sm font-normal font-inter uppercase">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white rounded-none text-16sm font-light font-inter"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-center md:justify-start mt-4">
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button
              type="submit"
              className="bg-black min-w-[224px] h-11 rounded-none text-16sm font-medium font-serif"
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
