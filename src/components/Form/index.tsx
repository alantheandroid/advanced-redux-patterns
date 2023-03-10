import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form as FormikForm, FormikHelpers } from "formik";
import { formConfig, InputItem, optionsMap } from "./config";
import Input from "../Input";
import Select from "../Select";
import Checkbox from "../Checkbox";
import basicSchema from "../../schemas";

export type InputType = "text" | "email" | "number";

export type FormValues = {
  [key: string]: string | number | null;
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
};

export const Form = ({ className, formConfig = [] }: Props) => {
  const initialValues = formConfig?.reduce((acc, { type, id }) => {
    switch (type) {
      case "text":
      case "email":
      case "select":
        acc[id] = "";
        break;
      case "number":
        acc[id] = 0;
        break;
      default:
        acc[id] = null;
        break;
    }

    return acc;
  }, {} as FormValues);
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <FormikForm>
          {formConfig?.map(({ type, id, placeholder }) => {
            const Component = elementsMap[type];
            return (
              <Component
                key={id}
                id={id}
                placeholder={placeholder}
                type={type}
                {...(type === "select" && { options: optionsMap["countries"] })}
              />
            );
          })}

          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </div>
  );
};
