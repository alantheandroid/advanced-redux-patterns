import React from "react";
import { useField } from "formik";
import { InputItem } from "../Form/config";

export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  options?: SelectOption[];
} & InputItem;

function Select({ label, options, type, id, ...props }: Props) {
  const [field, meta] = useField({ ...props, name: id });

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select {...field} {...props}>
        {options?.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default Select;
