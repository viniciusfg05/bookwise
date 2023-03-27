import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "../../../../styles/stitches.config"
import { Books } from '../books';
import { BookContent, BookDetail, DialogContent } from './styles';

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <DialogContent>
        <BookDetail>
          <BookContent>
            <Books typeFor="modal"/>
          </BookContent>
          
        </BookDetail>
      </DialogContent>
    </Dialog.Portal>
  )
}

