import { FC, MouseEvent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useTodoListContext } from '../../contexts';
import { MainContainer, ContentWrapper, CloseIconWrapper, CloseIcon } from './StyledComponents';

interface IModalProps {
 width?: string;
 height?: string;
 alignX?: string;
 alignY?: string;
 bgColor?: boolean;
 isOpenModal?: boolean;
 closeModal: () => void;
 children?: ReactNode;
}

const modalPortal = document.getElementById('modal-portal');

export const Modal: FC<IModalProps> = ({
 width,
 height,
 alignX,
 alignY,
 bgColor,
 isOpenModal,
 closeModal,
 children
}): JSX.Element => {
 const { setTodoEdit } = useTodoListContext();

 const handleClickPropagation = (event: MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
 };

 if (modalPortal !== null) {
  return ReactDOM.createPortal(
   <MainContainer
    alignX={alignX}
    alignY={alignY}
    bgColor={bgColor}
    isOpenModal={isOpenModal}
    onClick={() => {
     setTodoEdit(null);
     closeModal();
    }}
   >
    <ContentWrapper width={width} height={height} onClick={handleClickPropagation}>
     <CloseIconWrapper
      onClick={() => {
       closeModal();
       setTodoEdit(null);
      }}
     >
      <CloseIcon />
     </CloseIconWrapper>
     {children}
    </ContentWrapper>
   </MainContainer>,
   modalPortal
  );
 } else {
  throw Error('HTMLElement "modalPortal" is null');
 }
};
