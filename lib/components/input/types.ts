import React from "react";
import { TypesInput, border, inputSize } from "./theme";
import * as iconSet from "react-icons/fa";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  type?: keyof typeof TypesInput;
  border?: keyof typeof border;
  inputSize?: keyof typeof inputSize;

  iconOutsideLeft?: keyof typeof iconSet;
  iconOutsideLeftColor?: string;

  iconOutsideRight?: keyof typeof iconSet;
  iconOutsideRightColor?: string;
  Color;
  iconInsideLeft?: keyof typeof iconSet;
  iconInsideLeftColor?: string;

  iconInsideRight?: keyof typeof iconSet;
  iconInsideRightColor?: string;

  outlineColor?: string;
  label?: string;
  supportText?: string;
  textPlaceholder?: string;
  fullWidth?: boolean;
  borderLineBottom?: boolean;
  styles?: {};
}

export interface ContainerStyleProps {
  props: {
    styles?: {};
  };
}

export interface InputStyleProps {
  props: {
    borderRadius?: string;
    padding?: string;
    outlineColor?: string;
    iconInsideLeft?: keyof typeof iconSet;
    iconInsideRight?: keyof typeof iconSet;
    fullWidth?: boolean;
    borderLineBottom?: boolean;
  };
}
