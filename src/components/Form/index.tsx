import React, { useCallback, useMemo, useState } from "react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { InputItem } from "./config";
import basicSchema from "../../schemas";
import { elementsMap, FormValues, generateInitialValues } from "./utils";
import SubForm from "../SubForm";

type Props = {
  title: string;
  className?: string;
  initialFormConfig?: InputItem[];
  onSubmit?: (values: FormValues) => void;
};

export const inputMap = (formConfig: InputItem[]) => {
  return formConfig.map(
    ({ type, id, placeholder, options, children }, index) => {
      // separa creazione SubForm
      if (type === "subform") {
        return (
          <SubForm inputs={children} key={id + index} label={placeholder} />
        );
      } else {
        const Component = elementsMap[type];
        return (
          <Component
            key={id + index}
            id={id}
            placeholder={placeholder}
            type={type}
            {...(type === "select" && { options })}
            {...(type === "checkbox" && { label: placeholder })}
          />
        );
      }
    }
  );
};

export const Form = ({
  title,
  className,
  initialFormConfig = [],
  onSubmit,
}: Props) => {
  const [formConfig, setFormConfig] = useState(initialFormConfig);

  const initialValues = useMemo(
    () => generateInitialValues(formConfig),
    [formConfig]
  );

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    onSubmit?.(values);
    setSubmitting(false);
  };

  return (
    <div className={className}>
      {title && <h2 className="form-title">{title}</h2>}

      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={handleSubmit}
      >
        <FormikForm>
          <>
            {inputMap(formConfig)}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </>
        </FormikForm>
      </Formik>
    </div>
  );
};

/* const handleAddEmail = () => {
  return setFormConfig((state) => {
    const firstEmailInput = state.findIndex(
      (input) => input.type === "email"
    );
    const newMailInput: InputItem = {
      type: "email",
      id: "otherEmail",
      placeholder: "Add another e-mail address",
    };
    state.splice(firstEmailInput, 0, newMailInput);
    console.log({ formConfig: formConfig, inputMap: inputMap(formConfig) });
    return state;
  });
}; */
