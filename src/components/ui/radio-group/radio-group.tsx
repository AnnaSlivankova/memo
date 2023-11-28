import { ComponentPropsWithoutRef } from "react";

import { Typography } from "@/components/ui/typography";
import * as RadioGroupRadix from "@radix-ui/react-radio-group";
import clsx from "clsx";

import s from "./radio-group.module.scss";

export const RadioGroup = ({
  disabled,
  onValueChange,
  options,
}: RadioGroupProps) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.container),
    indicator: clsx(s.indicator),
    item: clsx(s.item),
    label: clsx(s.label),
    root: clsx(s.root),
  };

  const onChangeHandler = (value: number | string) => {
    onValueChange?.(value);
  };

  return (
    <RadioGroupRadix.Root
      className={classNames.root}
      disabled={disabled}
      onValueChange={onChangeHandler}
    >
      {options.map((option) => (
        <div className={classNames.container} key={option.value}>
          <div className={classNames.buttonWrapper}>
            <RadioGroupRadix.Item
              className={classNames.item}
              id={option.value as string}
              value={option.value as string}
            >
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
          </div>
          <Typography
            as={"label"}
            className={classNames.label}
            htmlFor={option.value as string}
            id={option.value as string}
            variant={"body2"}
          >
            {option.label}
          </Typography>
        </div>
      ))}
    </RadioGroupRadix.Root>
  );
};

type RadioGroupProps = {
  disabled?: boolean;
  onValueChange?: (value: number | string) => void;
  options: Option[];
  value?: any;
} & ComponentPropsWithoutRef<"div">;

type Option = {
  label: string;
  value: number | string;
};
