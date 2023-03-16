import React from "react";
import { useField } from "formik";
import { InputItem, SelectOption } from "../Form/types";

type Props = {
  label?: string;
  options?: SelectOption[];
} & InputItem;

function Select({ label, options = [], type, id, children, ...props }: Props) {
  const [field, meta] = useField({ ...props, name: id });

  return (
    <div className="input-item">
      {label && <label htmlFor={id}>{label}</label>}
      <select {...field} {...props}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className="validation-error">{meta.error}</div>
      )}
    </div>
  );
}

export default Select;
