import styled from "styled-components/native";
import { IStyledTextInput } from "./TextInput.model";

export const CustomTextInput = styled.TextInput<IStyledTextInput>`
  width: 100%;
  border-color: ${(props) => (props.isFocused ? "#808080	" : "#d1d1d1")};
  min-height: 40px;
  border-width: 2px;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;
