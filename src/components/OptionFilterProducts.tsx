import {
  materialList,
  statusList,
  stoneList,
  categoryList,
} from "@/config/product-options-config";
import OptionFilterSelect from "./OptionFilterSelect";
import { Button } from "./ui/button";

type State = {
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
  selectedCategory: string;
};

type Props = {
  state: State;
  onFilterChange: (key: keyof State, value: string) => void;
  onReset: () => void;
};

const OptionFilterProducts = ({ state, onFilterChange, onReset }: Props) => {
  const filterConfigs = [
    {
      selectedOption: state.selectedMaterial,
      onChange: (value: string) => onFilterChange("selectedMaterial", value),
      optionList: materialList,
      placeHolder: "Material",
    },
    {
      selectedOption: state.selectedStone,
      onChange: (value: string) => onFilterChange("selectedStone", value),
      optionList: stoneList,
      placeHolder: "Stone",
    },
    {
      selectedOption: state.selectedStatus,
      onChange: (value: string) => onFilterChange("selectedStatus", value),
      optionList: statusList,
      placeHolder: "Status",
    },
    {
      selectedOption: state.selectedCategory,
      onChange: (value: string) => onFilterChange("selectedCategory", value),
      optionList: categoryList,
      placeHolder: "Category",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 ">
      <span className="flex flex-col md:flex-row items-center gap-6 w-full">
        {filterConfigs.map((filter, index) => (
          <OptionFilterSelect
            key={index}
            selectedOption={filter.selectedOption}
            onChange={filter.onChange}
            optionList={filter.optionList}
            placeHolder={filter.placeHolder}
          />
        ))}
      </span>
      <Button
        onClick={onReset}
        className="border-[1.5px] box-border border-gray-800 bg-white text-gray-800 hover:bg-gray-800 hover:text-white md:w-[112px] h-11 rounded-none text-16sm font-normal font-inter uppercase w-full"
      >
        Reset
      </Button>
    </div>
  );
};

export default OptionFilterProducts;
