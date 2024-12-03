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
import { categoryList } from "@/config/product-options-config";
import { useFormContext } from "react-hook-form";

const CategorySection = () => {
  const { control, setValue, watch } = useFormContext(); // Watch the form data and set value

  const selectedCategory = watch("category"); // Watch the material value

  return (
    <div>
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-16sm font-normal uppercase">
                category
              </FormLabel>
              <Select
                value={selectedCategory} // Bind the selected value
                onValueChange={(value) => {
                  setValue("category", value); // Update form value on selection change
                  field.onChange(value); // Update react-hook-form value
                }}
              >
                <SelectTrigger className="bg-white rounded-none">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {categoryList.map((categoryItem) => (
                    <SelectItem
                      key={categoryItem}
                      value={categoryItem}
                      className="uppercase text-16sm"
                    >
                      {categoryItem}
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

export default CategorySection;
