// import PropTypes from 'prop-types'; 
import { useDispatch,useSelector  } from 'react-redux';
import { getContacts} from 'redux/selectors';
import { List, Item, Text, Button } from './ContactsList.styled';
import { deleteContact} from 'redux/contactsSlice';


export const ContactsList = ({ contact }) => {

   const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(contact.id));
  
  const contacts = useSelector(getContacts);
 
  return (
    <>
      <List>
        {contacts.map(contact => (
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


