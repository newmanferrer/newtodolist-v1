import { FC } from 'react';
import { useTodoListContext } from '../../contexts';
import {
 MainContainer,
 TitleWrapper,
 Title,
 ComplitedIconsWrapper,
 FaRegCircleIcon,
 FaRegCheckCircleIcon
} from './StyledComponents';
import { ITodo } from '../../models';

interface ITodoItemProps {
 todo: ITodo;
 openModal: () => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo, openModal }): JSX.Element => {
 const { setTodoEdit, complitedToggleTodo } = useTodoListContext();
 const { id, title, completed, priority } = todo;

 return (
  <MainContainer>
   <TitleWrapper
    priority={priority}
    onClick={() => {
     setTodoEdit(todo);
     openModal();
    }}
   >
    <Title completed={completed}>{title}</Title>
   </TitleWrapper>

   <ComplitedIconsWrapper onClick={() => complitedToggleTodo(id)}>
    {completed ? <FaRegCheckCircleIcon /> : <FaRegCircleIcon />}
   </ComplitedIconsWrapper>
  </MainContainer>
 );
};
