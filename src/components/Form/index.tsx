import * as React from "react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { generateInitialValues, InputItem } from "./config";
import Input from "../Input";
import Select, { SelectOption } from "../Select";
import Checkbox from "../Checkbox";
import basicSchema from "../../schemas";

export type InputType = "text" | "email" | "number";

export type FormValues = {
  [key: string]: string | SelectOption[] | number | boolean | null;
};

export const elementsMap = {
  select: Select,
  text: Input,
  email: Input,
  number: Input,
  checkbox: Checkbox,
};

type Props = {
  className?: string;
  formConfig?: InputItem[];
  onSubmit: (values: FormValues) => void;
};

export const Form = ({ className, formConfig = [], onSubmit }: Props) => {
  const initialValues = generateInitialValues(formConfig);

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    onSubmit(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={handleSubmit}
      >
        <FormikForm>
          {formConfig?.map(({ type, id, placeholder, options }) => {
            const Component = elementsMap[type];
            return (
              <Component
                key={id}
                id={id}
                placeholder={placeholder}
                type={type}
                {...(type === "select" && { options })}
              />
            );
          })}

          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </div>
  );
};
