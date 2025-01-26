import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem className="flex flex-1 flex-col">
            <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
              name
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 italic"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem className="flex flex-1 flex-col">
            <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
              price <span className="text-12sm xl:text-14sm">(USD)</span>
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="text-14sm xl:text-16sm font-inter h-11 rounded-sm bg-white italic"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
