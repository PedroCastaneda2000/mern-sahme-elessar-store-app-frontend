import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  style: string;
  field: ControllerRenderProps<FieldValues, "style">;
};

const StyleCheckbox = ({ style, field }: Props) => {
  return (
    <FormItem className="flex flex-row gap-2 items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white rounded-none"
          checked={field.value.includes(style)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, style]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== style)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-14sm font-inter font-light uppercase">
        {style}
      </FormLabel>
    </FormItem>
  );
};

export default StyleCheckbox;
