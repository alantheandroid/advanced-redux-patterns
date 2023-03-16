import React from "react";
import { inputMap } from "../Form";
import { InputItem } from "../Form/types";

type Props = {
  inputs?: InputItem[];
  label?: string;
};

function SubForm({ inputs = [], label }: Props) {
  return (
    <div className="subform">
      {label && <p className="subform-label">{label}</p>}
      {inputMap(inputs)}
    </div>
  );
}

export default SubForm;
