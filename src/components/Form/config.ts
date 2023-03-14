import { InputType, FormValues } from ".";
import { SelectOption } from "../Select";

type InputChildrenType = {
  text: string[];
  email: string[];
  number: number[];
  select: SelectOption[];
  checkbox: boolean[];
};

export type InputItem = {
  type: InputType | "select" | "checkbox";
  id: string;
  initialValue?: string;
  placeholder?: string;
  options?: SelectOption[];
  children?: any /* nested items go here */;
};

export const formConfig: InputItem[] = [
  { type: "text", id: "firstName", placeholder: "Insert first name" },
  { type: "text", id: "lastName", placeholder: "Insert last name" },
  { type: "email", id: "email", placeholder: "Insert email address" },
  {
    type: "select",
    id: "country",
    placeholder: "Insert country",
    options: [
      {
        label: "Italia",
        value: "ITA",
      },
      {
        label: "USA",
        value: "USA",
      },
    ],
  },
  { type: "checkbox", id: "rememberMe", placeholder: "Remember me" },
];

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
