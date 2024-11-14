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
import { stoneList } from "@/config/product-options-config";
import { useFormContext } from "react-hook-form";

const StoneSection = () => {
  const { control, setValue, watch } = useFormContext(); // Watch the form data and set value

  const selectedStone = watch("stone"); // Watch the material value

  return (
    <div>
      <FormField
        control={control}
        name="stone"
        render={({ field }) => (
          <FormItem>
            <div>
              <FormLabel className="font-inter text-16sm font-normal uppercase">
                Stone
              </FormLabel>
              <Select
                value={selectedStone} // Bind the selected value
                onValueChange={(value) => {
                  setValue("stone", value); // Update form value on selection change
                  field.onChange(value); // Update react-hook-form value
                }}
              >
                <SelectTrigger className="bg-white rounded-none">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {stoneList.map((stoneItem) => (
                    <SelectItem
                      key={stoneItem}
                      value={stoneItem}
                      className="uppercase text-16sm"
                    >
                      {stoneItem}
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

export default StoneSection;
