import {  Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button, Input, Label, FormPhone } from './PhonebookForm.styled';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.text.value));
    form.reset();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormPhone autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormPhone>
    </Formik>
  );
};

