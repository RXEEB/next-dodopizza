import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({ text, value, endAdornment, onCheckedChange, checked, name }) => {
  const checkboxId = `checkbox-${String(name)}-${String(value)}`;

  return (
    <div className="flex items-center space-x-2">
      <Checkbox onCheckedChange={onCheckedChange} checked={checked} name={name} value={value} className="rounded-[8px] w-6 h-6" id={checkboxId} />
      <label htmlFor={checkboxId} className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
