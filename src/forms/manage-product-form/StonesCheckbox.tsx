// import { Checkbox } from "@/components/ui/checkbox";
// import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
// import { ControllerRenderProps, FieldValues } from "react-hook-form";

// type Props = {
//   stones: string;
//   field: ControllerRenderProps<FieldValues, "stones">;
// };

// const StonesCheckbox = ({ stones, field }: Props) => {
//   return (
//     <FormItem className="flex flex-row gap-2 items-center space-x-1 space-y-0 mt-2">
//       <FormControl>
//         <Checkbox
//           className="bg-white rounded-none"
//           checked={field.value.includes(stones)}
//           onCheckedChange={(checked) => {
//             if (checked) {
//               field.onChange([...field.value, stones]);
//             } else {
//               field.onChange(
//                 field.value.filter((value: string) => value !== stones)
//               );
//             }
//           }}
//         />
//       </FormControl>
//       <FormLabel className="text-14sm font-inter font-light uppercase">
//         {stones}
//       </FormLabel>
//     </FormItem>
//   );
// };

// export default StonesCheckbox;
