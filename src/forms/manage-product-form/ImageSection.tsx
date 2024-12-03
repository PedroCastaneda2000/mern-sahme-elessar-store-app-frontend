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
      <div>
        <h2 className="text-16sm font-inter font-normal uppercase">Image</h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )} */}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem className="font-inter text-16sm font-normal uppercase">
              <FormControl>
                <Input
                  className="bg-white rounded-none text-14sm uppercase"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </div>
    </div>
  );
};

export default ImageSection;
