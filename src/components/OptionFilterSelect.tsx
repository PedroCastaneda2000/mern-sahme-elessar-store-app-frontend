import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onChange: (option: string) => void;
  selectedOption: string;
  optionList: string[];
  placeHolder: string;
};

const OptionFilterSelect = ({
  onChange,
  selectedOption,
  optionList,
  placeHolder,
}: Props) => {
  const handleOptionChange = (option: string) => {
    if (option === "reset") {
      onChange(""); // Reset the filter
    } else {
      onChange(option);
    }
  };

  return (
    <Select onValueChange={handleOptionChange} value={selectedOption || ""}>
      <SelectTrigger className="rounded-none font-inter uppercase text-16sm justify-between w-full ">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent className="rounded-none">
        {/* Reset Filters Option */}
        <SelectItem
          value="reset"
          className="text-red-500 font-inter uppercase text-16sm mt-2"
        >
          Reset
        </SelectItem>
        <hr className="my-2" />
        {/* Options */}
        {optionList.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="font-inter uppercase text-16sm"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default OptionFilterSelect;
