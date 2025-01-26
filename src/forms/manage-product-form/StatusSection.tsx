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
  const { control, setValue, watch } = useFormContext();

  const selectedStatus = watch("status");

  return (
    <div>
      <FormField
        control={control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              <FormLabel className="font-inter text-14sm xl:text-16sm font-normal uppercase">
                Status
              </FormLabel>
              <Select
                value={selectedStatus}
                onValueChange={(value) => {
                  setValue("status", value);
                  field.onChange(value);
                }}
              >
                <SelectTrigger className="text-color-dark border-main-outline text-14sm xl:text-16sm font-inter bg-main-lighter h-11 rounded-sm border-opacity-10 italic">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-main-lighter rounded-sm">
                  {statusList.map((statusItem) => (
                    <SelectItem
                      key={statusItem}
                      value={statusItem}
                      className="text-14sm xl:text-16sm font-inter italic"
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
