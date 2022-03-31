import { FC } from 'react';
import { MainContainer, Button } from './StyledComponents';

interface IAddTodoButtonProps {
 openModal: () => void;
}

export const AddTodoButton: FC<IAddTodoButtonProps> = ({ openModal }): JSX.Element => {
 return (
  <MainContainer>
   <Button onClick={openModal}>Add Todo</Button>
  </MainContainer>
 );
};
