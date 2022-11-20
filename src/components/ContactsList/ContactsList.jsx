// import PropTypes from 'prop-types'; 
import { useDispatch,useSelector  } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactsList.styled';
import { deleteContact} from 'redux/contactsSlice';

export const ContactsList = ({ contact }) => {

   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);
   const dispatch = useDispatch();

  const getVisibleContacts = () => {
    if (filter && filter.length > 0) {
      return contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
    }

    return contacts;
  }

  const handleDelete = (id) => dispatch(deleteContact(id));
  
   return (
    <>
      <List>
        {getVisibleContacts().map(contact => (
          <Item key={contact.id}>
            <Text>
              {contact.name} : {contact.number}
            </Text>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
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


