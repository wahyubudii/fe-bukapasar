import { RegisterFieldProps, RegisterProps } from "@/types";
import { FormEvent, useState } from "react";

const [isChecked, setIsChecked] = useState<boolean>(false);
const [fields, setFields] = useState<RegisterProps>({
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
});

const handleChange = (e: FormEvent<HTMLInputElement>) => {
  setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value,
  });
  setIsChecked(e.currentTarget.checked);
};

export const fieldItems: RegisterFieldProps[] = [
  {
    label: "Firstname",
    name: "firstname",
    type: "text",
    value: fields.firstname,
    placeholder: "John",
    onChange: handleChange,
    validation: {
      required: "Firstname is required!",
      minLength: {
        value: 3,
        message: `Firstname must be atleast 3 characters long!`,
      },
      maxLength: {
        value: 30,
        message: `Firstname must be atmost 30 characters long!`,
      },
    },
  },
  {
    label: "Lastname",
    name: "lastname",
    type: "text",
    value: fields.lastname,
    placeholder: "Doe",
    onChange: handleChange,
    validation: {
      required: "Lastname is required!",
      minLength: {
        value: 3,
        message: `Lastname must be atleast 3 characters long!`,
      },
      maxLength: {
        value: 30,
        message: `Lastname must be atmost 30 characters long!`,
      },
    },
  },
  {
    label: "Phone Number",
    name: "mobile",
    type: "number",
    value: fields.mobile,
    placeholder: "08585619399",
    onChange: handleChange,
    validation: {
      required: "Phone number is required!",
      minLength: {
        value: 11,
        message: `Phone number must be atleast 11 number long!`,
      },
      maxLength: {
        value: 13,
        message: `Phone number must be atmost 12 number long!`,
      },
    },
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    value: fields.email,
    placeholder: "johndoe@gmail.com",
    onChange: handleChange,
    validation: {
      required: "Email is required!",
      minLength: {
        value: 10,
        message: `Email must be atleast 10 characters long!`,
      },
      maxLength: {
        value: 50,
        message: `Email must be atmost 50 characters long!`,
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email tidak valid",
      },
    },
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    value: fields.password,
    placeholder: "****************",
    onChange: handleChange,
    validation: {
      required: "Password is required!",
      minLength: {
        value: 6,
        message: `Password must be atleast 6 characters long!`,
      },
      maxLength: {
        value: 30,
        message: `Password must be atmost 30 characters long!`,
      },
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
        message:
          "Password must contain atleast upper case, lower case, number, and special characters",
      },
    },
  },
];
