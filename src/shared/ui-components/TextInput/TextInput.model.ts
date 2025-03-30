import { TextInputProps } from "react-native";

export interface ICustomTextInput {
  value: string;
  onChange: (value: string) => void;
}

export interface IStyledTextInput extends TextInputProps {
  isFocused: boolean;
}
