import React from "react";

import CoreInput from "./CoreInput";
import { RULES } from "./RULES";

const HighOrderInput = ({ name, value = "", ...others }) => {
  const isValid = RULES[name].pattern(value);
  return (
    <div className="relative">
      <CoreInput name={name} value={value} {...others} />
      {!isValid && <p>{RULES[name].message}</p>}
    </div>
  );
};

export default HighOrderInput;
