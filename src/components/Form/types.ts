export type InputType = "text" | "email" | "number";

export type FormValues = {
  [key: string]: string | number | boolean | FormValues | null;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type InputItem = {
  type: InputType | "select" | "checkbox" | "subform";
  id: string;
  initialValue?: string;
  placeholder?: string;
  options?: SelectOption[];
  multiple?: boolean;
  children?: InputItem[];
};
