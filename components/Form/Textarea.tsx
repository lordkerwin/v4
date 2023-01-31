import { classNames } from "lib/utils";

import { FormInputProps } from "./Input";

interface TextAreaProps extends FormInputProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: TextAreaProps) => {
  const { label, name, placeholder, value, error, onChange } = props;

  return (
    <div className="flex flex-col gap-2 ">
      <label
        htmlFor={name}
        className="block text-sm font-medium transition text-foreground"
      >
        {label}
      </label>
      <div className="">
        <textarea
          rows={4}
          name={name}
          className={classNames(
            error
              ? "focus:border-red-500 focus:ring-red-500 border-red-500"
              : "focus:border-blue-500 focus:ring-blue-500",
            "block w-full rounded-md transition border-grey-3 shadow-sm text-foreground bg-background"
          )}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <div className="h-6">
        {error && <p className="text-sm text-red-600 text-right">{error}</p>}
      </div>
    </div>
  );
};

export default TextArea;
