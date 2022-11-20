import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './ContactsFilter.styled';

export const ContactsFilter = () => {

  const dispatch = useDispatch();
  
   const filter = useSelector(getFilter);

  const filterChanged = filter => dispatch(setFilter(filter));
  
  return (
    <>
      <Label>
        Find contacts by name <br />
        <Input
          type="text"
          onChange={e => filterChanged(e.target.value.toLocaleLowerCase())}
        />
      </Label>
    </>
  );
};



