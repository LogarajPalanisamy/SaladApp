import styled from "styled-components/native";
import TextLabel from "../TextLabel/TextLabel";
import { ButtonType } from "../../common/Constants";
import {
  IButtonLabelProps,
  ICustomButtonProps,
  IStyledButtonProps,
} from "./CustomButton.model";

const getButtonTextColor = (type: string) => {
  switch (type) {
    case ButtonType.Primary:
      return "#FFFFFF";
    default:
      return "#FFFFFF";
  }
};

const getButtonBackgroundColor = (type: string) => {
  switch (type) {
    case ButtonType.Primary:
      return "#000000";
    default:
      return "#000000";
  }
};

export const StyledButton = styled.TouchableOpacity<IStyledButtonProps>`
  border-color: black;
  border-width: 2px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ type }) => getButtonBackgroundColor(type)};
  padding: 8px 12px;
`;

export const ButtonLabel = styled(TextLabel)<IButtonLabelProps>`
  color: ${({ type }) => getButtonTextColor(type)};
`;
