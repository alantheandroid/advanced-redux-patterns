import { InputType, FormValues } from ".";
import { SelectOption } from "../Select";

export type InputItem = {
  type: InputType | "select" | "checkbox";
  id: string;
  initialValue?: string;
  placeholder?: string;
  children?: any /* nested items go here */;
};

export const formConfig: InputItem[] = [
  { type: "text", id: "firstName", placeholder: "Insert first name" },
  { type: "text", id: "lastName", placeholder: "Insert last name" },
  { type: "email", id: "email", placeholder: "Insert email address" },
  {
    type: "select",
    id: "country",
    placeholder: "Insert email address",
  },
];

export const countriesOptions: SelectOption[] = [
  {
    label: "Italia",
    value: "ITA",
  },
  {
    label: "USA",
    value: "USA",
  },
];

export const optionsMap = {
  countries: countriesOptions,
};
