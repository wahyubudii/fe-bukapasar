import React, { FormEvent } from "react";
import { IconType } from "react-icons";

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: any;
};

export type MetaProps = {
  title: string;
  description: string;
  favicon: string;
  type: string;
};

export type routeProps = {
  name: string;
  route: string;
};

export type menuItemProps = {
  name: string;
  icon: IconType;
  route: string;
};

export type FormFieldProps = {
  classname?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  children?: React.ReactNode;
  handleChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  iconButton?: IconType | any;
};

export type FooterItemProps = {
  title: string;
  route: string;
};

export type SocialMediaProps = {
  title: string;
  route: string;
  icon: IconType;
};

export type ContactItemProps = string[]
