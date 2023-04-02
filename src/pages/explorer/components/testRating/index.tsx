import { InputContainer, StyledCheckbox, StyledLabel } from "./styles";

export function RatingStarsReview() {
  return (
    <InputContainer>
      <StyledCheckbox id="star" name="star" />
      <StyledLabel htmlFor="star"></StyledLabel>
    </InputContainer>
  )
}
