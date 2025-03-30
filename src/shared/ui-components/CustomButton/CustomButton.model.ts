import { ButtonType } from "../../common/Constants";

export interface ICustomButtonProps {
  name: string;
  onPress?: any;
  type: ButtonType;
}

export interface IStyledButtonProps {
  type: ButtonType;
  onPress: any;
}

export interface IButtonLabelProps {
  type: ButtonType;
}
