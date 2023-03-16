import React from "react";
import { useField } from "formik";
import { InputItem } from "../Form/config";

type Props = {
  label?: string;
} & InputItem;

const Input = ({ label, id, children, ...props }: Props) => {
  const [field, meta] = useField({ ...props, name: id });
  return (
    <div className="input-item">
      {label && <label htmlFor={id}>{label}</label>}
      {/* {children ? children.map(({}) =>)} */}
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="validation-error">{meta.error}</div>
      )}
    </div>
  );
};

export default Input;
