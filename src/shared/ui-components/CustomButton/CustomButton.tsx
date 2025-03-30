import { Button } from "react-native";
import { ButtonLabel, StyledButton } from "./CustomButton.styles";
import TextLabel from "../TextLabel/TextLabel";
import { ICustomButtonProps } from "./CustomButton.model";
const CustomButton = (props: ICustomButtonProps) => {
  const { name, onPress, type } = props;
  return (
    <StyledButton onPress={onPress} type={type}>
      <ButtonLabel type={type}>{name}</ButtonLabel>
    </StyledButton>
  );
};

export default CustomButton;
