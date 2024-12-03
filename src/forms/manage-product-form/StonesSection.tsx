// import { FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { stonesList } from "@/config/product-options-config";
// import { useFormContext } from "react-hook-form";
// import StonesCheckbox from "./StonesCheckbox";

// const StonesSection = () => {
//   const { control } = useFormContext();

//   return (
//     <div className="">
//       <div className="">
//         <h2 className="text-16sm font-inter font-normal uppercase">Stones</h2>
//       </div>
//       <FormField
//         control={control}
//         name="stones"
//         render={({ field }) => (
//           <FormItem>
//             <div className="flex flex-wrap justify-start gap-4">
//               {stonesList.map((stonesItem) => (
//                 <StonesCheckbox stones={stonesItem} field={field} />
//               ))}
//             </div>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   );
// };

// export default StonesSection;
