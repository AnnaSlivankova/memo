import { ComponentPropsWithoutRef, useState } from "react";

import * as SliderRadix from "@radix-ui/react-slider";

import s from "./slider.module.scss";

export const Slider = ({ max, min, onChangeValues }: SliderProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const onChangeHandler = (values: number[]) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
    onChangeValues(values[0], values[1]);
  };

  return (
    <div className={s.container}>
      <span className={s.counter}>{minValue}</span>
      <SliderRadix.Root
        className={s.SliderRoot}
        // defaultValue={[min, max]}
        max={maxValue}
        min={minValue}
        // onValueCommit={onChangeHandler}
        onValueChange={onChangeHandler}
        step={1}
        value={[min ?? minValue ?? 0, max ?? maxValue ?? 0]}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>

        <SliderRadix.Thumb aria-label={"Volume"} className={s.SliderThumb} />
        <SliderRadix.Thumb aria-label={"Volume"} className={s.SliderThumb} />
      </SliderRadix.Root>
      <span className={s.counter}>{maxValue}</span>
    </div>
  );
};

type SliderProps = {
  max: number;
  min: number;
  onChangeValues: (min: number, max: number) => void;
} & ComponentPropsWithoutRef<"span">;
