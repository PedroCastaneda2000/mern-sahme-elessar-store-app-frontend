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
  const { control, setValue, watch } = useFormContext();

  const selectedStone = watch("stone");
  return (
    <div>
      <FormField
        control={control}
        name="stone"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
                Stone
              </FormLabel>
              <Select
                value={selectedStone}
                onValueChange={(value) => {
                  setValue("stone", value);
                  field.onChange(value);
                }}
              >
                <SelectTrigger className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 italic">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-main-lighter rounded-sm">
                  {stoneList.map((stoneItem) => (
                    <SelectItem
                      key={stoneItem}
                      value={stoneItem}
                      className="text-14sm xl:text-16sm font-inter italic"
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
