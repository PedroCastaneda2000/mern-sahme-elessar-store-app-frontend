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
    <div className="flex gap-6">
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem className="flex flex-col flex-1">
            <FormLabel className="font-inter text-16sm font-normal uppercase">
              Name
            </FormLabel>
            <FormControl>
              <Input {...field} className="bg-white rounded-none" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem className="flex flex-col flex-1">
            <FormLabel className="font-inter text-16sm font-normal uppercase">
              Price (usd)
            </FormLabel>
            <FormControl>
              <Input {...field} className="bg-white rounded-none" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
