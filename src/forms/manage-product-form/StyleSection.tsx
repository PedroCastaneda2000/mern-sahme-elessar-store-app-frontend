import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { styleList } from "@/config/product-options-config";
import { useFormContext } from "react-hook-form";
import StyleCheckbox from "./StyleCheckbox";

const StyleSection = () => {
  const { control } = useFormContext();

  return (
    <div className="">
      <div className="">
        <h2 className="text-16sm font-inter font-normal uppercase">Styles</h2>
      </div>
      <FormField
        control={control}
        name="style"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-wrap justify-between gap-y-4">
              {styleList.map((styleItem) => (
                <StyleCheckbox style={styleItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default StyleSection;
