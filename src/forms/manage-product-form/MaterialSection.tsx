import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { materialList } from "@/config/product-options-config";
import { useFormContext } from "react-hook-form";

const MaterialSection = () => {
  const { control, setValue, watch } = useFormContext();

  const selectedMaterial = watch("material");
  return (
    <div>
      <FormField
        control={control}
        name="material"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
                Material
              </FormLabel>
              <Select
                value={selectedMaterial}
                onValueChange={(value) => {
                  setValue("material", value);
                  field.onChange(value);
                }}
              >
                <SelectTrigger className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 italic">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="rounded-sm bg-white italic">
                  {materialList.map((materialItem) => (
                    <SelectItem
                      key={materialItem}
                      value={materialItem}
                      className="text-14sm xl:text-16sm font-inter italic"
                    >
                      {materialItem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default MaterialSection;
