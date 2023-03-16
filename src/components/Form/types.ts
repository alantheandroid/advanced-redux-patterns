export type InputType = "text" | "email" | "number";

export type SelectOption = {
  label: string;
  value: string;
};

export type FormValues = {
  [key: string]: string | SelectOption[] | number | boolean | null;
};

export type InputItem = {
  type: InputType | "select" | "checkbox" | "subform";
  id: string;
  initialValue?: string;
  placeholder?: string;
  multiple?: boolean;
  options?: SelectOption[];
  children?: InputItem[] /* nested items go here */;
};
