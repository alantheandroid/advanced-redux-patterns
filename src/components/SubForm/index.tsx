import React from "react";
import { formMap } from "../Form";
import { InputItem } from "../Form/types";

type Props = {
  fields?: InputItem[];
  label?: string;
  onAddField: (id: string, fields: InputItem[]) => void;
} & Omit<InputItem, "type">;

function SubForm({ fields = [], id, label, multiple, onAddField }: Props) {
  const handleClick = () => {
    return onAddField(id, fields);
  };

  return (
    <div className="subform">
      {label && <p className="subform-label">{label}</p>}
      {formMap(fields, id)}
      {multiple && (
        <button
          type="button"
          className="add-input-button"
          onClick={handleClick}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default SubForm;
