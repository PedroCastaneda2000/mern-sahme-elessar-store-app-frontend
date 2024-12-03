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
              <FormLabel className="font-inter text-16sm font-normal uppercase">
                Stone
              </FormLabel>
              <Select
                value={selectedStone}
                onValueChange={(value) => {
                  setValue("stone", value);
                  field.onChange(value);
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
