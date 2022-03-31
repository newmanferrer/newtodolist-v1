import { FC } from 'react';
import { Modal, TodoItemForm } from '../';

interface IAddTodoModalProps {
 width?: string;
 height?: string;
 alignX?: string;
 alignY?: string;
 bgColor?: boolean;
 isOpenModal: boolean;
 closeModal: () => void;
}

export const AddTodoModal: FC<IAddTodoModalProps> = ({
 width,
 height,
 alignX,
 alignY,
 bgColor,
 isOpenModal,
 closeModal
}) => {
 return (
  <Modal
   width={width}
   height={height}
   alignX={alignX}
   alignY={alignY}
   bgColor={bgColor}
   isOpenModal={isOpenModal}
   closeModal={closeModal}
  >
   <TodoItemForm closeModal={closeModal} />
  </Modal>
 );
};
