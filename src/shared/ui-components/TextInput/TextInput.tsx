import { useState } from "react";
import { ICustomTextInput } from "./TextInput.model";
import { CustomTextInput } from "./TextInput.styles";

const TextInput = (TextInputProps: ICustomTextInput) => {
  const { value, onChange } = TextInputProps;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <CustomTextInput
      value={value}
      onChangeText={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
    />
  );
};

export default TextInput;
