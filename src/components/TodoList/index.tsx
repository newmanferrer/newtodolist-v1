import { FC } from 'react';
import { TodoItem } from '../';
import { useTodoListContext, useTodoSearchContext } from '../../contexts';
import { MainContainer, NoTodosLabel } from './StyledComponents';

interface ITodoListProps {
 openModal: () => void;
}

export const TodoList: FC<ITodoListProps> = ({ openModal }): JSX.Element => {
 const { todos } = useTodoListContext();
 const { search } = useTodoSearchContext();

 return (
  <MainContainer>
   {todos.length <= 0 ? (
    <NoTodosLabel>No todo yet, please add one todo...</NoTodosLabel>
   ) : (
    todos
     .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
     .map(todo => <TodoItem key={todo.id} openModal={openModal} todo={todo} />)
   )}
  </MainContainer>
 );
};
