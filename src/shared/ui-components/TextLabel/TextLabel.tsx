import { ITextLabel } from "./TextLabel.model";
import { TextContainer } from "./TextLabel.styles";

const TextLabel = (props: ITextLabel) => {
  const { children, style } = props;
  return <TextContainer style={style}>{children} </TextContainer>;
};

export default TextLabel;
