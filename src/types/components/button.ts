import React from "react";

export type ButtonPropType = {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
};

export type ColorsType = {
  default: string;
  primary: string;
  secondary: string;
  danger: string;
};

export type ColorsHocusType = {
  default: string;
  primary: string;
  secondary: string;
  danger: string;
};
