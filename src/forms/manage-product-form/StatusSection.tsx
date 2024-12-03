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
import { statusList } from "@/config/product-options-config";
import { useFormContext } from "react-hook-form";

const StatusSection = () => {
  const { control, setValue, watch } = useFormContext(); // Watch the form data and set value

  const selectedStatus = watch("status"); // Watch the material value

  return (
    <div>
      <FormField
        control={control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-16sm font-normal uppercase">
                Status
              </FormLabel>
              <Select
                value={selectedStatus} // Bind the selected value
                onValueChange={(value) => {
                  setValue("status", value); // Update form value on selection change
                  field.onChange(value); // Update react-hook-form value
                }}
              >
                <SelectTrigger className="bg-white rounded-none">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {statusList.map((statusItem) => (
                    <SelectItem
                      key={statusItem}
                      value={statusItem}
                      className="uppercase text-16sm"
                    >
                      {statusItem}
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

export default StatusSection;
