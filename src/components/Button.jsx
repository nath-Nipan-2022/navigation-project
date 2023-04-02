import { useState } from "react";
import PropTypes from "prop-types";
import className from "classnames";

// reusabile Button Component 😍👌
const Button = ({
  children, // Button Text
  primary, // Primary
  secondary, //secondary
  success, // Success
  warning, // Warning
  danger, // danger
  outline, // Outline
  rounded, // Rounded
  ...rest // Rest Properties
}) => {
  // classnames library helps in heandling the classes for different buttons
  const classes = className(
    rest.className,
    `flex items-center gap-1 py-1 px-4 shadow border-2 transition`, // default classes
    {
      "border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600":
        primary,
      "border-slate-900 bg-slate-900 hover:bg-slate-700 hover:border-slate-700":
        secondary,
      "border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600":
        success,
      "border-red-500 bg-red-500 hover:bg-red-700 hover:border-red-700": danger,
      "border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700":
        warning,

      // when no outline, text color will be white,
      "text-white":
        !outline && (primary || secondary || success || danger || warning),

      "text-blue-600": outline && primary,
      "text-slate-700": outline && secondary,
      "text-green-600": outline && success,
      "text-orange-600": outline && warning,
      "text-red-500": outline && danger,

      "rounded-full": rounded,
      // only white background bcz border is already applied for all buttons to have equal height
      "bg-white hover:text-white": outline,
    }
  );

  return (
    // pass all the props
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning, danger }) => {
    //note: Number(!!undefined) = 0
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    count > 1 && console.warn("one props can only be specified");
  },
};

export default Button;
