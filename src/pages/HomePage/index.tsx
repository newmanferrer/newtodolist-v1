import { FC } from 'react';
import { Header, TodoSearchForm, TodoList, AddTodoButton, AddTodoModal } from '../../components';
import { useModal } from '../../hooks';

export const HomePage: FC = (): JSX.Element => {
 const { isOpenModal, openModal, closeModal } = useModal(false);

 return (
  <>
   <Header />
   <TodoSearchForm />
   <TodoList openModal={openModal} />
   <AddTodoButton openModal={openModal} />
   <AddTodoModal
    width='90%'
    height='80%'
    alignX='center'
    alignY='center'
    bgColor={true}
    isOpenModal={isOpenModal}
    closeModal={closeModal}
   />
  </>
 );
};
