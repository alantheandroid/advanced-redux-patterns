import { useField } from "formik";
import React, { memo } from "react";
import { InputItem } from "../Form/config";

type Props = {
  label?: string;
} & InputItem;

const Input = ({ label, id, ...props }: Props) => {
  const [field, meta] = useField({ ...props, name: id });
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default Input;
