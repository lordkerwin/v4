import { classNames } from "lib/utils";
import { AlertCircle } from "lucide-react";

export type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
};

interface TextInputProps extends FormInputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: TextInputProps) => {
  const { label, name, type, placeholder, value, error, onChange } = props;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          className={classNames(
            error
              ? "focus:border-red-500 focus:ring-red-500 border-red-500"
              : "focus:border-blue-500 focus:ring-blue-500",
            "block w-full rounded-md transition border-grey-3 shadow-sm text-foreground bg-background"
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <AlertCircle size={20} className="text-red-500" />
          </div>
        )}
      </div>
      <div className="h-6">
        {error && <p className="text-sm text-right text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
