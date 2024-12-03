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
  const { control, setValue, watch } = useFormContext(); // Watch the form data and set value

  const selectedMaterial = watch("material"); // Watch the material value

  return (
    <div>
      <FormField
        control={control}
        name="material"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-16sm font-normal uppercase">
                Material
              </FormLabel>
              <Select
                value={selectedMaterial} // Bind the selected value
                onValueChange={(value) => {
                  setValue("material", value); // Update form value on selection change
                  field.onChange(value); // Update react-hook-form value
                }}
              >
                <SelectTrigger className="bg-white rounded-none">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {materialList.map((materialItem) => (
                    <SelectItem
                      key={materialItem}
                      value={materialItem}
                      className="uppercase text-16sm"
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
