import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-inter text-14sm xl:text-16sm font-normal uppercase">
        Image
      </h1>
      <FormField
        control={control}
        name="imageFile"
        render={({ field }) => (
          <FormItem className="font-inter text-14sm xl:text-16sm font-normal">
            <FormControl>
              <Input
                className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 italic xl:max-w-[408px]"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(event) =>
                  field.onChange(
                    event.target.files ? event.target.files[0] : null,
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
};

export default ImageSection;
