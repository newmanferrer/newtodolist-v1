import { FC, ChangeEvent, useEffect } from 'react';
import { useTodoSearchContext } from '../../contexts';
import { useForm } from '../../hooks';
import { MainContainer, Form, Input } from './StyledComponents';

interface ITodoSearch {
 search: string;
}

const initialState: ITodoSearch = {
 search: ''
};

export const TodoSearchForm: FC = (): JSX.Element => {
 const { setSearch } = useTodoSearchContext();
 const { form, handleChange } = useForm<ITodoSearch>(initialState);

 useEffect(() => {
  setSearch(form.search);
 }, [form]);

 const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
  event.preventDefault();
 };

 return (
  <MainContainer>
   <Form onSubmit={handleSubmit}>
    <Input
     type='text'
     name='search'
     autoFocus
     autoComplete='off'
     value={form.search}
     placeholder='search for title'
     onChange={handleChange}
    />
   </Form>
  </MainContainer>
 );
};
