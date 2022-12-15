import React from "react";

export type ButtonPropType = {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};
