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
  const { control, setValue, watch } = useFormContext();

  const selectedCategory = watch("category");

  return (
    <div>
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
                category
              </FormLabel>
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  setValue("category", value);
                  field.onChange(value);
                }}
              >
                <SelectTrigger className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 capitalize italic">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-main-lighter rounded-sm">
                  {categoryList.map((categoryItem) => (
                    <SelectItem
                      key={categoryItem}
                      value={categoryItem}
                      className="text-14sm xl:text-16sm font-inter capitalize italic"
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
