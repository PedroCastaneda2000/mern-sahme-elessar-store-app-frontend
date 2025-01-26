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
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <span className="grid w-full grid-cols-2 items-center gap-4 md:flex md:flex-row">
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
        className="border-gray-150 text-14sm xl:text-16sm font-inter text-color-dark bg-main-lighter border-main-outline hover:border-main-outline hover:bg-main-lighter box-border h-8 w-full rounded-sm border-[1px] border-opacity-10 font-normal italic shadow-sm hover:font-normal md:w-24"
      >
        Reset
      </button>
    </div>
  );
};

export default OptionFilterSearch;
