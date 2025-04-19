import { ButtonLabel, StyledButton } from "./CustomButton.styles";
import { ICustomButtonProps } from "./CustomButton.model";
import { ActivityIndicator } from "react-native";
const CustomButton = (props: ICustomButtonProps) => {
  const { name, onPress, type, isLoading } = props;
  return (
    <StyledButton onPress={onPress} type={type}>
      <ButtonLabel type={type}>
        {isLoading ? <ActivityIndicator></ActivityIndicator> : name}
      </ButtonLabel>
    </StyledButton>
  );
};

export default CustomButton;
