import { InputItem } from "./types";

export const formConfig: InputItem[] = [
  { type: "text", id: "firstName", placeholder: "First name" },
  { type: "text", id: "lastName", placeholder: "Last name" },
  { type: "email", id: "email", placeholder: "E-mail address" },
  {
    type: "select",
    id: "country",
    placeholder: "Country",
    options: [
      {
        label: "Italy",
        value: "ITA",
      },
      {
        label: "USA",
        value: "USA",
      },
    ],
  },
  {
    type: "subform",
    id: "socials",
    multiple: false,
    children: [
      {
        type: "text",
        id: "facebook",
        placeholder: "Facebook username",
      },
      {
        type: "text",
        id: "instagram",
        placeholder: "Instagram username",
      },
    ],
  },
  {
    type: "subform",
    id: "family",
    placeholder: "Family",
    multiple: true,
    children: [
      { type: "text", id: "childName", placeholder: "Your child's name" },
    ],
  },
  { type: "checkbox", id: "rememberMe", placeholder: "Remember me?" },
];
