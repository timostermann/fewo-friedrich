import type { ComponentProps } from "preact";
import cn from "classnames";

export enum HeadlineTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum HeadlineVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  QUATERNARY = "quaternary",
  QUINARY = "quinary",
  SUBLINE = "subline",
}

export type HeadlineProps = ComponentProps<"h1"> & {
  tag?: HeadlineTag;
  variant?: HeadlineVariant;
};

export const getHeadlineVariantClasses = (variant: HeadlineVariant) => {
  switch (variant) {
    case HeadlineVariant.PRIMARY:
      return "font-extrabold text-4xl sm:text-5xl";
    case HeadlineVariant.SECONDARY:
      return "font-bold text-3xl sm:text-4xl";
    case HeadlineVariant.TERTIARY:
      return "font-bold text-2xl sm:text-3xl";
    case HeadlineVariant.QUATERNARY:
      return "font-bold text-xl sm:text-2xl";
    case HeadlineVariant.QUINARY:
      return "font-medium text-lg sm:text-xl";
    default:
      return "font-bold text-4xl sm:text-5xl";
  }
};

export const Headline = ({
  tag: Tag = HeadlineTag.H2,
  variant = HeadlineVariant.SECONDARY,
  children,
  className,
  ...props
}: HeadlineProps) => {
  return (
    <Tag
      className={cn(
        "cursor-text",
        getHeadlineVariantClasses(variant),
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
