import { styled } from "../../../../styles/stitches.config";

export const InputContainer = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
});

export const StyledCheckbox = styled("input", {
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0,
  background: "black",
});

export const StyledLabel = styled("label", {
  cursor: "pointer",
  width: "24px",
  height: "24px",
  background: "red",
});

StyledCheckbox.defaultProps = {
  type: "checkbox",
};