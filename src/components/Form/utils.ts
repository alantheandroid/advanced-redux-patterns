import Checkbox from "../Checkbox";
import Input from "../Input";
import Select from "../Select";
import { FormValues, InputItem } from "./types";

export const elementsMap = {
  select: Select,
  text: Input,
  email: Input,
  number: Input,
  checkbox: Checkbox,
};

export const generateInitialValues = (formConfig: InputItem[]) => {
  return formConfig.reduce((acc, { type, id, initialValue }) => {
    if (initialValue) {
      acc[id] = initialValue;
    } else {
      switch (type) {
        case "text":
        case "email":
        case "select":
          acc[id] = "";
          break;
        case "number":
          acc[id] = 0;
          break;
        case "checkbox":
          acc[id] = false;
          break;
        default:
          acc[id] = null;
          break;
      }
    }
    return acc;
  }, {} as FormValues);
};

/* export type MappedInputItem = Omit<InputItem, "children"> & {
  children: MappedInputItem[] | MappedInputItem[][];
};

export const subformChildrenMapper = (
  formConfig: InputItem[]
): MappedInputItem[] => {
  return formConfig.map((input) => {
    return input.multiple
      ? ({ ...input, children: [input.children] } as MappedInputItem)
      : (input as MappedInputItem);
  });
};

export const recursiveInputMapper = (
  mappedFormConfig: MappedInputItem[],
  parentId = "",
  childIndex = 0
) => {
  return mappedFormConfig.map((input) => {
    const childId = `${parentId}.${childIndex}.${input.id}`;
    const newId = parentId ? childId : "";

    if (input.type === "subform" && input.children && input.multiple) {
      let childrenToMap = input.children as MappedInputItem[][];
      childrenToMap = childrenToMap.map((child, index) => {
        return recursiveInputMapper(
          child,
          newId !== "" ? newId : input.id,
          index
        );
      });
      return { ...input, children: childrenToMap, id: newId };
    }
  });
}; */
