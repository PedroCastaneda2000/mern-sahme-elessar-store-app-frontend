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
      onChange("");
    } else {
      onChange(option);
    }
  };

  return (
    <Select onValueChange={handleOptionChange} value={selectedOption || ""}>
      <SelectTrigger className="font-inter text-14sm xl:text-16sm bg-main-lighter text-color-dark border-main-outline gap-4 rounded-sm border-opacity-10 capitalize italic shadow-sm">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent className="bg-main-lighter rounded-sm">
        <SelectItem
          value="reset"
          className="font-inter text-14sm xl:text-16sm mt-2 italic"
        >
          Reset
        </SelectItem>
        <hr className="my-2" />
        {optionList.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="font-inter text-14sm xl:text-16sm text-color-dark capitalize italic"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default OptionFilterSelect;
