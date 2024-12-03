import {
  materialList,
  statusList,
  stoneList,
} from "@/config/product-options-config";
import OptionFilterSelect from "./OptionFilterSelect";

type State = {
  selectedMaterial: string;
  selectedStone: string;
  selectedStatus: string;
};

type Props = {
  state: State;
  onFilterChange: (key: keyof State, value: string) => void;
  onReset: () => void;
};

const OptionFilterSearch = ({ state, onFilterChange, onReset }: Props) => {
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
  ];

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-6">
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
      <button
        onClick={onReset}
        className="text-16sm font-normal font-inter hover:underline hover:underline-offset-4 uppercase text-red-600"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default OptionFilterSearch;
