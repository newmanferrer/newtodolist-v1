import { ChangeEvent, useState } from 'react';

export const useForm = <Type extends Object>(initialFormState: Type) => {
 const [form, setForm] = useState(initialFormState);

 const handleChange = ({ target }: ChangeEvent<HTMLInputElement> | any) => {
  const { type, name, value, checked } = target;

  setForm({
   ...form,
   [name]:
    type === 'select-multiple'
     ? Array.from(target.selectedOptions, (option: any) => option.value)
     : type === 'checkbox'
     ? checked
     : value
  });
 };

 return {
  form,
  ...form,
  setForm,
  handleChange
 };
};
