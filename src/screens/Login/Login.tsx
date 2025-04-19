import { View } from "react-native";
import {
  InputContainer,
  MainContainer,
  PasswordContainer,
  StyledView,
} from "./Login.styles";
import { useForm, Controller } from "react-hook-form";
import { ISignUpFormData, SignUpFormNames } from "./Login.model";
import TextLabel from "../../shared/ui-components/TextLabel/TextLabel";
import TextInput from "../../shared/ui-components/TextInput/TextInput";
import CustomButton from "../../shared/ui-components/CustomButton/CustomButton";
import { ButtonType } from "../../shared/common/Constants";
import { useState } from "react";

const Login = () => {
  const { control, handleSubmit } = useForm<ISignUpFormData>({
    defaultValues: {
      EmailOrUsername: "",
      Password: "",
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = (details: ISignUpFormData) => {
    try {
      setIsLoading(true);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainContainer>
      <InputContainer>
        <StyledView>
          <Controller
            name={SignUpFormNames.EmailOrUsername}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <TextLabel style={{ marginBottom: 8 }}>
                    Email or UserName
                  </TextLabel>
                  <TextInput value={value} onChange={onChange} />
                </>
              );
            }}
          />
        </StyledView>
        <PasswordContainer>
          <Controller
            name={SignUpFormNames.Password}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <TextLabel style={{ marginBottom: 8 }}>Password</TextLabel>
                  <TextInput value={value} onChange={onChange} />
                </>
              );
            }}
          />
        </PasswordContainer>
        <StyledView style={{ marginTop: 16 }}>
          <CustomButton
            isLoading={isLoading}
            type={ButtonType.Primary}
            name={"Submit"}
            onPress={handleSubmit(onSubmit)}
          />
        </StyledView>
      </InputContainer>
    </MainContainer>
  );
};

export default Login;
