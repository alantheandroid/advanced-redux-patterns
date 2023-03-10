import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useField } from "formik";
import { InputItem } from "../Form/config";

type Props = {
  label?: string;
  children?: ReactNode;
} & InputItem;

const Checkbox = ({ label, children, id, ...props }: Props) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({
    ...props,
    name: id,
    type: "checkbox",
  });
  return (
    <>
      {label && <label className="checkbox-input">{label}</label>}
      <input {...field} {...props} />
      {children}
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default Checkbox;
