import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay, {
  background: "rgba(0, 0, 0, 0.4)",
  position: 'fixed',
  inset: 0,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray700',
  padding: "3.5rem 4.5rem",
  borderRadius: "$md",
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32.25rem',
  // height: '21.06rem',
  '&:focus': { outline: 'none' },
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  button: {
    boxSizing: "border-box",
    width: "23.25rem",
    height: "4.5rem",
    padding: "$5 $6 $5 $6",
    fontSize: "$lg",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "$gray600",
    color: "$white",
    border: "none",
    borderRadius: "$md",
    cursor: "pointer",
    transition: "0.3s background",
    gap: "1rem",

    svg: {

    }
  }
})

export const DialogTitle = styled(Dialog.Title, {
  color: "$gray200",
  fontSize: "1rem",
  textAlign: "center",
  marginBottom: "2.5rem",
})