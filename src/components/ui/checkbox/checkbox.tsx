import { Check } from "@/assets";
import * as CheckboxRadix from "@radix-ui/react-checkbox";
import * as LabelRadix from "@radix-ui/react-label";
import clsx from "clsx";

import s from "./checkbox.module.scss";

export const Checkbox = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  required,
}: Props) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: s.container,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  };

  return (
    <div className={s.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator>
                <Check />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  );
};

export type Props = {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  onChange: (checked: boolean) => void;
  required?: boolean;
};
