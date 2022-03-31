import { FC, useEffect, useRef, ChangeEvent } from 'react';
import { useTodoListContext } from '../../contexts';
import { useForm } from '../../hooks';
import {
 MainContainer,
 Form,
 TitleWrapper,
 MainTitle,
 InputsWrapper,
 InputTitle,
 TextArea,
 PriorityWrapper,
 PriorityLabel,
 IconPrioritylabel,
 InputPriority,
 PriorityNormalIcon,
 PriorityMediumIcon,
 PriorityHighIcon,
 StartDateWrapper,
 StartDateLabelWrapper,
 StartDateLabel,
 DueDateWrapper,
 DueDateLabelWrapper,
 DueDateLabel,
 InputDueDate,
 CompletedWrapper,
 LabelCompleted,
 InputCompleted,
 IconCompletedlabel,
 FaRegCircleIcon,
 FaRegCheckCircleIcon,
 ButtonsWrapper,
 AddIcon,
 EditIcon,
 DeleteIcon,
 CancelIcon,
 ButtonAddTodo,
 ButtonEditTodo,
 ButtonDeleteTodo,
 ButtonCancel
} from './StyledComponents';

import { ITodo } from '../../models';

const initialState: ITodo = {
 id: '',
 title: '',
 description: '',
 priority: 'normal',
 startDate: new Date().toLocaleString(),
 dueDate: '',
 completed: false
};

interface ITodoItemFormProps {
 closeModal: () => void;
}

export const TodoItemForm: FC<ITodoItemFormProps> = ({ closeModal }): JSX.Element => {
 const { todoEdit, setTodoEdit, addTodo, updateTodo, deleteTodo } = useTodoListContext();
 const { form, setForm, handleChange } = useForm<ITodo>(initialState);
 const inputTitleRef = useRef<HTMLInputElement>();

 useEffect(() => {
  if (todoEdit) {
   setForm(todoEdit);
  } else {
   setForm(initialState);
  }
 }, [todoEdit, setForm, closeModal]);

 const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (todoEdit) {
   updateTodo(form);
  } else {
   addTodo(form);
  }

  setForm(initialState);
 };

 return (
  <MainContainer>
   <Form onSubmit={handleSubmit}>
    <TitleWrapper>
     <MainTitle>{todoEdit ? 'Edit or Delete' : 'Add New Todo'}</MainTitle>
    </TitleWrapper>

    <InputsWrapper>
     <InputTitle
      type='text'
      name='title'
      autoFocus
      ref={inputTitleRef}
      value={form.title}
      placeholder='Add Title'
      onChange={handleChange}
     />

     <TextArea
      name='description'
      value={form.description}
      placeholder='Add Description'
      onChange={handleChange}
     />

     <PriorityWrapper>
      <PriorityLabel htmlFor='normal'>Priority:</PriorityLabel>
      <InputPriority
       type='radio'
       name='priority'
       id='normal'
       value='normal'
       checked={form.priority === 'normal'}
       onChange={handleChange}
      />
      <IconPrioritylabel htmlFor='normal'>
       <PriorityNormalIcon />
      </IconPrioritylabel>

      <InputPriority
       type='radio'
       name='priority'
       id='medium'
       value='medium'
       checked={form.priority === 'medium'}
       onChange={handleChange}
      />
      <IconPrioritylabel htmlFor='medium'>
       <PriorityMediumIcon />
      </IconPrioritylabel>

      <InputPriority
       type='radio'
       name='priority'
       id='high'
       value='high'
       checked={form.priority === 'high'}
       onChange={handleChange}
      />
      <IconPrioritylabel htmlFor='high'>
       <PriorityHighIcon />
      </IconPrioritylabel>
     </PriorityWrapper>

     <StartDateWrapper>
      <StartDateLabelWrapper>
       <StartDateLabel>Start:</StartDateLabel>
       {form.startDate}
      </StartDateLabelWrapper>
     </StartDateWrapper>

     <DueDateWrapper>
      <DueDateLabelWrapper>
       <DueDateLabel htmlFor='dueDate'>Due:</DueDateLabel>
      </DueDateLabelWrapper>

      <InputDueDate
       type='datetime-local'
       name='dueDate'
       id='dueDate'
       min='2021-08-02'
       pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
       value={form.dueDate}
       onChange={handleChange}
      />
     </DueDateWrapper>

     <CompletedWrapper>
      <LabelCompleted htmlFor='completed'>Completed:</LabelCompleted>
      <InputCompleted
       type='checkbox'
       id='completed'
       name='completed'
       value='completed'
       checked={form.completed}
       onChange={handleChange}
      />
      <IconCompletedlabel htmlFor='completed'>
       {form.completed ? <FaRegCheckCircleIcon /> : <FaRegCircleIcon />}
      </IconCompletedlabel>
     </CompletedWrapper>
    </InputsWrapper>

    <ButtonsWrapper>
     {!todoEdit ? (
      <ButtonAddTodo type='submit' onClick={() => inputTitleRef?.current?.focus()}>
       <AddIcon />
      </ButtonAddTodo>
     ) : (
      <>
       <ButtonEditTodo
        type='submit'
        onClick={() => {
         updateTodo(form);
         closeModal();
        }}
       >
        <EditIcon />
       </ButtonEditTodo>

       <ButtonDeleteTodo
        onClick={() => {
         deleteTodo(form.id);
         closeModal();
        }}
       >
        <DeleteIcon />
       </ButtonDeleteTodo>
      </>
     )}
     <ButtonCancel
      type='reset'
      onClick={() => {
       setTodoEdit(null);
       closeModal();
      }}
     >
      <CancelIcon />
     </ButtonCancel>
    </ButtonsWrapper>
   </Form>
  </MainContainer>
 );
};
