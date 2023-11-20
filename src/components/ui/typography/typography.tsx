import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import clsx from "clsx";

import s from "./typography.module.scss";

export const Typography = <T extends ElementType = "p">(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
) => {
  const { as: Component = "p", className, variant = "body1", ...rest } = props;

  const classNames = clsx(s.common, s[variant], className);

  return <Component className={classNames} {...rest} />;
};

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "link1"
    | "link2"
    | "overline"
    | "subtitle1"
    | "subtitle2";
} & ComponentPropsWithoutRef<T>;
