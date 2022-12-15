/* eslint-disable no-unused-vars */
import React from "react";

import { ButtonPropType } from "../../../types/components/button";

const Button: React.FC<ButtonPropType> = ({
  children,
  variant = "default",
  disableShadow = false,
  disabled = false,
  size = "md",
}) => {
  console.log("disabled: ", disabled);
  console.log("variant: ", variant);

  // Variants
  const def = `bg-[#E0E0E0] rounded-md py-2 px-4 transition disabled:text-[#9E9E9E] ${
    disabled ? "" : "hocus:bg-[#AEAEAE]"
  }`;
  const outline = `rounded-md border border-[#3D5AFE] bg-white py-2 px-4 text-[#3D5AFE] transition ${
    disabled ? "" : "hocus:bg-[#2962FF1A]/10"
  }`;
  const text = `rounded-md bg-white py-2 px-4 text-[#3D5AFE] transition disabled:text-[#9E9E9E] ${
    disabled ? "" : "hocus:bg-[#2962FF1A]/10"
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
      <button
        disabled
        className="rounded-md bg-[#E0E0E0] py-2 px-4 shadow-[0_2px_3px_rgba(51,51,51,0.2)] transition disabled:text-[#9E9E9E] hocus:bg-[#AEAEAE]"
      >
        {children}
      </button>
      <button className="rounded-md border border-[#3D5AFE] bg-white py-2 px-4 text-[#3D5AFE] transition hocus:bg-[#2962FF1A]/10">
        {children}
      </button>
      <button className="rounded-md bg-white py-2 px-4 text-[#3D5AFE] transition disabled:text-[#9E9E9E] hocus:bg-[#2962FF1A]/10">
        {children}
      </button>
    </>
  );
};

export default Button;
