// import PropTypes from 'prop-types'; 
import { useDispatch,useSelector  } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactsList.styled';
import { deleteContact} from 'redux/contactsSlice';

export const ContactsList = ({ contact }) => {

   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);
   const dispatch = useDispatch();

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter));

  const handleDelete = () => dispatch(deleteContact(contact.id));
  
   return (
    <>
      <List>
        {getVisibleContacts.map(contact => (
          <Item key={contact.id}>
            <Text>
              {contact.name} : {contact.number}
            </Text>
            <Button onClick={handleDelete}>Delete</Button>
          </Item>
        ))}
      </List>
    </>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };


