import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/contactsSlice';
import { Label, Input } from './ContactsFilter.styled';

export const ContactsFilter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
    const filterChanged = e =>
      dispatch(filteredContacts(e.currentTarget.value.trim()));
  
  return (
    <>
      <Label>
        Find contacts by name <br />
        <Input
          type="text"
          value={ filter }
          onChange={filterChanged}
        />
      </Label>
    </>
  );
};



