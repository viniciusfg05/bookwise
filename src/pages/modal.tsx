import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <Dialog.Close asChild>
            <Button>Save changes</Button>
          </Dialog.Close>
        </Flex>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <FaArrowAltCircleDown />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { translate: "150%" },
  "100%": { translate: "0%" },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$gray100",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray700",
  position: "fixed",
  top: "50%",
  left: "41.25rem",
  transform: "translate(150%, -50%)",
  width: "100%",
  maxWidth: "41.25rem",
  height: "100vh",
  padding: "3rem",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogTitle = styled(Dialog.Title, {});

const DialogDescription = styled(Dialog.Description, {});

const Flex = styled("div", { display: "flex" });

const Button = styled("button", {});

const IconButton = styled("button", {});

const Fieldset = styled("fieldset", {});

const Label = styled("label", {});

const Input = styled("input", {});

export default DialogDemo;
