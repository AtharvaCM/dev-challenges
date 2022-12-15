/* eslint-disable no-unused-vars */
import React from "react";

import {
  ButtonPropType,
  ColorsHocusType,
  ColorsType,
} from "../../../types/components/button";

const Button: React.FC<ButtonPropType> = ({
  children,
  variant = "default",
  disableShadow = false,
  disabled = false,
  size = "md",
  color = "default",
}) => {
  console.log("disabled: ", disabled);
  console.log("variant: ", variant);

  // Colors
  const colors: ColorsType = {
    default: "#E0E0E0",
    primary: "#2962FF",
    secondary: "#455A64",
    danger: "#D32F2F",
  };
  const colorsOutline: ColorsType = {
    default: "#AEAEAE",
    primary: "#3D5AFE",
    secondary: "#1C313A",
    danger: "#9A0007",
  };
  const colorsOutlineBg: ColorsType = {
    default: "#E0E0E0",
    primary: "#2962FF1A",
    secondary: "#9fb3bd",
    danger: "#cb9494",
  };
  const colorsHocus: ColorsHocusType = {
    default: "#AEAEAE",
    primary: "#0039CB",
    secondary: "#1C313A",
    danger: "#9A0007",
  };
  // Variants
  const def = `rounded-md bg-[${
    colors[color]
  }] transition disabled:text-[#9E9E9E] ${
    disabled ? "" : `hocus:bg-[${colorsHocus[color]}]`
  }`;
  const outline = `rounded-md border border-[${
    colorsOutline[color]
  }] bg-white text-[${colorsOutline[color]}] transition ${
    disabled ? "" : `hocus:bg-[${colorsOutlineBg[color]}]/10`
  }`;
  const text = `rounded-md bg-white text-[${
    colorsOutline[color]
  }] transition disabled:text-[#9E9E9E] ${
    disabled ? "" : `hocus:bg-[${colorsOutlineBg[color]}]/10`
  }`;
  // Shadow
  const shadow = "shadow-[0_2px_3px_rgba(51,51,51,0.2)]";
  // Sizes
  const sm = "py-1.5 px-3";
  const md = "py-2 px-4";
  const lg = "py-2.5 px-5";

  const btnClass = `${
    variant === "text" ? text : variant === "outline" ? outline : def
  } ${disableShadow || variant !== "default" ? "" : shadow} ${
    size === "sm" ? sm : size === "lg" ? lg : md
  }`;

  return (
    <>
      <button
        className={btnClass}
        disabled={disabled}
        onClick={() => console.log("clicked")}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
