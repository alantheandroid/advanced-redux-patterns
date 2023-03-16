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
    <div className="input-item">
      <div>
        <input {...field} {...props} />
        {label && <label className="input-label">{label}</label>}
        {children}
      </div>
      {meta.touched && meta.error && (
        <div className="validation-error">{meta.error}</div>
      )}
    </div>
  );
};

export default Checkbox;
